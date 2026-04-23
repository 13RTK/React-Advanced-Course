import { useNavigate } from '@tanstack/react-router';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar bg-base-300">
        <div className="navbar-start">
          {/* Sidebar toggle button */}
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>

          {/* Mobile toggle button */}
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
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
          </label>

          {/* Logo back to home */}
          <button className="btn btn-ghost text-xl">daisyUI</button>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-38 lg:w-auto mr-1"
          />
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button>Item 1</button>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <button>Submenu 1</button>
                  </li>
                  <li>
                    <button>Submenu 2</button>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button>Item 3</button>
            </li>
          </ul>
        </div>

        {/* Login button */}
        <div className="navbar-end">
          <button
            onClick={() => navigate({ to: '/login' })}
            className="btn btn-sm sm:btn-md btn-primary"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <button>Item 1</button>
          </li>
          <li>
            <button>Parent</button>
            <ul>
              <li>
                <button>Submenu 1</button>
              </li>
              <li>
                <button>Submenu 2</button>
              </li>
            </ul>
          </li>
          <li>
            <button>Item 3</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
