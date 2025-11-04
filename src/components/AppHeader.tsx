import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-primary to-accent shadow-md">
      <div className="flex h-16 items-center justify-between px-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-primary font-bold text-lg">Q</span>
          </div>
          <h1 className="text-white font-semibold text-lg">QIC Co-Pilot</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
