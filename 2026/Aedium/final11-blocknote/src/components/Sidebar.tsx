import { GearIcon, HouseLineIcon, NotePencilIcon } from '@phosphor-icons/react';
import { useNavigate } from '@tanstack/react-router';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}
        <ul className="menu w-full grow">
          {/* Write */}
          <li>
            <button
              className="sidebar-primary-item is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Write"
              onClick={() => navigate({ to: '/editor' })}
            >
              <NotePencilIcon size={24} weight="thin" />
              <span className="is-drawer-close:hidden">Write</span>
            </button>
          </li>

          {/* Home */}
          <li>
            <button
              onClick={() => navigate({ to: '/' })}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Homepage"
            >
              <HouseLineIcon size={24} weight="thin" />
              <span className="is-drawer-close:hidden">Homepage</span>
            </button>
          </li>

          {/* Settings */}
          <li>
            <button
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Settings"
            >
              <GearIcon size={24} weight="thin" />
              <span className="is-drawer-close:hidden">Settings</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
