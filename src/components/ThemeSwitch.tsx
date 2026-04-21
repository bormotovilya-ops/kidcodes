import { useTheme } from "@/theme/ThemeProvider";
import { Sparkles, Baby } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-1 text-xs shadow-sm",
        className,
      )}
      role="tablist"
      aria-label="Переключатель дизайна"
    >
      <button
        type="button"
        role="tab"
        aria-selected={theme === "classic"}
        onClick={() => setTheme("classic")}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition-colors",
          theme === "classic" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Сад 1,5–7</span>
        <span className="sm:hidden">Сад</span>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={theme === "baby"}
        onClick={() => setTheme("baby")}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold transition-colors",
          theme === "baby" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Baby className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Малыши 1,5–3</span>
        <span className="sm:hidden">Малыши</span>
      </button>
    </div>
  );
};
