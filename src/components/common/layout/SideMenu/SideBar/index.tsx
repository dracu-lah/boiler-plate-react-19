import MenuItems from "../menuItems";
import { ScrollArea } from "@/components/ui/scroll-area";

const SideBar = () => {
  return (
    <div className="sticky hidden border-r-2 lg:block">
      <ScrollArea className="h-[calc(100vh-6rem)]">
        <ul className="sticky top-24 mt-8 flex w-[280px] flex-col gap-y-1 px-4 text-black">
          <MenuItems />
        </ul>
      </ScrollArea>
    </div>
  );
};

export default SideBar;
