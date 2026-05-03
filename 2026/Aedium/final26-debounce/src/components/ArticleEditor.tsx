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

function ArticleEditor() {
  const { draft, setDraft } = useDraft();

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,
  });

  const saveDraft = debounce((document) => {
    setDraft(document);
  }, 500);

  useEffect(() => {
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
