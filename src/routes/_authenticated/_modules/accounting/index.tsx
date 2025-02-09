import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_modules/accounting/")({
  beforeLoad: () => {
    throw redirect({ to: "/accounting/general-ledger" });
  },
});
