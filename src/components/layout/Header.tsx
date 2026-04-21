import { useState } from "react";
import { Link, NavLink as RRNavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { NAV_ITEMS } from "@/data/site";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/BookingModal";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-x flex h-16 items-center gap-3">
        <Link to="/" aria-label="KIDCODES — на главную" className="mr-auto">
          <Logo />
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
          {NAV_ITEMS.map((i) => (
            <RRNavLink
              key={i.to}
              to={i.to}
              end={i.to === "/"}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-primary",
                  isActive || pathname === i.to ? "text-primary" : "text-foreground/80",
                )
              }
            >
              {i.label}
            </RRNavLink>
          ))}
        </nav>

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

        <button
          aria-label="Меню"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col gap-1 py-3">
            <ThemeSwitch className="mb-2 self-start md:hidden" />
            {NAV_ITEMS.map((i) => (
              <RRNavLink
                key={i.to}
                to={i.to}
                end={i.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted",
                  )
                }
              >
                {i.label}
              </RRNavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button onClick={() => { setBooking("tour"); setOpen(false); }} className="w-full">
                Записаться на экскурсию
              </Button>
              <Button variant="outline" onClick={() => { setBooking("waitlist"); setOpen(false); }} className="w-full">
                Лист ожидания
              </Button>
              <a href="tel:+74912000000" className="text-center text-sm font-semibold text-foreground">
                +7 (4912) 00-00-00
              </a>
            </div>
          </div>
        </div>
      )}

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </header>
  );
};
