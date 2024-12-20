import { useNavigate, useLocation } from 'react-router-dom';
import { signout } from '../services/apiAuth';
import { useEffect } from 'react';
import { getConfig } from '../utils/configHelper';
import { useAtom, useAtomValue } from 'jotai';
import { userAtom, isStudentAtom } from '../atoms/user';

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  const isStudent = useAtomValue(isStudentAtom);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getConfig('SUPABASE_TOKEN');
    const userToken = JSON.parse(localStorage.getItem(token));

    if (!userToken) {
      return;
    }

    setUser(userToken.user.user_metadata);
  }, []);

  async function onClick() {
    await signout();

    navigate('/login');
  }

  return (
    <div className="navbar bg-base-300">
      {/* dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                className={
                  location.pathname === '/home/student' ? 'active' : ''
                }
                onClick={() => navigate('/home/student')}
              >
                Student
              </a>
            </li>

            <li>
              <a
                className={location.pathname === '/home/score' ? 'active' : ''}
                onClick={() => navigate('/home/score')}
              >
                Score
              </a>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl" onClick={() => navigate('/')}>
          Sunshine
        </a>
      </div>

      {/* web links */}
      <div className="navbar-center hidden lg:flex">
        {!isStudent && (
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className={
                  location.pathname === '/home/student' ? 'active' : ''
                }
                onClick={() => navigate('/home/student')}
              >
                Student
              </a>
            </li>

            <li>
              <a
                className={location.pathname === '/home/score' ? 'active' : ''}
                onClick={() => navigate('/home/score')}
              >
                Score
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* avatar */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.avatar} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                className="justify-between"
                onClick={() => navigate('/home/info')}
              >
                Profile
              </a>
            </li>

            <li>
              <a onClick={onClick}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
