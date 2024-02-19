import MobileNav from "@/components/share/MobileNav";
import SideBar from "@/components/share/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SideBar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      {/* <Toaster /> */}
    </main>
  );
};

export default Layout;
