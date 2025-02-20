import { IS_TESTING } from "@/constants/config";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import ThemeToggle from "../../ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const router = useRouter();
  const { token: token, clearToken } = useAuth();

  const handleLogout = () => {
    clearToken();
    router.invalidate();
  };

  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Button
          variant="link"
          className="p-0 text-2xl font-bold"
          onClick={() => router.navigate({ to: "/modules" })}
        >
          KeyTracker
        </Button>

        <div className="flex items-center gap-x-10">
          {token && (
            <div className="flex items-center gap-6">
              {IS_TESTING && (
                <Badge variant="destructive" className="font-medium">
                  Test Instance
                </Badge>
              )}

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Logged In</span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleLogout}
                  className="gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </Button>
              </div>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
