import { BlockNoteView } from '@blocknote/mantine';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RequireVerifiedEmail from './RequireVerifiedEmail';

import { useDraft } from './draft';
import { useEditor } from './editor';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { editorPublishSignalAtom } from '../atoms/editor';
import { isEditorEmpty } from '../utils/editorHelper';
import { userAtom } from '../atoms/user';
import { usePublish } from './publish';

function ArticleEditor() {
  const { draft, setDraft, saveDraft } = useDraft();

  const { editor, handleEditorChange, resetEditor } = useEditor(
    draft,
    setDraft,
    saveDraft,
  );

  const [editorPublishSignal, setEditorPublishSignal] = useAtom(
    editorPublishSignalAtom,
  );
  const user = useAtomValue(userAtom);

  const { publishArticle } = usePublish(editor);

  useEffect(() => {
    if (user && editorPublishSignal && !isEditorEmpty(editor.document)) {
      publishArticle(
        {},
        {
          onSuccess: () => {
            resetEditor();
            setEditorPublishSignal(0);
          },
        },
      );
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
