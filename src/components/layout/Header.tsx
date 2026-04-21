import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { BookingModal } from "@/components/BookingModal";

export const Header = () => {
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-x flex h-16 items-center gap-3">
        <Link to="/" aria-label="KIDCODES — на главную" className="mr-auto">
          <Logo />
        </Link>

        <ThemeSwitch className="hidden md:inline-flex" />

        <a
          href="tel:+74912000000"
          className="hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary"
        >
          <Phone className="h-4 w-4" /> +7 (4912) 00-00-00
        </a>

        <Button onClick={() => setBooking("tour")} className="hidden sm:inline-flex">
          Экскурсия
        </Button>
      </div>

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </header>
  );
};
