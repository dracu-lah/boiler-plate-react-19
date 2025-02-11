import { useAuth } from "@/hooks/useAuth";
import { Link } from "@tanstack/react-router";
import { BookOpen, FileText, LogIn } from "lucide-react";

export const Sidebar = () => {
  const { token } = useAuth();

  const navigationItems = [
    {
      to: "/modules/accounting/general-ledger",
      label: "General Ledger",
      icon: FileText,
    },
    // Add more navigation items as needed
  ];

  return (
    <div className="w-64 h-full  bg-white border-r border-gray-200 flex flex-col dark:bg-gray-900 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link
          to="/modules/accounting"
          className="flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-blue-400"
        >
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold text-lg">Accounting</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <div className="px-3">
          {!token && (
            <Link
              to="/login"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors mb-2 dark:text-gray-300 dark:hover:bg-gray-800"
              activeProps={{
                className:
                  "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
              }}
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          )}

          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-50 hover:bg-gray-100 rounded-lg transition-colors mb-2  dark:hover:bg-gray-800"
                activeProps={{
                  className:
                    "bg-blue-50 text-blue-600 font-medium dark:bg-blue-900 dark:text-blue-300",
                }}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer - Optional */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Accounting System v1.0
        </div>
      </div>
    </div>
  );
};
