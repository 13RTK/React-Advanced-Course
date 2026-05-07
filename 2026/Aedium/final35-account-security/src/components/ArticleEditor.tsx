import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RootLayout from './RootLayout';
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

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,
  });

  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);
  const editorEmptySignal = useAtomValue(editorEmptySignalAtom);

  const saveDraft = debounce((document) => {
    if (isEditorEmpty(editor.document)) {
      setIsEditorEmpty(true);
      setDraft(EDITOR_DEFAULT);
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
      setDraft(EDITOR_DEFAULT);
      editor.replaceBlocks(editor.document, EDITOR_DEFAULT);
    }
  }, [editorEmptySignal]);

  return (
    <RequireLogin>
      <RequireVerifiedEmail>
        <RootLayout>
          <BlockNoteView
            onChange={(editor) => saveDraft(editor.document)}
            className={styles.editor}
            editor={editor}
          />
        </RootLayout>
      </RequireVerifiedEmail>
    </RequireLogin>
  );
}

export default ArticleEditor;
