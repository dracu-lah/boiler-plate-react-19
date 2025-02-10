import { useState } from "react";
import { Building2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const handleTenantSubmit = () => {
    if (selectedTenant) {
      localStorage.setItem("tenant", selectedTenant);
      onTenantSelect(selectedTenant);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-2xl">Select Your Tenant</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Select value={selectedTenant} onValueChange={setSelectedTenant}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a tenant" />
            </SelectTrigger>
            <SelectContent>
              {tenants.map((tenant) => (
                <SelectItem key={tenant} value={tenant}>
                  {tenant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleTenantSubmit}
            disabled={!selectedTenant}
            className="w-full"
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
