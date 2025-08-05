import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "A Malek M.",
      image: "https://i.ibb.co/TMXYLY46/p-5.jpg",
      text: "NuLife 2 Living gave me hope when I thought there was none left. The caring staff and peaceful environment helped me rediscover my strength and find my way back to myself.",
      rating: 5
    },
    {
      name: "Michael R.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Living in the group home helped me in ways I didn't expect. After months of battling anxiety on my own, I finally felt seen and supported. The daily structure, the group talks, and the calming meditation sessions really gave me space to breathe and start healing. It's more than a place to stay, it's a place to grow.",
      rating: 5
    },
    {
      name: "Jennifer K.",
      image: "https://img.freepik.com/free-photo/girl-with-coffee_1157-8656.jpg?t=st=1754246991~exp=1754250591~hmac=2287babe186e368d96d57bd495c14bfd8706ee291b41e4863be268579e01f9f1&w=826",
      text: "What made the biggest difference for me was the one-on-one support. The staff took the time to really get to know me—not just my struggles, but who I am as a person. Whether it was during nature retreats or quiet moments at the home, I always felt truly seen and supported. That kind of care helped me heal in ways I never thought possible.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stories of <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from individuals who found healing and hope through our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/70 backdrop-blur-sm fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;