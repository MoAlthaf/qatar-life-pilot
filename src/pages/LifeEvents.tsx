import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, Clock, Plus } from "lucide-react";

const LifeEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Ramadan",
      startsIn: "3 days",
      scheduled: [
        "Car Service (March 8, 10 AM)",
        "Grocery Delivery (Every 3 days)",
        "Charity Donations (Weekly QAR 500)",
      ],
      pending: ["Eid Gathering", "Tailor Order"],
    },
    {
      id: 2,
      name: "Family Trip",
      startsIn: "Predicted - Confidence 78%",
      scheduled: [],
      pending: ["Car rental", "Travel insurance", "Itinerary link"],
    },
  ];

  const previousEvents = [
    { name: "Job Anniversary", date: "Oct 2024", type: "celebration" },
    { name: "Home Renovation", date: "Aug 2024", type: "project" },
    { name: "Wedding Attended", date: "June 2024", type: "social" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          Your Life Events Timeline
        </h1>
        <p className="text-muted-foreground mb-8">
          Automatically detected events with smart orchestration
        </p>

        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>

          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="p-6 bg-card border-0 animate-fade-in"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {event.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.startsIn}</p>
                </div>
                <Sparkles className="h-6 w-6 text-primary" />
              </div>

              {event.scheduled.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Auto-scheduled
                  </h4>
                  <ul className="space-y-1">
                    {event.scheduled.map((item, idx) => (
                      <li key={idx} className="text-sm text-card-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.pending.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-warning" />
                    Pending Approval
                  </h4>
                  <ul className="space-y-1">
                    {event.pending.map((item, idx) => (
                      <li key={idx} className="text-sm text-card-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-warning" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3">
                <Button size="sm" variant="default">
                  Approve All
                </Button>
                <Button size="sm" variant="outline">
                  Modify
                </Button>
                <Button size="sm" variant="ghost">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Previous Events</h2>
          <div className="space-y-3">
            {previousEvents.map((event, idx) => (
              <Card
                key={idx}
                className="p-4 bg-muted/30 border-0 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-success" />
              </Card>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Custom Event
        </Button>
      </div>
    </div>
  );
};

export default LifeEvents;
