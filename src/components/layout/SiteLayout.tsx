import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
