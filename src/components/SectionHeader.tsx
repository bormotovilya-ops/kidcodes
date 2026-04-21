import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, description, center, className }: Props) => (
  <div className={cn("mb-8 sm:mb-12", center && "text-center mx-auto max-w-3xl", className)}>
    {eyebrow && <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{eyebrow}</div>}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>}
  </div>
);
