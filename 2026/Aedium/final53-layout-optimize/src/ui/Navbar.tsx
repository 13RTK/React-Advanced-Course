import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@neondatabase/neon-js/auth/react';
import { NotePencilIcon } from '@phosphor-icons/react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { Route as editorRoute } from '@/routes/_app/_protected/editor';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  editorEmptySignalAtom,
  editorPublishSignalAtom,
  editUpdateSignalAtom,
  isEditorEmptyAtom,
} from '@/atoms/editor';
import { Route as editRoute } from '@/routes/_app/_protected/articles.edit.$articleId';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isEditorEmpty = useAtomValue(isEditorEmptyAtom);
  const setEditorEmptySignal = useSetAtom(editorEmptySignalAtom);
  const setEditorPublishSignal = useSetAtom(editorPublishSignalAtom);
  const setEditUpdateSignal = useSetAtom(editUpdateSignalAtom);

  const isEditorPage = location.pathname === editorRoute.to;
  const isEditPage = location.pathname.includes(editRoute.to.split('$')[0]);

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
          <button
            onClick={() => navigate({ to: '/' })}
            className="btn btn-ghost text-xl"
          >
            Aedium
          </button>
          {!isEditorPage && (
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-38 lg:w-auto mr-1"
            />
          )}
        </div>

        {/* Login button */}
        <div className="navbar-end">
          <SignedIn>
            {!isEditorPage && !isEditPage && (
              <button
                className="btn btn-sm hidden sm:inline-flex sm:btn-md mr-1 btn-ghost"
                onClick={() => navigate({ to: '/editor' })}
              >
                <NotePencilIcon size={24} weight="thin" />
                Write
              </button>
            )}
            {isEditorPage && (
              <>
                <button
                  className="btn btn-accent btn-sm sm:btn-md mr-1"
                  disabled={isEditorEmpty}
                  onClick={() => setEditorPublishSignal((pre) => pre + 1)}
                >
                  Publish
                </button>
                <button
                  className="btn btn-error btn-sm sm:btn-md mr-1"
                  disabled={isEditorEmpty}
                  onClick={() => setEditorEmptySignal((pre) => pre + 1)}
                >
                  Discard draft
                </button>
              </>
            )}
            {isEditPage && (
              <>
                <button
                  onClick={() => setEditUpdateSignal((pre) => pre + 1)}
                  className="btn btn-accent btn-sm sm:btn-md mr-1"
                >
                  Update
                </button>
              </>
            )}
          </SignedIn>

          <SignedOut>
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
          </SignedOut>

          <SignedIn>
            <UserButton size="icon" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
