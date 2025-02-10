import { Outlet } from "@tanstack/react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex h-screen flex-col justify-between font-sans">
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
