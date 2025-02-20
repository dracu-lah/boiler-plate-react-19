import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MenuItems from "../menuItems";
import { MenuIcon } from "lucide-react";

export function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer duration-300 hover:text-primary lg:hidden" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="no-scrollbar w-[60vw] space-y-2 overflow-y-auto pt-10 md:w-[40vw]"
      >
        <MenuItems />
      </SheetContent>
    </Sheet>
  );
}
