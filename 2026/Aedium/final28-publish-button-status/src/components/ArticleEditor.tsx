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
import { useSetAtom } from 'jotai';
import { isEditorEmptyAtom } from '../atoms/editor';

function ArticleEditor() {
  const { draft, setDraft } = useDraft();

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,
  });

  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);

  const saveDraft = debounce((document) => {
    if (isEditorEmpty(editor.document)) {
      setIsEditorEmpty(true);
      setDraft([
        {
          type: 'paragraph',
          content: '',
        },
      ]);
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
