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
import { isEditorEmpty as isEditorEmptyHelper } from '../utils/editorHelper';
import { useAtom } from 'jotai';
import { isEditorEmptyAtom } from '../atoms/editor';
import { EDITOR_DEFAULT } from '../constants/editor';

function ArticleEditor() {
  const { draft, setDraft } = useDraft();

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,
  });

  const [isEditorEmpty, setIsEditorEmpty] = useAtom(isEditorEmptyAtom);

  const saveDraft = debounce((document) => {
    if (isEditorEmptyHelper(editor.document)) {
      setIsEditorEmpty(true);
      setDraft(EDITOR_DEFAULT);
      return;
    }

    setIsEditorEmpty(false);
    setDraft(document);
  }, 500);

  useEffect(() => {
    if (!isEditorEmptyHelper(editor.document)) {
      setIsEditorEmpty(false);
      return;
    }

    return () => {
      saveDraft.flush();
      saveDraft.cancel();
    };
  }, []);

  useEffect(() => {
    if (isEditorEmpty) {
      setDraft(EDITOR_DEFAULT);
      editor.replaceBlocks(editor.document, EDITOR_DEFAULT);
    }
  }, [isEditorEmpty]);

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
