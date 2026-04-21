import { SectionHeader } from "@/components/SectionHeader";
import { BLOG } from "@/data/site";
import kid1 from "@/assets/kid-1.jpg";
import kidsGroup from "@/assets/kids-group.jpg";
import interior from "@/assets/interior.jpg";

const imgs = [kid1, kidsGroup, interior, kid1, kidsGroup, interior];

const Blog = () => (
  <section className="section">
    <div className="container-x">
      <SectionHeader eyebrow="Жизнь сада" title={<>Блог и <span className="marker">события</span></>} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BLOG.map((p, i) => (
          <article key={p.title} className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card">
            <img src={imgs[i % imgs.length]} alt={p.title} className="aspect-[16/10] w-full object-cover transition group-hover:scale-105" />
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="chip bg-primary/10 text-primary">{p.tag}</span><span>{p.date}</span>
              </div>
              <h3 className="mt-2 text-base font-bold">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
