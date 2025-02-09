import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./accounting/-components/layout/Sidebar";

export const Route = createFileRoute("/_authenticated/_modules/accounting")({
  component: () => {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="flex-grow p-6">
          <Outlet />
        </main>
        <Sidebar />
      </div>
    );
  },
});
