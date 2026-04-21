import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { LOCATIONS, NAV_ITEMS } from "@/data/site";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-muted/40">
    <div className="container-x grid gap-10 py-12 md:grid-cols-4">
      <div>
        <Logo />
        <p className="mt-3 text-sm text-muted-foreground">
          Детский сад полного дня и программа плавной адаптации для детей 1,5–7 лет в Рязани.
        </p>
        <div className="mt-4 flex gap-3 text-foreground/80">
          <a href="tel:+74912000000" aria-label="Позвонить"><Phone className="h-5 w-5" /></a>
          <a href="mailto:hello@kidcodes.ru" aria-label="Написать"><Mail className="h-5 w-5" /></a>
          <a href="#" aria-label="Telegram"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold">Разделы</h4>
        <ul className="space-y-2 text-sm">
          {NAV_ITEMS.map((i) => (
            <li key={i.to}>
              <Link to={i.to} className="text-foreground/80 hover:text-primary">{i.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="mb-3 text-sm font-bold">Наши филиалы в Рязани</h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {LOCATIONS.map((l) => (
            <div key={l.slug} className="rounded-xl border border-border bg-card p-4">
              <div className="font-semibold">{l.name}</div>
              <div className="text-xs text-muted-foreground">{l.district}</div>
              <div className="mt-2 text-xs">Работаем: {l.hours}</div>
              <div className="mt-1 text-xs text-primary">{l.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} KIDCODES Рязань. Все права защищены.
    </div>
  </footer>
);
