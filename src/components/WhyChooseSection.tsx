import { Shield, Award, Heart, Leaf } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of licensed therapists, counselors, and wellness experts with years of experience in healing and recovery."
    },
    {
      icon: Leaf,
      title: "Career Agent",
      description: "Empowering individuals, especially those from underserved populations, to become self-sufficient by providing career guidance, skill-building, and job placement support. They strengthen the community by bridging the gap between job seekers and employers, promoting workforce development, and helping people find meaningful, stable employment."
    },
    {
      icon: Heart,
      title: "Total Life Transformation",
      description: "We address the whole person - mind, body, and spirit - for comprehensive wellness and lasting transformation."
    },
    {
      icon: Shield,
      title: "Safe & Confidential",
      description: "Your privacy and safety are our highest priorities. We provide a judgment-free zone for open, honest healing."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-serenity/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">NuLife 2 Living Homes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest quality care in the most supportive environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 bg-card rounded-lg hover:shadow-lg transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;