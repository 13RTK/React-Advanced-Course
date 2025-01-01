function ErrorMessage({ children }) {
  return (
    <p role="alert" className="text-red-400">
      {children}
    </p>
  );
}
export default ErrorMessage;
