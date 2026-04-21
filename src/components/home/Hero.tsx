import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import heroKid from "@/assets/kid-boy.png";
import clayPyramid from "@/assets/clay-pyramid.png";
import clayStar from "@/assets/clay-star.png";
import clayHeart from "@/assets/clay-heart.png";

const AGES = ["1,5–2", "2–3", "3–5", "5–7"] as const;
const FORMATS = [
  { id: "mama", label: "Мама + малыш" },
  { id: "half", label: "Половина дня" },
  { id: "full", label: "Полный день" },
  { id: "extra", label: "Факультативы" },
] as const;
const LOCS = [
  { id: "bystretskaya", label: "Быстрецкая 20к2" },
  { id: "oksky", label: "Окский 4к2" },
] as const;

export const Hero = () => {
  const { theme } = useTheme();
  const [age, setAge] = useState<string>("");
  const [loc, setLoc] = useState<string>("");
  const [fmt, setFmt] = useState<string>("");

  const recommend = () => {
    let target = "/steps";
    if (fmt === "full") target = "/immersion";
    else if (fmt === "extra") target = "/schedule";
    else if (fmt === "mama") target = "/steps/mama-baby";
    else if (fmt === "half") target = "/steps/easy-start";
    return target;
  };

  return (
    <section className="relative overflow-hidden section">
      {/* Decorative blobs / clay */}
      <span className="blob blob-1 -left-16 top-10 h-64 w-64 opacity-70" aria-hidden />
      <span className="blob blob-2 right-0 top-40 h-40 w-40 opacity-70" aria-hidden />

      {theme === "baby" && (
        <>
          <img src={clayStar} alt="" aria-hidden className="pointer-events-none absolute -top-4 right-8 h-16 w-16 animate-float md:h-24 md:w-24" />
          <img src={clayHeart} alt="" aria-hidden className="pointer-events-none absolute bottom-10 left-4 h-14 w-14 animate-float md:h-20 md:w-20" />
        </>
      )}

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
        <div className="relative z-10 animate-fade-up">
          <span className="chip mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Рязань · 2 филиала · Лицензия
          </span>
          <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Экосистема развития
            <br />
            детей <span className="marker">1,5–7 лет</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Полный день в Montessori-среде, своя кухня, 20+ камер и уникальная программа
            плавной адаптации «Ступени в сад» — от первого часа вместе с мамой до уверенного «пока-пока».
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-organic">
              <Link to="/immersion">Посмотреть сад <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-organic">
              <Link to="/steps">Программа «Ступени»</Link>
            </Button>
          </div>

          {/* Mini-quiz */}
          <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="mb-3 text-sm font-bold">Подберём программу за 10 секунд</div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="mb-1.5 text-muted-foreground">Возраст ребёнка</div>
                <div className="flex flex-wrap gap-1.5">
                  {AGES.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setAge(a)}
                      className={`rounded-full border px-3 py-1 font-medium transition ${
                        age === a ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-muted-foreground">Формат</div>
                <div className="flex flex-wrap gap-1.5">
                  {FORMATS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFmt(f.id)}
                      className={`rounded-full border px-3 py-1 font-medium transition ${
                        fmt === f.id ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-muted-foreground">Локация</div>
                <div className="flex flex-wrap gap-1.5">
                  {LOCS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLoc(l.id)}
                      className={`rounded-full border px-3 py-1 font-medium transition ${
                        loc === l.id ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild className="mt-4 w-full" disabled={!age || !fmt}>
              <Link to={recommend()}>
                Показать подходящую программу <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-64 w-64 rounded-full bg-[hsl(var(--blob-1))] opacity-80 blur-[1px]" aria-hidden />
          <div className="absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-[hsl(var(--blob-2))] opacity-90" aria-hidden />
          {theme === "baby" ? (
            <img
              src={clayPyramid}
              alt="Ступени в сад — иллюстрация"
              width={768}
              height={768}
              className="relative z-10 mx-auto max-w-sm drop-shadow-xl animate-float"
            />
          ) : (
            <img
              src={heroKid}
              alt="Счастливый ребёнок в KIDCODES"
              width={768}
              height={768}
              className="relative z-10 mx-auto aspect-square w-full max-w-md rounded-[var(--radius-lg)] object-cover shadow-[var(--shadow-card)]"
            />
          )}
        </div>
      </div>
    </section>
  );
};
