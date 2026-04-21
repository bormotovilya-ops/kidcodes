import { SectionHeader } from "@/components/SectionHeader";
import { DAY_RHYTHM, FACULTATIVES } from "@/data/site";
import { Check, Star } from "lucide-react";

const Schedule = () => (
  <>
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow="День ребёнка" title={<>Ритм <span className="marker">полного дня</span></>} />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DAY_RHYTHM.map((d) => (
            <li key={d.time} className="card-soft">
              <div className="font-bold text-primary">{d.time}</div>
              <div className="mt-1 font-semibold">{d.title}</div>
              <div className="text-xs text-muted-foreground">{d.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section bg-muted/40">
      <div className="container-x">
        <SectionHeader eyebrow="Факультативы" title="Что включено и что доступно дополнительно" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-soft">
            <h3 className="text-xl">Включено в программу</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {FACULTATIVES.included.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary" /> {f}</li>)}
            </ul>
          </div>
          <div className="card-soft">
            <h3 className="text-xl">Премиум-направления</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {FACULTATIVES.extra.map((f) => <li key={f} className="flex gap-2"><Star className="h-4 w-4 text-primary" /> {f}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Schedule;
