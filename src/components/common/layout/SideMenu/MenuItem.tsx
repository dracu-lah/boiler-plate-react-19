import { useLocation, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SubMenuAccordion = ({ item, index, isItemActive }) => {
  if (!item.subMenu.subMenu) {
    return (
      <Accordion key={index} type="single" collapsible>
        <AccordionItem
          className="gap-x-2 rounded-lg border-none duration-300 hover:bg-primary/60 data-[state=open]:bg-primary/20"
          value={`item-${index}`}
        >
          <AccordionTrigger className="px-4">
            <div className="flex w-[200px] gap-x-2">
              {item.icon && (
                <item.icon strokeWidth={3} className="size-5 min-w-fit" />
              )}
              <span className="truncate font-semibold">{item.label}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="mx-1 flex flex-col space-y-2 rounded-md">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  {subItem.subMenu ? (
                    <SubMenuAccordion
                      item={subItem}
                      index={subIndex}
                      isItemActive={isItemActive}
                    />
                  ) : (
                    <Link
                      key={subIndex}
                      to={subItem.route}
                      onClick={() => window.scroll(0, 0)}
                      className={`flex gap-x-2 rounded-lg px-4 py-4 font-semibold duration-300 hover:bg-primary/60 ${
                        isItemActive(subItem) ? "bg-primary" : ""
                      }`}
                    >
                      {subItem.icon && (
                        <subItem.icon
                          strokeWidth={3}
                          className="size-5 min-w-fit"
                        />
                      )}
                      <span>{subItem.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      <SubMenuAccordion item={item} index={index} isItemActive={isItemActive} />
    );
  }
};

const MenuItem = ({ item, index }) => {
  const location = useLocation();

  const isItemActive = (item) => {
    const isDashboard = item.route === routePath.dashboard;
    const isCurrentRoute = location.pathname === item.route;
    const isCurrentSubRoute = location.pathname.startsWith(item.route);

    if (isDashboard && location.pathname === routePath.dashboard) {
      return true;
    }

    return (
      (isCurrentRoute && !isDashboard) || (isCurrentSubRoute && !isDashboard)
    );
  };

  if (item.subMenu) {
    return (
      <SubMenuAccordion item={item} index={index} isItemActive={isItemActive} />
    );
  } else {
    return (
      <Link
        key={index}
        to={item.route}
        onClick={() => window.scroll(0, 0)}
        className={`flex min-w-fit gap-x-2 rounded-lg px-4 py-4 font-semibold duration-300 hover:bg-primary/60 ${
          isItemActive(item) ? "bg-primary" : ""
        }`}
      >
        {item.icon && <item.icon strokeWidth={3} className="size-5" />}
        <span>{item.label}</span>
      </Link>
    );
  }
};

export default MenuItem;
