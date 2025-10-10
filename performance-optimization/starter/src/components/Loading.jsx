function Loading({
  type = 'spinner',
  size = 'md',
  color = 'primary',
  className = '',
}) {
  // Build class names
  const animationClass = `loading-${type}`;
  const sizeClass = `loading-${size}`;
  const colorClass = `text-${color}`;
  const classes =
    `loading ${animationClass} ${sizeClass} ${colorClass} ${className}`.trim();

  return <span className={classes} />;
}

export default Loading;
