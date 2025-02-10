import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-components/layout/Sidebar";

export const Route = createFileRoute(
  "/_authenticated/_modules/accounting/_accountingLayout",
)({
  component: RouteComponent,
});

interface RootLayoutProps {
  children: React.ReactNode;
}
function ModuleLayout({ children }: RootLayoutProps) {
  return <div className="h-full bg-black">{children}</div>;
}

function RouteComponent() {
  return (
    <ModuleLayout>
      <Outlet />
    </ModuleLayout>
  );
}
