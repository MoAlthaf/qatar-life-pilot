import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, DollarSign, Clock, Utensils, Waves, Building2, ShoppingBag, MapPinned } from "lucide-react";

const Itinerary = () => {
  const [showItinerary, setShowItinerary] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const itineraryData = [
    {
      day: "Saturday, Nov 9",
      activities: [
        {
          time: "9:00 AM",
          title: "Katara Beach Picnic",
          icon: Waves,
          details: "28°C, low crowd, parking booked",
          location: "Katara Cultural Village",
        },
        {
          time: "12:30 PM",
          title: "The Pearl Restaurant",
          icon: Utensils,
          details: "Family-friendly Italian, QAR 300 avg",
          location: "The Pearl-Qatar",
        },
        {
          time: "3:00 PM",
          title: "Souq Waqif Walk",
          icon: ShoppingBag,
          details: "Cultural crafts, falcon show",
          location: "Souq Waqif",
        },
      ],
    },
    {
      day: "Sunday, Nov 10",
      activities: [
        {
          time: "10:00 AM",
          title: "National Museum Visit",
          icon: Building2,
          details: "Tickets auto-reserved",
          location: "National Museum of Qatar",
        },
        {
          time: "1:00 PM",
          title: "Home lunch",
          icon: Utensils,
          details: "Groceries arriving 12 PM",
          location: "Home",
        },
        {
          time: "3:00 PM",
          title: "Nora's Football",
          icon: MapPinned,
          details: "From Calendar",
          location: "Local Sports Club",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in flex items-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          Your Smart Itinerary
        </h1>
        <p className="text-muted-foreground mb-8">
          AI-powered plans based on weather, preferences & your calendar
        </p>

        <div className="mb-8">
          <div className="flex gap-3">
            <Input
              placeholder="Plan my weekend — cultural and outdoorsy"
              className="flex-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              onClick={() => setShowItinerary(true)}
              className="whitespace-nowrap"
            >
              Generate Itinerary
            </Button>
          </div>
        </div>

        {showItinerary && (
          <div className="space-y-6 animate-fade-in">
            {itineraryData.map((dayPlan, dayIdx) => (
              <div key={dayIdx}>
                <h2 className="text-xl font-bold text-foreground mb-4">{dayPlan.day}</h2>
                <div className="space-y-4">
                  {dayPlan.activities.map((activity, actIdx) => (
                    <Card
                      key={actIdx}
                      className="p-5 bg-card border-0 hover:shadow-lg transition-all"
                      style={{ boxShadow: "var(--shadow-soft)" }}
                    >
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <activity.icon className="h-6 w-6 text-primary" />
                          </div>
                          {actIdx < dayPlan.activities.length - 1 && (
                            <div className="w-0.5 h-12 bg-border mt-2" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="text-sm font-semibold text-primary mb-1">
                                {activity.time}
                              </p>
                              <h3 className="text-lg font-bold text-card-foreground">
                                {activity.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{activity.details}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{activity.location}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            <Card className="p-6 bg-primary/5 border-0">
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-semibold text-foreground">1.5 hrs driving</p>
                </div>
                <div>
                  <DollarSign className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-semibold text-foreground">QAR 850 total</p>
                </div>
                <div>
                  <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-semibold text-foreground">2 hrs saved</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mb-4">
                🌤️ Perfect weather conditions for outdoor activities
              </p>
              <div className="flex gap-3">
                <Button className="flex-1">Approve & Book All</Button>
                <Button variant="outline" className="flex-1">Customize</Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
