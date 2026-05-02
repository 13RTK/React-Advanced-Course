import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';

import '@blocknote/mantine/style.css';

import '@blocknote/core/fonts/inter.css';
import styles from './ArticleEditor.module.css';
import RootLayout from './RootLayout';
import RequireLogin from './RequireLogin';
import RequireVerifiedEmail from './RequireVerifiedEmail';

function ArticleEditor() {
  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: [
      {
        type: 'heading',
        props: {
          level: 1,
        },
        content: 'Tell your story',
      },
    ],
  });

  return (
    <RequireLogin>
      <RequireVerifiedEmail>
        <RootLayout>
          <BlockNoteView className={styles.editor} editor={editor} />
        </RootLayout>
      </RequireVerifiedEmail>
    </RequireLogin>
  );
}

export default ArticleEditor;
