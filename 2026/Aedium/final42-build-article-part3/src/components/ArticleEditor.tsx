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
import { buildArticleInsert, isEditorEmpty } from '../utils/editorHelper';
import { userAtom } from '../atoms/user';
import { insertArticle } from '../services/apiArticle';

function ArticleEditor() {
  const { draft, setDraft, saveDraft } = useDraft();

  const { editor, handleEditorChange, resetEditor } = useEditor(
    draft,
    setDraft,
    saveDraft,
  );

  const editorPublishSignal = useAtomValue(editorPublishSignalAtom);
  const user = useAtomValue(userAtom);

  async function handlePublish() {
    if (!user) {
      throw new Error('User not found');
    }

    const insertArticleData = buildArticleInsert(editor, user.id);

    await insertArticle(insertArticleData);
  }

  useEffect(() => {
    if (user && !isEditorEmpty(editor.document) && editorPublishSignal) {
      handlePublish();
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
