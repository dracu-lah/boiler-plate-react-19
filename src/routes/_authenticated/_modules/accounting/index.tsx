import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_modules/accounting/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authenticated/_modules/accounting/"!</div>;
}
