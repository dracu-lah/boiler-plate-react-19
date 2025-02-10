import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/modules/accounting/_accountingLayout",
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
