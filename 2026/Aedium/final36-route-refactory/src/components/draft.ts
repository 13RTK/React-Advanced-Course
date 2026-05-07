import type { PartialBlock } from '@blocknote/core';
import { useLocalStorage } from 'react-use';
import { EDITOR_DEFAULT } from '../constants/editor';

const DRAFT_KEY = 'draft';

export function useDraft() {
  const [draft, setDraft] = useLocalStorage<PartialBlock[]>(
    DRAFT_KEY,
    EDITOR_DEFAULT,
  );

  return {
    draft,
    setDraft,
  };
}
