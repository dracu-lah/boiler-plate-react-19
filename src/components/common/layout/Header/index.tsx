import { IS_TESTING } from "@/constants/config";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import ThemeToggle from "../../ThemeToggle";

export const Header = () => {
  const router = useRouter();
  const { token, clearToken } = useAuth();

  const handleLogout = () => {
    clearToken();
    router.invalidate();
  };

  return (
    <header className="px-6 py-4 bg-slate-50 border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          onClick={() => router.navigate({ to: "/" })}
          className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors dark:text-gray-100 dark:hover:text-blue-400"
        >
          ProductERP
        </h1>

        <div className="flex  gap-x-10">
          {token && (
            <div className="flex items-center gap-6">
              {IS_TESTING && (
                <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium dark:bg-amber-900 dark:text-amber-200">
                  Test Instance
                </div>
              )}

              <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-300">
                  Logged In
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
