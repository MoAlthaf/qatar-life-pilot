import { MapPin, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RouteEventCardProps {
  event: {
    id: number;
    name: string;
    category: string;
    icon: string;
    distance: string;
    offer: string;
  };
  onClick: () => void;
}

const RouteEventCard = ({ event, onClick }: RouteEventCardProps) => {
  return (
    <Card
      className="p-4 bg-card hover:shadow-lg transition-all cursor-pointer border-0"
      onClick={onClick}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
          {event.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground mb-1">{event.name}</h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {event.distance} from route
            </span>
            <span className="px-2 py-1 rounded-full bg-muted text-foreground">
              {event.category}
            </span>
          </div>
        </div>

        {event.offer && (
          <div className="flex items-center gap-1 px-3 py-2 rounded-lg bg-success/10 text-success text-xs font-semibold flex-shrink-0">
            <Tag className="h-3 w-3" />
            {event.offer}
          </div>
        )}
      </div>
    </Card>
  );
};

export default RouteEventCard;
