import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Lock, Mail } from "lucide-react";

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
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Building2 className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <div className="mt-2 flex items-center justify-center gap-1">
            <span className="text-sm text-gray-600">Logged into tenant:</span>
            <span className="text-sm font-semibold text-blue-600">
              {tenant}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Sign In
          </button>

          <div className="text-center">
            <button
              onClick={onChangeTenant}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Change Tenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
