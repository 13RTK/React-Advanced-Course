export function isExistItem(newItem, items) {
  return items.some((items) => Number(items.id) === Number(newItem.id));
}
