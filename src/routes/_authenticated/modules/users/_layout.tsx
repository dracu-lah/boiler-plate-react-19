import { createFileRoute, Outlet } from "@tanstack/react-router";
import SideBar from "@/modules/users/_layout/SideBar";

export const Route = createFileRoute("/_authenticated/modules/users/_layout")({
  component: RouteComponent,
});

function ModuleLayout() {
  return (
    <div className="flex h-full ">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

function RouteComponent() {
  return <ModuleLayout />;
}
