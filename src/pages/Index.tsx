import { Link } from "react-router-dom";
import { Hero } from "@/components/home/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { LOCATIONS, DAY_RHYTHM, BLOG, DOCS } from "@/data/site";
import {
  ArrowRight, Check, Clock, FileText, MapPin, Quote, ShieldCheck, Star, Utensils, Video,
} from "lucide-react";
import kidsGroup from "@/assets/kids-group.jpg";
import interior from "@/assets/interior.jpg";
import kid1 from "@/assets/kid-boy.png";
import kid2 from "@/assets/kid-2.jpg";
import clayStar from "@/assets/clay-star.png";
import clayHeart from "@/assets/clay-heart.png";
import clayWave from "@/assets/clay-wave.png";
import clayPyramid from "@/assets/clay-pyramid.png";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

const PROGRAM_TILES = [
  { title: "Детский сад полного дня", desc: "Главная программа 1,5–7 лет: развитие, язык и режим в одном дне.", to: "/immersion", cta: "Узнать про полный день" },
  { title: "Мама и малыш", desc: "Мягкое знакомство со средой вместе с родителем.", to: "/steps/mama-baby", cta: "Начать мягко" },
  { title: "Ступени в сад (полдня)", desc: "Адаптация, полдня и готовность к полному дню.", to: "/steps", cta: "Подобрать ступень" },
  { title: "Факультативы", desc: "Избранные занятия по желанию без смены режима.", to: "/schedule", cta: "Смотреть факультативы" },
];

const STEPS_ROUTE = [
  { title: "Мама и малыш", who: "Малышам и родителям, кто хочет начать мягко", format: "1–2 раза в неделю вместе с родителем", result: "Ребёнок привыкает к среде", to: "/steps/mama-baby" },
  { title: "Первый шаг", who: "Если нужна адаптация без давления", format: "Короткие визиты и постепенное расставание", result: "Остаётся без мамы спокойно", to: "/steps/first-step" },
  { title: "Лёгкий старт", who: "Готовы ходить регулярно, но мягко по времени", format: "Полдня и закрепление режима", result: "Уверенно входит в ритм сада", to: "/steps/easy-start" },
  { title: "Иммерсия", who: "Тем, кто хочет максимум результата и стабильности", format: "Полный день и системная программа", result: "Сильная база к школе и жизни", to: "/immersion" },
];

const REASONS = [
  { title: "Монтессори-среда AMI", desc: "Международный стандарт качества, самостоятельность, концентрация и мышление." },
  { title: "Английский ежедневно", desc: "Язык естественно встроен в общение и среду, а не отдельным кружком." },
  { title: "Индивидуальная траектория", desc: "Наблюдения, цели развития и регулярная обратная связь родителям." },
  { title: "Готовность к школе", desc: "Сильная база в рамках дня без перегруза и гонки по занятиям." },
  { title: "Эмоции и социализация", desc: "Уверенность, коммуникация и уважение к другим в живой среде." },
  { title: "Эстетика в стоимости", desc: "Музыка, искусство, театр и танцы как часть развития ребёнка." },
];

const GUARANTEES = [
  "Видеонаблюдение по всему саду + контроль доступа",
  "Закрытая территория и современная пожарная система",
  "Питание с собственной профессиональной кухни",
  "Штатный медик в саду",
  "Лицензия на образование",
  "Честная цена: без скрытых платежей",
];

const REVIEWS = [
  { name: "Анна, мама Миши", meta: "4 года • Быстрецкая • Ступени", changed: "Через 2 месяца адаптации сын сам попросился в сад." },
  { name: "Ольга, мама Сони", meta: "2 года • Окский • Мама+малыш", changed: "Спокойно остаётся в группе и легко отпускает маму." },
  { name: "Дмитрий, папа Лизы", meta: "5 лет • Быстрецкая • Полный день", changed: "Дочка стала свободно использовать английские фразы дома." },
  { name: "Ирина, мама Артёма", meta: "3 года • Окский • Лёгкий старт", changed: "Ребёнок вошёл в режим без слёз и перегруза." },
  { name: "Елена, мама Вари", meta: "6 лет • Быстрецкая • Иммерсия", changed: "Появилась уверенность перед школой и интерес к чтению." },
  { name: "Мария, мама Ромы", meta: "2,5 года • Окский • Первый шаг", changed: "Адаптация прошла мягко и без резких шагов." },
];

const SectionDecor = () => (
  <div aria-hidden className="decor-layer">
    <img src={clayStar} alt="" aria-hidden className="decor-item decor-star" />
    <img src={clayHeart} alt="" aria-hidden className="decor-item decor-heart" />
    <img src={clayWave} alt="" aria-hidden className="decor-item decor-wave" />
    <img src={clayPyramid} alt="" aria-hidden className="decor-item decor-pyramid" />
  </div>
);

