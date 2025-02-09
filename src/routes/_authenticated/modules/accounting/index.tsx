import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-components/layout/Sidebar";

export const Route = createFileRoute("/_authenticated/modules/accounting/")({
  component: RouteComponent,
});

export const hello = "hsadf";
function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center font-bold text-lg">
        Accounting Module
      </header>
      <main className="flex-grow p-6">
        <Outlet />
        <Sidebar />
      </main>
      <footer className="bg-gray-200 text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} ERP System
      </footer>
    </div>
  );
}

export default RouteComponent;
