import type { PartialBlock } from '@blocknote/core';
import { en } from '@blocknote/core/locales';
import { useCreateBlockNote } from '@blocknote/react';
import { EDITOR_DEFAULT } from '../constants/editor';
import type { DebouncedFunction } from 'es-toolkit/function';
import { useSetAtom } from 'jotai';
import { isEditorEmptyAtom } from '../atoms/editor';
import { isEditorEmpty } from '../utils/editorHelper';

export function useEditor(
  draft: PartialBlock[] | undefined,
  setDraft: (draft: PartialBlock[]) => void,
  saveDraft: DebouncedFunction<(document: any) => void>,
) {
  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);
  const locale = en;

  let isRestoring = false;

  const editor = useCreateBlockNote({
    autofocus: true,
    initialContent: draft,

    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        // We override the default placeholder
        default: 'Tell your story',
        // We override the heading placeholder
        heading: 'Your title of story',
      },
    },
  });

  function resetEditor() {
    setDraft(EDITOR_DEFAULT);
    setIsEditorEmpty(true);
    saveDraft.cancel();
    editor.replaceBlocks(editor.document, EDITOR_DEFAULT);
  }

  function handleEditorChange(changedEditor: typeof editor) {
    if (isRestoring) {
      isRestoring = false;
      return;
    }

    if (isEditorEmpty(changedEditor.document)) {
      isRestoring = true;

      resetEditor();

      return;
    }

    saveDraft(changedEditor.document);
  }

  return {
    editor,
    resetEditor,
    handleEditorChange,
  };
}
