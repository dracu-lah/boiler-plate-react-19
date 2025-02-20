import { createRootRouteWithContext } from "@tanstack/react-router";
import RootLayout from "@/components/common/layout/RootLayout";
import NotFound from "@/components/common/NotFound";
import { AuthState } from "@/store/useAuthStore";

type RouterContext = {
  authentication: AuthState;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <RootLayout />,
  notFoundComponent() {
    return <NotFound />;
  },
});
