import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-components/layout/Sidebar";

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
