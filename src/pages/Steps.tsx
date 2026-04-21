import { Link, useParams } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { STEPS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { useTheme } from "@/theme/ThemeProvider";
import clayPyramid from "@/assets/clay-pyramid.png";
import clayHeart from "@/assets/clay-heart.png";
import clayStar from "@/assets/clay-star.png";
import clayWave from "@/assets/clay-wave.png";

const CLAY = [clayHeart, clayStar, clayWave, clayPyramid];

const STOPPERS = [
  { q: "Он ещё маленький, рано в сад", a: "Ступени 1 и 2 — это вход на 1,5–2 часа с мамой или тьютором, а не полный день." },
  { q: "Он будет плакать", a: "Каждая ступень — отдельный месяц работы с педагогом-тьютором, мы наблюдаем и переходим дальше только когда ребёнок готов." },
  { q: "С мамой всё-таки лучше", a: "Первые две ступени мама рядом, третья — половина дня, и только потом полный." },
];

const SCHEDULE = [
  { week: "Неделя 1", what: "1 час вместе с мамой, знакомство со средой" },
  { week: "Неделя 2", what: "1,5 часа: мама рядом, но не участвует в активностях" },
  { week: "Неделя 3", what: "2 часа без мамы в мини-группе" },
  { week: "Неделя 4", what: "Полдня с обедом" },
];

const StepDetail = ({ slug }: { slug: string }) => {
  const { theme } = useTheme();
  const step = STEPS.find((s) => s.slug === slug);
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);
  if (!step) return null;
  const idx = STEPS.findIndex((s) => s.slug === slug);
  return (
    <>
      <section className="section">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Link to="/steps" className="text-sm text-muted-foreground hover:text-primary">← Ко всем ступеням</Link>
            <div className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground">{step.n}</div>
            <h1 className="mt-4 text-4xl sm:text-5xl">{step.title}</h1>
            <div className="mt-2 text-muted-foreground">{step.age}</div>
            <p className="mt-4 text-lg">{step.desc}</p>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => setBooking("tour")}>Записаться на ступень</Button>
              <Button variant="outline" onClick={() => setBooking("waitlist")}>Лист ожидания</Button>
            </div>
          </div>
          <div className="relative">
            <span className="blob blob-1 left-0 top-0 h-48 w-48 opacity-60" aria-hidden />
            <img src={theme === "baby" || theme === "hybrid" ? CLAY[idx] : clayPyramid} alt="" className="relative z-10 mx-auto h-64 object-contain animate-float" />
          </div>
        </div>
      </section>

      <section className="section bg-muted/40">
        <div className="container-x">
          <SectionHeader eyebrow="Как проходит" title="Расписание адаптации по неделям" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SCHEDULE.map((s) => (
              <div key={s.week} className="card-soft"><div className="font-bold text-primary">{s.week}</div><div className="mt-1 text-sm">{s.what}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Волнения родителей" title="Что часто беспокоит — и что с этим делаем" />
          <div className="space-y-3">
            {STOPPERS.map((s) => (
              <div key={s.q} className="card-soft">
                <div className="flex items-start gap-2 font-bold"><X className="mt-0.5 h-5 w-5 text-destructive" />{s.q}</div>
                <div className="mt-2 flex items-start gap-2 text-sm"><Check className="mt-0.5 h-5 w-5 text-primary" />{s.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </>
  );
};

const StepsHub = () => {
  const { theme } = useTheme();
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader center eyebrow="Программа адаптации" title={<>4 ступени <span className="marker">в сад</span></>} description="Плавный путь от первого часа в среде до уверенного полного дня. Мы наблюдаем и переводим только когда ребёнок готов." />
        <ol className="relative grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.slug} className="relative">
              <Link to={`/steps/${s.slug}`} className="card-soft block h-full hover:border-primary">
                {(theme === "baby" || theme === "hybrid") && <img src={CLAY[i]} alt="" aria-hidden className="mb-3 h-20 w-20 object-contain" />}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{s.n}</div>
                <div className="mt-3 text-xl font-bold">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.age}</div>
                <p className="mt-2 text-sm">{s.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Подробнее <ArrowRight className="ml-1 h-4 w-4" /></div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default function Steps() {
  const { slug } = useParams<{ slug?: string }>();
  if (slug) return <StepDetail slug={slug} />;
  return <StepsHub />;
}
