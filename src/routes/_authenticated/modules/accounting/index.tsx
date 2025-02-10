import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/modules/accounting/")({
  beforeLoad: () => {
    throw redirect({ to: "/modules/accounting/general-ledger" });
  },
});
