import Navbar from './Navbar';
import Sidebar from './Sidebar';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        {/* Page content here */}
        {children}
      </div>

      <Sidebar />
    </div>
  );
}

export default RootLayout;
