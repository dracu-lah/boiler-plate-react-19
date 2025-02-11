import { Sidebar } from "@/components/common/layout/Sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/modules/accounting/_accountingLayout",
)({
  component: RouteComponent,
});

function ModuleLayout() {
  return (
    <div className="flex h-full bg-black">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

function RouteComponent() {
  return <ModuleLayout />;
}
