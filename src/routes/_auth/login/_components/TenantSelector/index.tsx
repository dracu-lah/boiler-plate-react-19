import { useState } from "react";

interface TenantSelectorProps {
  onTenantSelect: (tenant: string) => void;
}

export default function TenantSelector({
  onTenantSelect,
}: TenantSelectorProps) {
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
