import { useLocation, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

import { isStudentAtom } from '../atoms/user';

function Toolbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isStudent = useAtomValue(isStudentAtom);

  function onClick() {
    const { pathname } = location;

    if (pathname === '/home/score') {
      navigate('/home/score/upload');
      return;
    }

    navigate('/home/student/create');
  }

  return (
    <section className="my-4 grid grid-cols-4 gap-2">
      <div className="col-span-1 my-auto">
        <div className="badge badge-info gap-2 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 stroke-current transition-transform transform hover:scale-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          info
        </div>
        <div className="badge badge-success gap-2 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          success
        </div>
        <div className="badge badge-warning gap-2 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          warning
        </div>
        <div className="badge badge-error gap-2 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          error
        </div>
      </div>

      <div className="col-span-2">
        <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="col-span-1 text-center">
        {!isStudent && (
          <button className="btn btn-primary" onClick={onClick}>
            {location.pathname === '/home/score'
              ? 'Upload Score'
              : 'Create Student'}
          </button>
        )}
      </div>
    </section>
  );
}
export default Toolbar;
