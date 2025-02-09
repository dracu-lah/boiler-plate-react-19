import {
  useRouter,
  createLink,
  LinkComponent,
  createFileRoute,
} from "@tanstack/react-router";
import { JSX, forwardRef } from "react";

export const Route = createFileRoute("/_authenticated/modules/")({
  component: RouteComponent,
});

interface Module {
  name: string;
  path: string;
}

const modules: Module[] = [
  { name: "Accounting", path: "/_authenticated/modules/accounting" },
  { name: "HR", path: "/_authenticated/modules/hr" },
  { name: "Sales", path: "/_authenticated/modules/sales" },
  { name: "Inventory", path: "/_authenticated/modules/inventory" },
];

const BaseLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => (
  <a
    ref={ref}
    {...props}
    className="block px-4 py-2 text-blue-700 font-bold text-center bg-gray-100 rounded-md transition hover:bg-gray-200"
  />
));

const CreatedLinkComponent = createLink(BaseLink);
export const CustomLink: LinkComponent<typeof BaseLink> = (props) => (
  <CreatedLinkComponent preload="intent" {...props} />
);

function RouteComponent(): JSX.Element {
  const router = useRouter();

  console.log("Available Routes:", Object.keys(router.routesByPath));

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Modules</h1>
      <div style={styles.grid}>
        {modules.map((module) => (
          <CustomLink
            key={module.path}
            to={module.path}
            style={styles.moduleCard}
          >
            {module.name}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}

// Define styles
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "16px",
  },
  moduleCard: {
    display: "block",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    transition: "background 0.2s ease-in-out",
  },
};

export default RouteComponent;
