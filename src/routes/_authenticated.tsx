import NotFound from "@/components/common/NotFound";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const { accessToken } = context.authentication;
    if (!accessToken) {
      throw redirect({ to: "/login" });
    }
  },

  notFoundComponent() {
    return <NotFound />;
  },
});
