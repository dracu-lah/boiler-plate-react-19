import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";

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

interface TenantSelectorProps {
  onTenantSelect: (tenant: string) => void;
}

function TenantSelector({ onTenantSelect }: TenantSelectorProps) {
  const [inputTenant, setInputTenant] = useState("");

  const handleTenantSubmit = () => {
    if (inputTenant.trim()) {
      localStorage.setItem("tenant", inputTenant.trim());
      onTenantSelect(inputTenant.trim());
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-2">Enter Tenant Name</h2>
      <input
        type="text"
        value={inputTenant}
        onChange={(e) => setInputTenant(e.target.value)}
        placeholder="Tenant name"
        className="border p-2 rounded w-60"
      />
      <br />
      <button
        onClick={handleTenantSubmit}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
      >
        Proceed
      </button>
    </div>
  );
}

interface LoginFormProps {
  tenant: string;
  onChangeTenant: () => void;
}

function LoginForm({ tenant, onChangeTenant }: LoginFormProps) {
  const { setToken } = useAuth();
  const handleLogin = () => {
    const loginData = {
      accessToken: "your-access-token",
      refreshToken: "your-refresh-token",
      data: {
        roleName: "admin",
        userId: "123",
        permissions: ["read", "write"],
      },
    };
    setToken({ data: loginData });
    window.location.href = "/dashboard"; // Navigate to dashboard
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Tenant: {tenant}</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login Cheyada
      </button>
      <br />
      <button
        onClick={onChangeTenant}
        className="mt-2 px-3 py-1 text-sm text-gray-600 underline"
      >
        Change Tenant
      </button>
    </div>
  );
}