const Index = () => {
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);

  return (
    <>
      <Hero />

      {/* 4 tiles */}
      <section className="section reveal section-decor">
        <SectionDecor />
        <div className="container-x">
          <SectionHeader
            eyebrow="Программы"
            title={<>4 формата одной <span className="marker">экосистемы</span></>}
            description="Каждый формат это отдельный мини-продукт с понятным следующим шагом."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {PROGRAM_TILES.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group rounded-[var(--radius-lg)] border border-border bg-card p-6 transition hover:border-primary hover:shadow-[var(--shadow-card)] min-h-64"
              >
                <div className="mb-10 text-4xl font-black text-primary/30 group-hover:text-primary">
                  0{PROGRAM_TILES.indexOf(t) + 1}
                </div>
                <div className="text-xl font-bold">{t.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                  {t.cta} <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section bg-muted/40 reveal">
        <div className="container-x">
          <SectionHeader
            eyebrow="Почему KIDCODES"
            title={<>6 причин выбрать <span className="marker">KIDCODES</span></>}
            description="Сначала ценность и результат, затем уверенность и безопасность."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <div key={r.title} className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
                <img src={[kid1, interior, kidsGroup, kid2, kid1, interior][i]} alt={r.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div className="text-lg font-bold">{r.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild><Link to="/schedule">Посмотреть расписание дня</Link></Button>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section reveal">
        <div className="container-x">
          <SectionHeader
            eyebrow="Гарантии спокойствия"
            title={<>Чтобы вы были <span className="marker">спокойны каждый день</span></>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUARANTEES.map((g) => (
              <div key={g} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 text-sm font-medium">
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersion */}
      <section className="section bg-muted/40 reveal">
        <div className="container-x">
          <SectionHeader eyebrow="Иммерсия" title={<>Полный день — когда развитие работает <span className="marker">системно</span></>} />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-soft">
              <h3 className="text-xl">Режим без стресса</h3>
              <p className="mt-2 text-sm text-muted-foreground">Сон, питание, занятия и прогулки в балансе, без гонки и перегруза.</p>
            </div>
            <div className="card-soft">
              <h3 className="text-xl">Гуманная педагогика</h3>
              <p className="mt-2 text-sm text-muted-foreground">Диалог, наблюдение и индивидуальный подход к каждому ребёнку.</p>
            </div>
            <div className="card-soft">
              <h3 className="text-xl">Среда и атмосфера</h3>
              <p className="mt-2 text-sm text-muted-foreground">Ребёнок часть среды, где появляется самостоятельность и уверенность.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild><Link to="/immersion">Подробнее про полный день</Link></Button>
            <Button asChild variant="outline"><Link to="/steps">Если не готовы сразу — есть ступени</Link></Button>
          </div>
        </div>
      </section>

      {/* Steps route */}
      <section className="section reveal section-decor">
        <SectionDecor />
        <div className="container-x">
          <SectionHeader
            eyebrow="Ступени в сад"
            title={<>С чего начать в KIDCODES? <span className="marker">Выберите комфортный шаг</span></>}
            description="Маршрут для каждой семьи: от первого знакомства до полного дня."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS_ROUTE.map((s) => (
              <div key={s.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-sm"><strong>Для кого:</strong> {s.who}</p>
                <p className="mt-1 text-sm"><strong>Формат:</strong> {s.format}</p>
                <p className="mt-1 text-sm"><strong>Результат:</strong> {s.result}</p>
                <Button asChild size="sm" className="mt-4"><Link to={s.to}>Открыть ступень</Link></Button>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline"><Link to="/steps">Показать подходящую программу</Link></Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section bg-muted/40 reveal">
        <div className="container-x">
          <SectionHeader
            eyebrow="Локации"
            title={<>Две локации KIDCODES в <span className="marker">Рязани</span></>}
            description="Единый стандарт качества, атмосферы и педагогики в каждом филиале."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {LOCATIONS.map((l, i) => (
              <div key={l.slug} className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
                <img src={i === 0 ? interior : kidsGroup} alt={l.name} className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <div className="text-xl font-bold">{l.name}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{l.district}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{l.hours}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {l.features.slice(0, 3).map((f) => <span key={f} className="chip">{f}</span>)}
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">Удобный подъезд, парковка рядом, статус мест: {l.status}</div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" onClick={() => setBooking("tour")}>Экскурсия в этот филиал</Button>
                    <Button asChild size="sm" variant="outline"><Link to="/locations">Подробнее</Link></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day rhythm + video */}
      <section className="section reveal">
        <div className="container-x">
          <SectionHeader
            eyebrow="День ребёнка"
            title={<>День ребёнка в KIDCODES — это <span className="marker">ритм, а не гонка</span></>}
            description="Ребёнок не занимается, а живёт в среде, которая развивает."
          />
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <ol className="grid gap-3 sm:grid-cols-2">
              {DAY_RHYTHM.map((d) => (
                <li key={d.time} className="rounded-[var(--radius-lg)] border border-border bg-card p-4">
                  <div className="text-sm font-bold text-primary">{d.time}</div>
                  <div className="mt-1 font-semibold">{d.title}</div>
                  <div className="text-xs text-muted-foreground">{d.desc}</div>
                </li>
              ))}
            </ol>
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-4">
              <div className="overflow-hidden rounded-xl border border-border">
                <img src={kid2} alt="День в KIDCODES за 15 сек" className="aspect-[9/16] w-full object-cover" />
              </div>
              <p className="mt-3 text-sm font-semibold">День в KIDCODES за 15 сек</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="chip">живой ритм дня</span>
                <span className="chip">среда на уровне ребёнка</span>
                <span className="chip">атмосфера спокойствия</span>
              </div>
              <Button className="mt-4 w-full" variant="outline">Смотреть видео</Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card-soft">
              <h3 className="text-xl">Логопед</h3>
              <p className="mt-2 text-sm text-muted-foreground">Диагностика речи, индивидуальные занятия, логопедический массаж.</p>
            </div>
            <div className="card-soft">
              <h3 className="text-xl">Детский психолог</h3>
              <p className="mt-2 text-sm text-muted-foreground">Адаптация, эмоции, поведение и консультации для родителей.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Подключаем специалистов по показаниям — бережно и в сотрудничестве с семьёй.</p>
          <div className="mt-4">
            <Button asChild><Link to="/schedule">Смотреть полное расписание по возрастам</Link></Button>
          </div>
        </div>
      </section>

      {/* Facultatives */}
      <section className="section bg-muted/40 reveal section-decor">
        <SectionDecor />
        <div className="container-x">
          <SectionHeader eyebrow="Факультативы" title={<>Развитие глубже: <span className="marker">включено и по желанию</span></>} />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
              <div className="text-sm font-bold text-primary">В программе (включено)</div>
              <p className="mt-1 text-sm text-muted-foreground">Ежедневно и регулярно как часть общего развития</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["музыка", "искусство", "танцы", "театр"].map((f) => <span key={f} className="chip">{f}</span>)}
              </div>
              <p className="mt-3 text-sm font-semibold">Входит в стоимость</p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
              <div className="text-sm font-bold text-primary">По желанию (дополнительно)</div>
              <p className="mt-1 text-sm text-muted-foreground">Сильные направления для тех, кто хочет глубже</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["тхэквондо", "шахматы", "теннис", "робототехника", "когнитивные тренировки"].map((f) => <span key={f} className="chip">{f}</span>)}
              </div>
              <p className="mt-3 text-sm font-semibold">Выбор по возрасту и расписанию</p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild><Link to="/schedule">Все факультативы и цены</Link></Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section reveal">
        <div className="container-x">
          <SectionHeader eyebrow="Отзывы родителей" title={<>Что говорят о <span className="marker">KIDCODES</span></>} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                <Quote className="h-5 w-5 text-primary" />
                <figcaption className="mt-2 text-sm font-semibold">{r.name}</figcaption>
                <div className="mt-1 text-xs text-muted-foreground">{r.meta}</div>
                <blockquote className="mt-3 text-sm">Что изменилось: {r.changed}</blockquote>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline"><Link to="/reviews">Все отзывы <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section reveal section-decor">
        <SectionDecor />
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
          <div className="mt-6 text-center">
            <Button asChild variant="outline"><Link to="/blog">Блог и жизнь сада</Link></Button>
          </div>
        </div>
      </section>

      {/* Docs trust */}
      <section className="section bg-muted/40 reveal">
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
          <div className="mt-6">
            <Button asChild><Link to="/documents">Документы</Link></Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section reveal section-decor">
        <SectionDecor />
        <div className="container-x">
          <div id="final-cta" className="relative overflow-hidden rounded-[var(--radius-lg)] bg-primary p-8 text-primary-foreground sm:p-12">
            <span className="blob blob-2 right-0 top-0 h-48 w-48 opacity-30" aria-hidden />
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl sm:text-4xl">Выберите удобный путь старта</h2>
                <p className="mt-3 opacity-90">Готовы сразу — записывайтесь на экскурсию. Нужен мягкий вход — получите маршрут ступеней.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="secondary" size="lg" onClick={() => setBooking("tour")}>Записаться на экскурсию</Button>
                  <Button variant="outline" size="lg" onClick={() => setBooking("waitlist")} className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    Лист ожидания
                  </Button>
                </div>
              </div>
              <form className="rounded-[var(--radius-lg)] bg-primary-foreground/10 p-5 backdrop-blur">
                <div className="text-lg font-bold">Получить маршрут ступеней (PDF)</div>
                <div className="mt-4 grid gap-3">
                  <input className="h-10 rounded-md border border-primary-foreground/30 bg-transparent px-3 text-sm placeholder:text-primary-foreground/70" placeholder="Имя" />
                  <input className="h-10 rounded-md border border-primary-foreground/30 bg-transparent px-3 text-sm placeholder:text-primary-foreground/70" placeholder="Телефон" />
                  <input className="h-10 rounded-md border border-primary-foreground/30 bg-transparent px-3 text-sm placeholder:text-primary-foreground/70" placeholder="Возраст ребёнка" />
                  <input className="h-10 rounded-md border border-primary-foreground/30 bg-transparent px-3 text-sm placeholder:text-primary-foreground/70" placeholder="Планируемый старт" />
                  <Button type="button" variant="secondary">Получить PDF</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </>
  );
};

export default Index;
