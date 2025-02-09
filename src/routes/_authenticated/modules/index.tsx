import { createFileRoute, Link } from "@tanstack/react-router";
import { JSX } from "react";

export const Route = createFileRoute("/_authenticated/modules/")({
  component: RouteComponent,
});

// Define a type for modules
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

function RouteComponent(): JSX.Element {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Modules</h1>
      <div style={styles.grid}>
        {modules.map((module: Module) => (
          <Link key={module.path} to={module.path} style={styles.moduleCard}>
            {module.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Define a type for styles
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
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    display: "block",
  },
};

export default RouteComponent;
