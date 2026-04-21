import { SectionHeader } from "@/components/SectionHeader";
import { REVIEWS } from "@/data/site";
import { Quote } from "lucide-react";

const Reviews = () => (
  <section className="section">
    <div className="container-x">
      <SectionHeader eyebrow="Отзывы родителей" title={<>Реальные истории <span className="marker">наших семей</span></>} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="card-soft">
            <Quote className="h-5 w-5 text-primary" />
            <blockquote className="mt-2 text-sm">{r.text}</blockquote>
            <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
