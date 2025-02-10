import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import TenantSelector from "./-components/TenantSelector";
import LoginForm from "./-components/LoginForm";

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
    <div className="min-h-[80vh] w-full flex items-center justify-center ">
      {tenant ? (
        <LoginForm tenant={tenant} onChangeTenant={handleChangeTenant} />
      ) : (
        <TenantSelector onTenantSelect={handleTenantSelect} />
      )}
    </div>
  );
}
