import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Brain, Trees, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Counseling",
      description: "Professional 1-on-1 and group therapy sessions with certified counselors",
      features: ["Individual Therapy", "Group Sessions", "Family Counseling", "Crisis Support"]
    },
    {
      icon: Brain,
      title: "Meditation & Mindfulness",
      description: "Guided programs to help you find inner peace and emotional balance",
      features: ["Guided Meditation", "Mindfulness Training", "Stress Reduction", "Breathing Techniques"]
    },
    {
      icon: Trees,
      title: "Healing Nature Retreats",
      description: "Immersive outdoor experiences that reconnect you with nature's healing power",
      features: ["Weekend Retreats", "Nature Therapy", "Outdoor Activities", "Peaceful Settings"]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Safe spaces to connect with others on similar healing journeys",
      features: ["Support Groups", "Peer Mentoring", "Community Events", "Safe Sharing Spaces"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
             <span className="text-gradient">You Will Not Walk This Journey Alone</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-healing rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;