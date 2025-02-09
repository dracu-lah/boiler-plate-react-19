import React, { useState } from "react";
import { Building2 } from "lucide-react";

interface TenantSelectorProps {
  onTenantSelect: (tenant: string) => void;
}

const tenants = [
  "Acme Corporation",
  "Globex Industries",
  "Initech Systems",
  "Umbrella Corp",
  "Wayne Enterprises",
];

export default function TenantSelector({
  onTenantSelect,
}: TenantSelectorProps) {
  const [selectedTenant, setSelectedTenant] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleTenantSubmit = () => {
    if (selectedTenant) {
      localStorage.setItem("tenant", selectedTenant);
      onTenantSelect(selectedTenant);
    }
  };

  return (
    <div className=" h-full w-full flex items-center justify-center bg-gray-100">
      <div className="w-full  max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Select Your Tenant
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            className="relative w-full bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={selectedTenant ? "text-gray-900" : "text-gray-500"}
            >
              {selectedTenant || "Choose a tenant"}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
              {tenants.map((tenant) => (
                <div
                  key={tenant}
                  className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50 ${
                    selectedTenant === tenant
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setSelectedTenant(tenant);
                    setIsOpen(false);
                  }}
                >
                  {tenant}
                  {selectedTenant === tenant && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleTenantSubmit}
          disabled={!selectedTenant}
          className={`mt-6 w-full rounded-lg px-4 py-2 text-white font-medium
          ${
            selectedTenant
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }
        `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
