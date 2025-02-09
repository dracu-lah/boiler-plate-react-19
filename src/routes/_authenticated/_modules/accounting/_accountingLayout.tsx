import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-components/layout/Sidebar";

export const Route = createFileRoute(
  "/_authenticated/_modules/accounting/_accountingLayout",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
