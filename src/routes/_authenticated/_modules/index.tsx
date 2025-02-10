import { Link, createFileRoute, linkOptions } from "@tanstack/react-router";
import { JSX } from "react";
import { BookOpen, Users, DollarSign, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/_modules/")({
  component: RouteComponent,
});

const modules = linkOptions([
  {
    label: "Accounting",
    to: "/accounting",
    icon: DollarSign,
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    label: "HR",
    to: "/",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    label: "Sales",
    to: "/",
    icon: BookOpen,
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    label: "Inventory",
    to: "/",
    icon: Package,
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
]);

function RouteComponent(): JSX.Element {
  return (
    <div className="p-8 h-full">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Available Modules
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.to}
              to={module.to}
              preload="intent"
              className={cn(
                "group relative overflow-hidden  rounded-xl px-6 py-12 transition-all duration-300 hover:shadow-lg",
                module.color,
              )}
            >
              <div className="relative z-10  flex flex-col items-center text-white">
                <Icon className="h-8 w-8 mb-3" />
                <span className="text-lg font-semibold">{module.label}</span>
              </div>
              <div className="absolute inset-0 z-0 bg-black opacity-0 transition-opacity group-hover:opacity-10" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RouteComponent;
