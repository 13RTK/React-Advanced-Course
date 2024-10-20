export function show(toast, type = 'success') {
  toast.current.show({
    severity: type,
    summary: type[0].toUpperCase() + type.slice(1),
    detail: type === 'success' ? 'Successfully added' : 'Failed to add',
    life: 1000,
  });
}
