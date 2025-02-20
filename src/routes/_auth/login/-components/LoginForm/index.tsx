import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Building2Icon, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import BasicFormField from "@/components/common/FormElements/BasicFormField";
import api from "@/services/api";

// Define validation schema using Zod
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
interface LoginCredentials {
  username: string;
  password: string;
}
interface LoginResponse {
  access_token: string;
}
type LoginFormInputs = z.infer<typeof loginSchema>;
export default function LoginForm() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  // TanStack Query Mutation for handling login
  const mutation = useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: api.auth.login,
    onSuccess: ({ access_token }) => {
      setToken({
        data: {
          accessToken: access_token,
          refreshToken: "your-refresh-token",
          data: {
            roleName: "admin",
            userId: "123",
            permissions: ["read", "write"],
          },
        },
      });

      navigate({ to: "/" });
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    mutation.mutate(data);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center space-y-6">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
          <Building2Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome Back</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <BasicFormField
              name="username"
              label="Username"
              placeholder="Enter your username"
              required
              type="text"
            />
            <div className="relative">
              <BasicFormField
                name="password"
                label="Password"
                placeholder="Enter your password"
                required
                type={showPassword ? "text" : "password"}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-9 transform -translate-y-1/2 p-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Eye className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            </div>
            <Button
              type="submit"
              className="w-full font-semibold"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Signing in..." : "Sign In"}
            </Button>
            {mutation.isError && (
              <p className="text-red-500 text-sm text-center">
                {mutation.error instanceof Error
                  ? mutation.error.message
                  : "Login failed"}
              </p>
            )}
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
