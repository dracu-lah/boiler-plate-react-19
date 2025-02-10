import { Footer } from "@/components/common/layout/Footer";
import { Header } from "@/components/common/layout/Header";
import ScrollToTop from "@/components/common/layout/ScrollToTop";
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between font-sans">
      <Header />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
