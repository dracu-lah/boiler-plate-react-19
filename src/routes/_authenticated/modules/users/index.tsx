import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/modules/users/")({
  beforeLoad: () => {
    throw redirect({ to: "/modules/accounting/general-ledger" });
  },
});
