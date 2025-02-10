import React from "react";
import { Footer } from "@/components/common/layout/Footer";
import { Header } from "@/components/common/layout/Header";
import ScrollToTop from "@/components/common/layout/ScrollToTop";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <div className="flex min-h-screen flex-col justify-between font-sans ">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default RootLayout;
