import React from "react";
import { Footer } from "@/components/common/layout/Footer";
import { Header } from "@/components/common/layout/Header";
import ScrollToTop from "@/components/common/layout/ScrollToTop";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between font-sans">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 ">{children}</main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
