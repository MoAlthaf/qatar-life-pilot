import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Upload, FileText, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";
import HealthGauge from "@/components/HealthGauge";

const CarHealth = () => {
  const carMetrics = [
    { label: "Engine Health", status: "Normal", details: "Coolant 92°C, Oil Pressure OK", icon: CheckCircle, color: "text-success" },
    { label: "Battery", status: "Attention", details: "12.5V - Recommend check next service", icon: AlertCircle, color: "text-warning" },
    { label: "Fuel Efficiency", status: "Normal", details: "+5% deviation vs baseline", icon: CheckCircle, color: "text-success" },
  ];

  const alerts = [
    { message: "Air filter efficiency drop (dust storm correlation). Schedule service soon.", type: "warning" },
    { message: "Tire pressure stable for 2 weeks.", type: "success" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          Vehicle Health Dashboard
        </h1>
        <p className="text-muted-foreground mb-8">Real-time monitoring with AI anomaly detection</p>

        <Card
          className="p-6 mb-6 bg-card border-0 animate-fade-in"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="flex items-start gap-6 mb-6">
            <HealthGauge value={86} size={140} />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-card-foreground mb-1">Toyota Camry 2021</h2>
              <p className="text-lg font-semibold text-success mb-2">Overall Health: Excellent</p>
              <p className="text-sm text-muted-foreground mb-1">Last Updated: Nov 3, 2025, 09:42 AM</p>
              <p className="text-sm text-success font-medium">✓ No critical anomalies detected</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {carMetrics.map((metric, idx) => (
              <Card key={idx} className="p-4 bg-background">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm">{metric.label}</h3>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <p className={`text-lg font-bold ${metric.color} mb-1`}>{metric.status}</p>
                <p className="text-xs text-muted-foreground">{metric.details}</p>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-card border-0" style={{ boxShadow: "var(--shadow-soft)" }}>
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Alert Feed</h3>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${
                  alert.type === "warning" ? "bg-warning/10" : "bg-success/10"
                }`}
              >
                <p className={`text-sm ${alert.type === "warning" ? "text-warning-foreground" : "text-success-foreground"}`}>
                  {alert.type === "warning" ? "⚠️" : "✅"} {alert.message}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-6 bg-muted/30 border-0">
          <h3 className="text-lg font-semibold text-foreground mb-4">Performance Trends</h3>
          <div className="h-48 flex items-center justify-center bg-background rounded-lg border-2 border-dashed border-border">
            <p className="text-muted-foreground text-sm">Chart placeholder - Upload OBD data to view trends</p>
          </div>
        </Card>

        <div className="grid gap-3 md:grid-cols-2">
          <Button variant="default">
            <Upload className="h-4 w-4 mr-2" />
            Upload OBD Data
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            View Report PDF
          </Button>
          <Button variant="outline">
            Book Service
          </Button>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarHealth;
