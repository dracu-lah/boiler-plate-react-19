import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "./_components/LoginForm";
import TenantSelector from "./_components/TenantSelector";

export const Route = createFileRoute("/_auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tenant, setTenant] = useState<string | null>(null);

  useEffect(() => {
    setTenant(localStorage.getItem("tenant"));
  }, []);

  const handleTenantSelect = (newTenant: string) => setTenant(newTenant);
  const handleChangeTenant = () => {
    localStorage.removeItem("tenant");
    setTenant(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {tenant ? (
        <LoginForm tenant={tenant} onChangeTenant={handleChangeTenant} />
      ) : (
        <TenantSelector onTenantSelect={handleTenantSelect} />
      )}
    </div>
  );
}
