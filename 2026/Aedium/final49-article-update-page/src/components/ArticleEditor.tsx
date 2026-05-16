import RequireVerifiedEmail from './RequireVerifiedEmail';

import { useDraft } from './draft';
import { useEditor } from './editor';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { editorPublishSignalAtom } from '@/atoms/editor';
import { isEditorEmpty } from '@/utils/editorHelper';
import { userAtom } from '@/atoms/user';
import { usePublish } from './publish';
import AppEditor from './AppEditor';

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
      {/* <BlockNoteView
        onChange={handleEditorChange}
        className={styles.editor}
        editor={editor}
      /> */}

      <AppEditor editor={editor} onChange={handleEditorChange} />
    </RequireVerifiedEmail>
  );
}

export default ArticleEditor;
