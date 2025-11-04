import { useState } from "react";
import { MapPin, Navigation, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscoverySetupModal from "@/components/DiscoverySetupModal";
import RouteEventCard from "@/components/RouteEventCard";
import EventDetailModal from "@/components/EventDetailModal";

const RouteDiscovery = () => {
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const routeEvents = [
    {
      id: 1,
      name: "Flat White Café – Al Sadd",
      category: "Food",
      icon: "☕",
      distance: "500m",
      offer: "15% off for QIC users",
      description: "Premium coffee and breakfast spot with cozy ambiance. Known for artisan coffee and fresh pastries.",
      location: "Al Sadd Street, Doha",
      time: "Open: 7 AM - 10 PM",
      cost: "QAR 45 average",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
    },
    {
      id: 2,
      name: "Katara Art Gallery",
      category: "Culture",
      icon: "🎨",
      distance: "1.2km",
      offer: "Free entry this week",
      description: "Contemporary art exhibitions featuring local and international artists.",
      location: "Katara Cultural Village",
      time: "Open: 9 AM - 7 PM",
      cost: "Free entry",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800"
    },
    {
      id: 3,
      name: "The Pearl Promenade Run",
      category: "Outdoor",
      icon: "🏃",
      distance: "800m",
      offer: "Group event Sat 7 AM",
      description: "Weekly community running event along the scenic Pearl promenade.",
      location: "The Pearl-Qatar",
      time: "Saturday 7:00 AM",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800"
    },
    {
      id: 4,
      name: "Villaggio Mall",
      category: "Shopping",
      icon: "🛍️",
      distance: "1.1km",
      offer: "Festival discounts 30%",
      description: "Venetian-themed mall with luxury brands and family entertainment.",
      location: "Aspire Zone, Doha",
      time: "Open: 10 AM - 10 PM",
      cost: "Various",
      image: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800"
    },
    {
      id: 5,
      name: "Al Bidda Park Picnic Zone",
      category: "Family",
      icon: "🌳",
      distance: "700m",
      offer: "Kids' area upgraded",
      description: "Family-friendly park with new playground equipment and picnic facilities.",
      location: "Al Bidda Park, Doha",
      time: "Open: 24/7",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"
    }
  ];

  const similarRecommendations = [
    {
      id: 6,
      name: "Jazz Night at Lusail Marina",
      category: "Culture",
      icon: "🎷",
      date: "Friday 8 PM",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800"
    },
    {
      id: 7,
      name: "Souq Waqif Night Market",
      category: "Shopping",
      icon: "🛒",
      date: "Weekend",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea6c6e98?w=800"
    },
    {
      id: 8,
      name: "Qatar National Library Talk",
      category: "Culture",
      icon: "📚",
      date: "Free entry",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800"
    },
    {
      id: 9,
      name: "La Spiga Italian Brunch",
      category: "Food",
      icon: "🍝",
      date: "QAR 280 set menu",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
    }
  ];

  const recentVisits = ["The Pearl", "Souq Waqif", "Katara"];

  const handleSetupComplete = () => {
    setIsSetupComplete(true);
    setShowSetupModal(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {!isSetupComplete ? (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Discover Along Your Route 🚗💫
            </h1>
            <div
              className="p-8 rounded-lg bg-card text-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-card-foreground mb-2">
                Find new spots along your daily route
              </h2>
              <p className="text-muted-foreground mb-6">
                Let QIC suggest events, offers, and venues you'll actually pass by during your commute.
              </p>
              <Button
                size="lg"
                onClick={() => setShowSetupModal(true)}
                className="bg-primary hover:bg-primary/90"
              >
                Start Discovery
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Your Route Today 🗺️
                </h1>
                <p className="text-muted-foreground">
                  Hi Mohammed 👋, we found a few great spots near your usual drive to West Bay.
                </p>
              </div>
              <Button variant="outline" onClick={() => setShowSetupModal(true)}>
                <Navigation className="h-4 w-4 mr-2" />
                Change Route
              </Button>
            </div>

            {/* Mock Map Section */}
            <div
              className="relative h-64 rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(254 56% 93%), hsl(254 60% 95%))",
                boxShadow: "var(--shadow-soft)"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2 animate-bounce" />
                  <p className="text-sm font-semibold text-card-foreground">
                    Al Wakra → West Bay
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Low traffic • Sunny 28°C
                  </p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-2 rounded-full text-xs font-medium">
                🚗 5 stops along your route
              </div>
            </div>

            {/* Route Events */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Along Your Route</h2>
              <div className="space-y-3">
                {routeEvents.map((event) => (
                  <RouteEventCard
                    key={event.id}
                    event={event}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            </div>

            {/* Recent Visits */}
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 inline mr-2" />
                Inspired by your recent visits to:{" "}
                {recentVisits.map((visit, idx) => (
                  <span key={visit}>
                    <span className="font-semibold text-foreground">{visit}</span>
                    {idx < recentVisits.length - 1 ? ", " : ""}
                  </span>
                ))}
                {" "}— here are similar upcoming offers and events!
              </p>
            </div>

            {/* Similar Recommendations */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">You Might Also Like</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {similarRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="rounded-lg overflow-hidden bg-card cursor-pointer hover:scale-105 transition-transform"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                    onClick={() => setSelectedEvent({...rec, distance: "2.5km", offer: rec.date})}
                  >
                    <div
                      className="h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url(${rec.image})` }}
                    />
                    <div className="p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-2xl">{rec.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-card-foreground line-clamp-2">
                            {rec.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{rec.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <DiscoverySetupModal
        isOpen={showSetupModal}
        onClose={() => setShowSetupModal(false)}
        onComplete={handleSetupComplete}
      />

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default RouteDiscovery;
