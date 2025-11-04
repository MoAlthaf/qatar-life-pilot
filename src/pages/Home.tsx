import { useNavigate } from "react-router-dom";
import { Calendar, Activity, Sparkles } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import HealthGauge from "@/components/HealthGauge";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Mohammed Althaf";
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {greeting}, {userName} 👋
          </h1>
          <p className="text-muted-foreground">Here's what QIC prepared for you today.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <StatsCard
            title="Life Events Assistant"
            value="Ramadan starts in 3 days"
            icon={Sparkles}
            subtitle="Car Service & Iftar Reservations scheduled ✅"
            onClick={() => navigate("/life-events")}
          />

          <StatsCard
            title="Car Health Score"
            value={<HealthGauge value={86} />}
            icon={Activity}
            subtitle="Last Updated: Nov 3, 2025"
            onClick={() => navigate("/car-health")}
          />

          <StatsCard
            title="Weekend Plan Preview"
            value="Tap to view your personalized itinerary"
            icon={Calendar}
            subtitle="Sunny, 28°C - Perfect for outdoor activities 🌤️"
            onClick={() => navigate("/itinerary")}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Button
            variant="default"
            className="h-auto py-4 flex flex-col items-start gap-2"
            onClick={() => navigate("/life-events")}
          >
            <span className="font-semibold">Upcoming Events</span>
            <span className="text-sm opacity-90">Ramadan, Family Trip</span>
          </Button>

          <Button
            variant="outline"
            className="h-auto py-4 flex flex-col items-start gap-2"
            onClick={() => navigate("/car-health")}
          >
            <span className="font-semibold">Vehicle Status</span>
            <span className="text-sm">All systems normal</span>
          </Button>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          Powered by QIC AI Engine
        </div>
      </div>
    </div>
  );
};

export default Home;
