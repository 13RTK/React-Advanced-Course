import type { Block } from '@blocknote/core';

type BlockContent = Block['content'];

function isContentEmpty(content: BlockContent | undefined) {
  if (!content) {
    return true;
  }

  // The content is TableContent
  if (!Array.isArray(content)) {
    return false;
  }

  return content.every((item) => {
    // StyledText
    if (item.type === 'text') {
      return item.text.trim().length === 0;
    }

    // Link | CustomInlineContent
    if ('content' in item && Array.isArray(item.content)) {
      return item.content.every((child) => child.text.trim().length === 0);
    }

    return false;
  });
}

export function isEditorEmpty(blocks: Block[]): boolean {
  return blocks.every((block) => {
    return isContentEmpty(block.content) && isEditorEmpty(block.children);
  });
}
