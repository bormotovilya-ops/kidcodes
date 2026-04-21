import { useTheme } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-0 font-display text-xl font-black tracking-tight sm:text-2xl",
        className,
      )}
    >
      <span>K</span>
      <span className="relative mx-[1px] inline-block text-primary">
        i
        <span
          aria-hidden
          className={cn(
            "absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary",
            (theme === "baby" || theme === "hybrid") && "h-2 w-2",
          )}
        />
      </span>
      <span>DCODES</span>
    </span>
  );
};
