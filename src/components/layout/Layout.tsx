import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../floating/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-azulNoche">
      <Header />
      <main className="flex-grow pt-0">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
