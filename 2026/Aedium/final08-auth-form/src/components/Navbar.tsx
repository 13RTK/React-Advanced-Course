import { NotePencilIcon } from '@phosphor-icons/react';
import { useNavigate } from '@tanstack/react-router';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
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

          {/* Logo back to home */}
          <button className="btn btn-ghost text-xl">daisyUI</button>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-38 lg:w-auto mr-1"
          />
        </div>

        {/* Login button */}
        <div className="navbar-end">
          <button className="btn btn-sm hidden sm:inline-flex sm:btn-md mr-1 btn-outline">
            <NotePencilIcon size={24} weight="thin" />
            Write
          </button>
          <button
            onClick={() =>
              navigate({
                to: '/auth/$pathname',
                params: {
                  pathname: 'sign-in',
                },
              })
            }
            className="btn btn-sm sm:btn-md btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
