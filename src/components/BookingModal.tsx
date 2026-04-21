import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { LOCATIONS } from "@/data/site";

interface Props {
  mode: null | "tour" | "waitlist";
  onClose: () => void;
}

type FormData = {
  name: string;
  phone: string;
  age: string;
  location: string;
};

export const BookingModal = ({ mode, onClose }: Props) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: { location: LOCATIONS[0].slug },
  });

  useEffect(() => {
    if (mode) reset({ location: LOCATIONS[0].slug });
  }, [mode, reset]);

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success(
      mode === "tour" ? "Записали на экскурсию!" : "Добавили в лист ожидания!",
      { description: `Свяжемся с вами по номеру ${data.phone} в течение рабочего дня.` },
    );
    onClose();
  };

  const open = mode !== null;
  const title = mode === "tour" ? "Записаться на экскурсию" : "Лист ожидания";
  const desc =
    mode === "tour"
      ? "Покажем среду, познакомим с педагогами и ответим на вопросы."
      : "Сообщим, когда освободится место для возраста вашего ребёнка.";

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Ваше имя</Label>
            <Input id="name" placeholder="Анна" {...register("name", { required: true })} />
            {errors.name && <p className="mt-1 text-xs text-destructive">Введите имя</p>}
          </div>
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" {...register("phone", { required: true, minLength: 5 })} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">Введите телефон</p>}
          </div>
          <div>
            <Label htmlFor="age">Возраст ребёнка</Label>
            <Input id="age" placeholder="Например, 2 года 4 мес." {...register("age", { required: true })} />
          </div>
          <div>
            <Label className="mb-2 block">Филиал</Label>
            <RadioGroup defaultValue={LOCATIONS[0].slug} onValueChange={(v) => (document.getElementById("loc-" + v) as HTMLInputElement)?.click()}>
              {LOCATIONS.map((l) => (
                <label key={l.slug} className="flex items-start gap-2 rounded-md border border-border p-3 cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem id={"loc-" + l.slug} value={l.slug} {...register("location")} />
                  <div>
                    <div className="text-sm font-medium">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.district}</div>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Отправляем…" : "Отправить заявку"}
          </Button>
          <p className="text-[11px] text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
