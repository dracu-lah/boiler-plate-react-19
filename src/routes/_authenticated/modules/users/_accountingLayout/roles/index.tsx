import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/modules/users/_accountingLayout/roles/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_authenticated/modules/accounting/_accountingLayout/roles/"!
    </div>
  )
}
