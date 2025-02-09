import { useAuth } from "@/hooks/useAuth";

interface LoginFormProps {
  tenant: string;
  onChangeTenant: () => void;
}

export default function LoginForm({ tenant, onChangeTenant }: LoginFormProps) {
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
