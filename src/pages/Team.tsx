import { SectionHeader } from "@/components/SectionHeader";
import { TEAM } from "@/data/site";
import kid1 from "@/assets/kid-boy.png";

const Team = () => (
  <section className="section">
    <div className="container-x">
      <SectionHeader eyebrow="Наши педагоги" title={<>Команда <span className="marker">KIDCODES</span></>} description="Педагоги AMI, логопед, психолог, медработник и шеф-повар собственной кухни." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((t) => (
          <div key={t.name} className="card-soft">
            <img src={kid1} alt="" className="mb-3 aspect-square w-full rounded-md object-cover" />
            <div className="font-bold">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
