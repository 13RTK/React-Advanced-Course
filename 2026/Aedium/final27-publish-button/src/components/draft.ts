import type { PartialBlock } from '@blocknote/core';
import { useLocalStorage } from 'react-use';

const DRAFT_KEY = 'draft';

export function useDraft() {
  const [draft, setDraft] = useLocalStorage<PartialBlock[]>(DRAFT_KEY, [
    {
      type: 'heading',
      props: {
        level: 1,
      },
      content: 'Tell your story',
    },
  ]);

  return {
    draft,
    setDraft,
  };
}
