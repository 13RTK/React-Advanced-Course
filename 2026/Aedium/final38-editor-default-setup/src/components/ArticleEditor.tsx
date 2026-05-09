import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import { en } from '@blocknote/core/locales';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RequireLogin from './RequireLogin';
import RequireVerifiedEmail from './RequireVerifiedEmail';
import { debounce } from 'es-toolkit/function';

import { useDraft } from './draft';
import { useEffect } from 'react';
import { isEditorEmpty } from '../utils/editorHelper';
import { useAtomValue, useSetAtom } from 'jotai';
import { editorEmptySignalAtom, isEditorEmptyAtom } from '../atoms/editor';
import { EDITOR_DEFAULT } from '../constants/editor';

function ArticleEditor() {
  const { draft, setDraft } = useDraft();

  const locale = en;

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,

    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        // We override the default placeholder
        default: 'Tell your story',
        // We override the heading placeholder
        heading: 'Your title of story',
      },
    },
  });

  function resetEditor() {
    setDraft(EDITOR_DEFAULT);
    setIsEditorEmpty(true);
    saveDraft.cancel();
    editor.replaceBlocks(editor.document, EDITOR_DEFAULT);
  }

  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);
  const editorEmptySignal = useAtomValue(editorEmptySignalAtom);

  const saveDraft = debounce((document) => {
    if (isEditorEmpty(editor.document)) {
      resetEditor();
      return;
    }

    setIsEditorEmpty(false);
    setDraft(document);
  }, 500);

  useEffect(() => {
    if (!isEditorEmpty(editor.document)) {
      setIsEditorEmpty(false);
      return;
    }

    return () => {
      saveDraft.flush();
      saveDraft.cancel();
    };
  }, []);

  useEffect(() => {
    if (editorEmptySignal) {
      resetEditor();
    }
  }, [editorEmptySignal]);

  function handleEditorChange(changedEditor: typeof editor) {
    if (isEditorEmpty(changedEditor.document)) {
      resetEditor();

      return;
    }

    saveDraft(changedEditor.document);
  }

  return (
    <RequireLogin>
      <RequireVerifiedEmail>
        <BlockNoteView
          onChange={handleEditorChange}
          className={styles.editor}
          editor={editor}
        />
      </RequireVerifiedEmail>
    </RequireLogin>
  );
}

export default ArticleEditor;
