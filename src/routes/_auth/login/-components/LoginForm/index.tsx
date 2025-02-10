import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const loginData = {
        accessToken: "your-access-token",
        refreshToken: "your-refresh-token",
        data: {
          roleName: "admin",
          userId: "123",
          permissions: ["read", "write"],
        },
      };
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
      setToken({ data: loginData });
      navigate({ to: "/modules" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-6">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Welcome Back</h2>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Logged into tenant:</span>
            <span className="font-semibold text-foreground">{tenant}</span>
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
              onKeyPress={handleKeyPress}
              className="transition-shadow focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                onKeyPress={handleKeyPress}
                className="pr-10 transition-shadow focus:ring-2 focus:ring-primary/20"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Button
            onClick={handleLogin}
            className="w-full font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <Button
            variant="ghost"
            onClick={onChangeTenant}
            className="w-full text-sm hover:bg-primary/5"
          >
            Change Tenant
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
