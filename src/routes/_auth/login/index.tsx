import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "./-components/LoginForm";

export const Route = createFileRoute("/_auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center ">
      <LoginForm />
    </div>
  );
}
