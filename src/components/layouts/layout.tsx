import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

type LayoutProps = {
  children: ReactNode;
  isHome?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className={isHome ? "homepage" : ""}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
