import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Building2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  tenant: string;
  onChangeTenant: () => void;
}

export default function LoginForm({ tenant, onChangeTenant }: LoginFormProps) {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    navigate({ to: "/" });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-6">
        <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Logged into tenant:</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {tenant}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Button onClick={handleLogin} className="w-full">
            Sign In
          </Button>

          <Button
            variant="ghost"
            onClick={onChangeTenant}
            className="w-full text-sm"
          >
            Change Tenant
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
