import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { DAY_RHYTHM, LOCATIONS, REASONS, TEAM } from "@/data/site";
import { ArrowRight, Check, ShieldCheck, Utensils, Video } from "lucide-react";
import interior from "@/assets/interior.jpg";
import kidsGroup from "@/assets/kids-group.jpg";
import kid1 from "@/assets/kid-1.jpg";

const Immersion = () => {
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);
  return (
    <>
      <section className="section">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="chip mb-3">Детский сад полного дня</span>
            <h1 className="text-4xl sm:text-5xl">Полное <span className="marker">погружение</span> в среду</h1>
            <p className="mt-4 text-muted-foreground">
              От 3 до 7 лет. 07:30–19:30. Montessori-среда, индивидуальные маршруты,
              5-разовое питание со своей кухни, факультативы и подготовка к школе.
            </p>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => setBooking("tour")}>Экскурсия</Button>
              <Button variant="outline" onClick={() => setBooking("waitlist")}>Лист ожидания</Button>
            </div>
          </div>
          <img src={kidsGroup} alt="Дети в группе KIDCODES" className="rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]" />
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Кому подходит" title="Детям 3–6 лет, готовым к полному дню" />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Ребёнок спокойно отпускает маму", "Соблюдает режим сна и еды", "Интересуется другими детьми"].map((t) => (
              <div key={t} className="card-soft flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-primary" /><span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Один день" title="Что внутри дня" />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DAY_RHYTHM.map((d) => (
              <li key={d.time} className="card-soft">
                <div className="text-sm font-bold text-primary">{d.time}</div>
                <div className="mt-1 font-semibold">{d.title}</div>
                <div className="text-xs text-muted-foreground">{d.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <div className="card-soft"><ShieldCheck className="h-8 w-8 text-primary" /><h3 className="mt-3 text-xl">Безопасность</h3><p className="text-sm text-muted-foreground">20+ камер, круглосуточная охрана, СКУД и онлайн-доступ для родителей.</p></div>
          <div className="card-soft"><Utensils className="h-8 w-8 text-primary" /><h3 className="mt-3 text-xl">Питание</h3><p className="text-sm text-muted-foreground">5 раз в день, своя кухня в каждом филиале, меню от нутрициолога.</p></div>
          <div className="card-soft"><Video className="h-8 w-8 text-primary" /><h3 className="mt-3 text-xl">Онлайн-доступ</h3><p className="text-sm text-muted-foreground">Родительский кабинет, камеры в группах, ежедневная обратная связь.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Среда" title="Как устроены зоны развития" />
          <div className="grid gap-4 md:grid-cols-2">
            <img src={interior} alt="Интерьер" className="rounded-[var(--radius-lg)]" />
            <div className="space-y-3">
              {REASONS.slice(0, 5).map((r) => (
                <div key={r.title} className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-border p-4">
                  <Check className="mt-0.5 h-5 w-5 text-primary" />
                  <div><div className="font-semibold">{r.title}</div><div className="text-sm text-muted-foreground">{r.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Команда" title="С вашими детьми работают" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.slice(0, 4).map((t) => (
              <div key={t.name} className="card-soft"><img src={kid1} alt="" className="mb-3 h-32 w-full rounded-md object-cover" /><div className="font-bold">{t.name}</div><div className="text-sm text-muted-foreground">{t.role}</div></div>
            ))}
          </div>
          <div className="mt-6 text-center"><Button asChild variant="outline"><Link to="/team">Вся команда <ArrowRight className="ml-1 h-4 w-4" /></Link></Button></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Где" title="Локации" />
          <div className="grid gap-4 md:grid-cols-2">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/locations" className="card-soft block hover:border-primary">
                <div className="text-xl font-bold">{l.name}</div>
                <div className="text-sm text-muted-foreground">{l.district}</div>
                <div className="mt-2 text-sm text-primary">{l.status}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </>
  );
};

export default Immersion;
