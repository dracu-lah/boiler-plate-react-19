import { IS_TESTING } from "@/constants/config";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@tanstack/react-router";
import { LogOut } from "lucide-react";

export const Header = () => {
  const router = useRouter();
  const { token, clearToken } = useAuth();

  const handleLogout = () => {
    clearToken();
    router.invalidate();
  };

  return (
    <header className="px-6 py-4 bg-slate-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          onClick={() => router.navigate({ to: "/" })}
          className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
        >
          My App
        </h1>

        {token && (
          <div className="flex items-center gap-6">
            {IS_TESTING && (
              <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Test Instance
              </div>
            )}

            <div className="flex items-center gap-4">
              <span className="text-gray-600">Logged In</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
