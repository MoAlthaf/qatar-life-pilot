import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Briefcase, School, Dumbbell } from "lucide-react";

interface DiscoverySetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const DiscoverySetupModal = ({ isOpen, onClose, onComplete }: DiscoverySetupModalProps) => {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const routes = [
    { id: "home-work", label: "Home → Work", icon: Briefcase },
    { id: "home-school", label: "Home → School", icon: School },
    { id: "home-gym", label: "Home → Gym", icon: Dumbbell }
  ];

  const interests = [
    { id: "food", label: "Food", icon: "🍔" },
    { id: "shopping", label: "Shopping", icon: "🛍️" },
    { id: "culture", label: "Culture", icon: "🎭" },
    { id: "outdoor", label: "Outdoor", icon: "🌴" },
    { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" }
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleComplete = () => {
    if (locationAllowed && selectedRoute && selectedInterests.length > 0) {
      onComplete();
    }
  };

  const isComplete = locationAllowed && selectedRoute && selectedInterests.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Quick Setup 🎯
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Location Permission */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Location Access</h3>
            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                locationAllowed
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
              onClick={() => setLocationAllowed(!locationAllowed)}
            >
              <div className="flex items-center gap-3">
                <MapPin className={`h-5 w-5 ${locationAllowed ? "text-primary" : "text-muted-foreground"}`} />
                <div className="flex-1">
                  <p className="font-medium text-card-foreground">Allow location access?</p>
                  <p className="text-xs text-muted-foreground">
                    Find events and offers along your route
                  </p>
                </div>
                <div
                  className={`h-5 w-10 rounded-full transition-colors ${
                    locationAllowed ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full bg-background shadow transition-transform ${
                      locationAllowed ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Commute Routes */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Select Your Typical Commute</h3>
            <div className="space-y-2">
              {routes.map((route) => {
                const Icon = route.icon;
                return (
                  <div
                    key={route.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedRoute === route.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedRoute(route.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-5 w-5 ${
                          selectedRoute === route.id ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">→</span>
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-card-foreground ml-2">{route.label.split(" → ")[1]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Choose Your Top Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedInterests.includes(interest.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-card-foreground border-2 border-border hover:border-primary/50"
                  }`}
                >
                  <span className="mr-2">{interest.icon}</span>
                  {interest.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="w-full"
            size="lg"
            onClick={handleComplete}
            disabled={!isComplete}
          >
            Generate My Route Suggestions
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscoverySetupModal;
