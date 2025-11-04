import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Navigation, Bookmark, Share2, Calendar } from "lucide-react";

interface EventDetailModalProps {
  event: any;
  isOpen: boolean;
  onClose: () => void;
}

const EventDetailModal = ({ event, isOpen, onClose }: EventDetailModalProps) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header Image */}
        {event.image && (
          <div
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{event.icon}</span>
                {event.offer && (
                  <span className="px-3 py-1 rounded-full bg-success text-success-foreground text-xs font-semibold">
                    {event.offer}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-white">{event.name}</h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">{event.location || "N/A"}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {event.distance} from your route
                </p>
              </div>
            </div>

            {event.time && (
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="text-sm font-medium text-foreground">{event.time}</p>
                </div>
              </div>
            )}

            {event.cost && (
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">Cost</p>
                  <p className="text-sm font-medium text-foreground">{event.cost}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{event.category === "Food" ? "🍴" : event.category === "Culture" ? "🎨" : event.category === "Outdoor" ? "🏃" : event.category === "Shopping" ? "🛍️" : "🌳"}</span>
              <div>
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="text-sm font-medium text-foreground">{event.category}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          {event.description && (
            <div>
              <h3 className="font-semibold text-foreground mb-2">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          )}

          {/* QIC Perks */}
          {event.offer && (
            <div className="p-4 rounded-lg bg-success/10 border-2 border-success/20">
              <h3 className="font-semibold text-success mb-1 flex items-center gap-2">
                <span>✨</span> QIC Member Perk
              </h3>
              <p className="text-sm text-foreground">{event.offer}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full">
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailModal;
