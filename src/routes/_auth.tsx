import NotFound from "@/components/common/NotFound";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context }) => {
    const { accessToken } = context.authentication;
    if (accessToken) {
      throw redirect({ to: "/modules" });
    }
  },

  notFoundComponent() {
    return <NotFound />;
  },
});
