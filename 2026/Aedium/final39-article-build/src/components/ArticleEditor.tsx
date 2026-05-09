import { BlockNoteView } from '@blocknote/mantine';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RequireLogin from './RequireLogin';
import RequireVerifiedEmail from './RequireVerifiedEmail';

import { useDraft } from './draft';
import { useEffect } from 'react';
import { isEditorEmpty } from '../utils/editorHelper';
import { useAtomValue, useSetAtom } from 'jotai';
import { editorEmptySignalAtom, isEditorEmptyAtom } from '../atoms/editor';
import { useEditor } from './editor';

function ArticleEditor() {
  const { draft, setDraft, saveDraft } = useDraft();

  const { editor, resetEditor, handleEditorChange } = useEditor(
    draft,
    setDraft,
    saveDraft,
  );

  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);
  const editorEmptySignal = useAtomValue(editorEmptySignalAtom);

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
