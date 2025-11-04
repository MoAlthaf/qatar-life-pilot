import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Edit, Calendar, Car } from "lucide-react";

const Profile = () => {
  const userProfile = {
    name: "Mohammed Althaf",
    interests: ["Food", "Culture", "Family", "Adventure"],
    budget: "QAR 200–400 per activity",
    family: "2 Adults, 2 Kids (5 & 8 yrs)",
    cuisine: { Italian: 40, Arabic: 35, Asian: 25 },
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
          Your Profile 👤
        </h1>

        <Card className="p-6 mb-6 bg-card border-0 animate-fade-in" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center">
              <User className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">{userProfile.name}</h2>
              <p className="text-sm text-muted-foreground">Doha, Qatar</p>
            </div>
            <Button size="icon" variant="outline" className="ml-auto">
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-card-foreground mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-card-foreground mb-2">Budget Preference</h3>
              <p className="text-card-foreground">{userProfile.budget}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-card-foreground mb-2">Family</h3>
              <p className="text-card-foreground">{userProfile.family}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-card-foreground mb-2">Preferred Cuisine</h3>
              <div className="space-y-2">
                {Object.entries(userProfile.cuisine).map(([cuisine, percent]) => (
                  <div key={cuisine}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-card-foreground">{cuisine}</span>
                      <span className="text-muted-foreground">{percent}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button variant="default" className="w-full">
            Update Preferences
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <Calendar className="h-4 w-4 mr-2" />
            Connected: Google Calendar
          </Button>

          <Button variant="outline" className="w-full justify-start">
            <Car className="h-4 w-4 mr-2" />
            Connected: Car OBD Device
          </Button>

          <Button variant="outline" className="w-full">
            View My Data Insights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
