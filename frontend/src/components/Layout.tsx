import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col w-full">
      <TopBar />
      <Navbar />
      <main className={`flex-1 w-full flex flex-col ${isHome ? "" : "pt-20 lg:pt-24 xl:pt-36"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
