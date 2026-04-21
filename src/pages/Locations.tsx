import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { LOCATIONS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import interior from "@/assets/interior.jpg";
import kidsGroup from "@/assets/kids-group.jpg";
import { Clock, MapPin } from "lucide-react";

const Locations = () => {
  const [booking, setBooking] = useState<null | "tour" | "waitlist">(null);
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Где нас найти" title={<>2 филиала в <span className="marker">Рязани</span></>} />
        <div className="space-y-10">
          {LOCATIONS.map((l, i) => (
            <div key={l.slug} className="grid gap-6 md:grid-cols-2">
              <img src={i === 0 ? interior : kidsGroup} alt={l.name} className="rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]" />
              <div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {l.district}</div>
                <h2 className="mt-1 text-3xl">{l.name}</h2>
                <div className="mt-3 flex items-center gap-1.5 text-sm"><Clock className="h-4 w-4" /> {l.hours}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {l.features.map((f) => <span key={f} className="chip">{f}</span>)}
                </div>
                <div className="mt-3"><span className="chip bg-primary/10 text-primary">{l.status}</span></div>
                <div className="mt-5 flex gap-3">
                  <Button onClick={() => setBooking("tour")}>Экскурсия сюда</Button>
                  <Button variant="outline" onClick={() => setBooking("waitlist")}>Лист ожидания</Button>
                </div>
                <div className="mt-5 overflow-hidden rounded-xl border border-border">
                  <iframe
                    title={`Карта ${l.name}`}
                    src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent("Рязань " + l.name)}`}
                    className="h-56 w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal mode={booking} onClose={() => setBooking(null)} />
    </section>
  );
};

export default Locations;
