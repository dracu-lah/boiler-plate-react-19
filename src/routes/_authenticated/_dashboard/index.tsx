import apiService from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_dashboard/")({
  component: RouteComponent,
});
function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["apiService.keys.getKeys"],
    queryFn: apiService.keys.getKeys,
  });
  console.log("data", data);
  if (isLoading) {
    return "...loading";
  }
  if (isError) {
    return "...error";
  }
  return (
    <div>
      Hello "/_authenticated/dashboard"!
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
    </div>
  );
}
