import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-8xl">404 Not Found :(</h1>
      <button
        className="btn btn-primary btn-lg mt-4"
        onClick={() => navigate('/')}
      >
        BACK TO HOME
      </button>
    </main>
  );
}
export default PageNotFound;
