import { GetDashboardAPI } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard/")({
  component: RouteComponent,
});
function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: () => GetDashboardAPI(),
  });
  if (isLoading) {
    return "...loading";
  }
  if (isError) {
    return "...error";
  }
  return (
    <div>
      Hello "/_authenticated/dashboard"!
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
