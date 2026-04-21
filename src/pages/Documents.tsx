import { SectionHeader } from "@/components/SectionHeader";
import { DOCS } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Documents = () => (
  <section className="section">
    <div className="container-x">
      <SectionHeader eyebrow="Прозрачность" title={<>Все <span className="marker">документы</span> — публично</>} />
      <div className="grid gap-4 md:grid-cols-2">
        {DOCS.map((d) => (
          <div key={d.title} className="card-soft flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="font-bold">{d.title}</div>
              <div className="text-sm text-muted-foreground">{d.desc}</div>
            </div>
            <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" />PDF</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Documents;
