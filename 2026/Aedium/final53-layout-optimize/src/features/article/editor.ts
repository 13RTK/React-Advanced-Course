import type { PartialBlock } from '@blocknote/core';
import { en } from '@blocknote/core/locales';
import { useCreateBlockNote } from '@blocknote/react';
import { EDITOR_DEFAULT } from '@/constants/editor';
import type { DebouncedFunction } from 'es-toolkit/function';
import { useAtom, useSetAtom } from 'jotai';
import { editorEmptySignalAtom, isEditorEmptyAtom } from '@/atoms/editor';
import { isEditorEmpty } from '@/utils/editorHelper';
import { useEffect } from 'react';

export function useEditor(
  draft: PartialBlock[] | undefined,
  setDraft: (draft: PartialBlock[]) => void,
  saveDraft: DebouncedFunction<(document: any) => void>,
) {
  const setIsEditorEmpty = useSetAtom(isEditorEmptyAtom);
  const [editorEmptySignal, setEditorEmptySignal] = useAtom(
    editorEmptySignalAtom,
  );

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

  // Initialize isEditorEmpty state, cleanup on unmount
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

  // Reset editor on editorEmptySignal changed
  useEffect(() => {
    if (editorEmptySignal) {
      resetEditor();
      setEditorEmptySignal(0);
    }
  }, [editorEmptySignal]);

  return {
    editor,
    resetEditor,
    handleEditorChange,
  };
}
