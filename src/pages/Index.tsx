import { Link } from "react-router-dom";
import { Hero } from "@/components/home/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/theme/ThemeProvider";
import { STEPS, LOCATIONS, DAY_RHYTHM, REASONS, FACULTATIVES, REVIEWS, BLOG, DOCS } from "@/data/site";
import {
  ArrowRight, Check, Clock, MapPin, ShieldCheck, FileText, Star, Quote,
} from "lucide-react";
import clayPyramid from "@/assets/clay-pyramid.png";
import clayHeart from "@/assets/clay-heart.png";
import clayStar from "@/assets/clay-star.png";
import clayWave from "@/assets/clay-wave.png";
import kidsGroup from "@/assets/kids-group.jpg";
import interior from "@/assets/interior.jpg";
import kid1 from "@/assets/kid-1.jpg";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

const PROGRAM_TILES = [
  { title: "Полный день", desc: "1,5–7 лет, Montessori-среда", to: "/immersion" },
  { title: "Мама + малыш", desc: "1,5–2 года, вместе", to: "/steps/mama-baby" },
  { title: "Ступени в сад", desc: "Плавная адаптация 1,5–3", to: "/steps" },
  { title: "Факультативы", desc: "Английский, робо, хореография", to: "/schedule" },
];

const COMPARE = [
  { kc: "Полный день 07:30–19:30", ext: "5–7 кружков по городу" },
  { kc: "5-разовое питание с кухни", ext: "Перекусы между кружками" },
  { kc: "Один педагог знает ребёнка", ext: "Каждый кружок — новый взрослый" },
  { kc: "Няня не нужна", ext: "Няня 40–60 тыс./мес" },
  { kc: "Все активности в одном месте", ext: "Пробки и дорога" },
];

const Index = () => {
  const { theme } = useTheme();
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);

  return (
    <>
      <Hero />

      {/* 4 tiles */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Программы"
            title={<>Четыре формата одной <span className="marker">экосистемы</span></>}
            description="Выбирайте точку входа — и растите вместе с KIDCODES от первых шагов до школы."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAM_TILES.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group rounded-[var(--radius-lg)] border border-border bg-card p-6 transition hover:border-primary hover:shadow-[var(--shadow-card)]"
              >
                <div className="mb-10 text-4xl font-black text-primary/30 group-hover:text-primary">
                  0{PROGRAM_TILES.indexOf(t) + 1}
                </div>
                <div className="text-xl font-bold">{t.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  Подробнее <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Ступени в сад"
            title={<>Адаптация <span className="marker">без слёз</span> за 4 шага</>}
            description="Мы единственные в Рязани ведём ребёнка от 1,5 лет — от часа вместе с мамой до уверенного полного дня."
          />
          <div className="relative grid gap-4 md:grid-cols-4">
            {STEPS.map((s, idx) => (
              <Link
                key={s.slug}
                to={`/steps/${s.slug}`}
                className="relative rounded-[var(--radius-lg)] border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--${s.color}))] text-lg font-black text-foreground`}>
                  {s.n}
                </div>
                {theme === "baby" && (
                  <img
                    src={[clayHeart, clayStar, clayWave, clayPyramid][idx]}
                    alt=""
                    aria-hidden
                    className="absolute right-3 top-3 h-12 w-12 object-contain"
                  />
                )}
                <div className="text-lg font-bold">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.age}</div>
                <p className="mt-2 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link to="/steps">Как устроены ступени <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Зачем KIDCODES"
            title={<>Мы заменяем <span className="marker">5–7 кружков</span> и няню</>}
            description="Одно место вместо десятка маршрутов — и ребёнок развивается глубже, а не поверхностно."
          />
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
            <div className="grid grid-cols-2 bg-primary text-primary-foreground">
              <div className="p-4 text-sm font-bold">KIDCODES</div>
              <div className="p-4 text-sm font-bold opacity-80">Обычный маршрут</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-border text-sm">
                <div className="flex items-start gap-2 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{r.kc}</span>
                </div>
                <div className="border-l border-border p-4 text-muted-foreground">{r.ext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 reasons */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Почему нам доверяют" title={<>6 причин выбрать <span className="marker">KIDCODES</span></>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <div key={r.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-lg font-bold">{r.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Наши филиалы" title={<>2 локации в <span className="marker">Рязани</span></>} />
          <div className="grid gap-6 md:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <div key={l.slug} className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
                <img
                  src={i === 0 ? interior : kidsGroup}
                  alt={`Филиал KIDCODES ${l.name}`}
                  width={1280}
                  height={768}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" /> {l.district}
                      </div>
                      <div className="mt-1 text-xl font-bold">{l.name}</div>
                    </div>
                    <span className="chip bg-primary/10 text-primary">{l.status}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {l.hours}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {l.features.map((f) => <span key={f} className="chip">{f}</span>)}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button asChild size="sm"><Link to="/locations">Подробнее</Link></Button>
                    <Button size="sm" variant="outline" onClick={() => setBooking("tour")}>Экскурсия</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day rhythm */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="День ребёнка"
            title={<>Как проходит <span className="marker">один день</span></>}
          />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DAY_RHYTHM.map((d) => (
              <li key={d.time} className="rounded-[var(--radius-lg)] border border-border bg-card p-4">
                <div className="text-sm font-bold text-primary">{d.time}</div>
                <div className="mt-1 font-semibold">{d.title}</div>
                <div className="text-xs text-muted-foreground">{d.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Facultatives */}
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
            <div className="text-sm font-bold text-primary">Включено в программу</div>
            <h3 className="mt-1 text-2xl">Базовые факультативы</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {FACULTATIVES.included.map((f) => (
                <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
            <div className="text-sm font-bold text-primary">Доп. оплата</div>
            <h3 className="mt-1 text-2xl">Премиум-направления</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {FACULTATIVES.extra.map((f) => (
                <li key={f} className="flex items-start gap-2"><Star className="mt-0.5 h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Отзывы родителей" title={<>Что говорят о <span className="marker">KIDCODES</span></>} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                <Quote className="h-5 w-5 text-primary" />
                <blockquote className="mt-2 text-sm">{r.text}</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline"><Link to="/reviews">Все отзывы <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Жизнь сада" title="Блог и события" />
          <div className="grid gap-4 md:grid-cols-3">
            {BLOG.slice(0, 6).map((p, i) => (
              <article key={p.title} className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
                <img
                  src={[kid1, kidsGroup, interior, kid1, kidsGroup, interior][i]}
                  alt={p.title}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition group-hover:scale-105"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="chip bg-primary/10 text-primary">{p.tag}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Docs trust */}
      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Документы и доверие" title={<>Всё <span className="marker">официально</span></>} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((d) => (
              <div key={d.title} className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-card p-4">
                {d.title.includes("ицензия") || d.title.includes("АМI") ? <ShieldCheck className="h-5 w-5 shrink-0 text-primary" /> : <FileText className="h-5 w-5 shrink-0 text-primary" />}
                <div>
                  <div className="text-sm font-bold">{d.title}</div>
                  <div className="text-xs text-muted-foreground">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-primary p-8 text-primary-foreground sm:p-12">
            <span className="blob blob-2 right-0 top-0 h-48 w-48 opacity-30" aria-hidden />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl">Приходите на экскурсию</h2>
              <p className="mt-3 opacity-90">
                Покажем среду, познакомим с педагогами и подберём программу под возраст вашего ребёнка.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="secondary" size="lg" onClick={() => setBooking("tour")}>Записаться</Button>
                <Button variant="outline" size="lg" onClick={() => setBooking("waitlist")} className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Лист ожидания
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </>
  );
};

export default Index;
