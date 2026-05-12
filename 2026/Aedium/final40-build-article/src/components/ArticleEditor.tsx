import { BlockNoteView } from '@blocknote/mantine';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RequireVerifiedEmail from './RequireVerifiedEmail';

import { useDraft } from './draft';
import { useEditor } from './editor';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { editorPublishSignalAtom } from '../atoms/editor';
import { isEditorEmpty } from '../utils/editorHelper';

function ArticleEditor() {
  const { draft, setDraft, saveDraft } = useDraft();

  const { editor, handleEditorChange, resetEditor } = useEditor(
    draft,
    setDraft,
    saveDraft,
  );

  const editorPublishSignal = useAtomValue(editorPublishSignalAtom);

  function handlePublish() {}

  useEffect(() => {
    if (!isEditorEmpty(editor.document) && editorPublishSignal) {
      console.log('publish');
      resetEditor();
    }
  }, [editorPublishSignal]);

  return (
    <RequireVerifiedEmail>
      <BlockNoteView
        onChange={handleEditorChange}
        className={styles.editor}
        editor={editor}
      />
    </RequireVerifiedEmail>
  );
}

export default ArticleEditor;
