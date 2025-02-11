import { createFileRoute, Outlet } from '@tanstack/react-router'
import SideBar from '@/components/common/layout/SideMenu/SideBar'

export const Route = createFileRoute(
  '/_authenticated/modules/users/_accountingLayout',
)({
  component: RouteComponent,
})

function ModuleLayout() {
  return (
    <div className="flex h-full ">
      {/* <Sidebar /> */}
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

function RouteComponent() {
  return <ModuleLayout />
}
