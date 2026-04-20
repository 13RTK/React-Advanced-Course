import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <div className="card card-sm bg-base-200 max-w-60 shadow">
      <figure className="hover-gallery">
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
        <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          daisyUI Hat
          <span className="font-normal">$25</span>
        </h2>
        <p>High Quality classic cap hat with stitch logo</p>
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
