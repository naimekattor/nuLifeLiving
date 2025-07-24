import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-healing/10 to-calm/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Begin Your <span className="text-gradient">Healing Journey</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards rediscovering yourself. Our compassionate team 
            is here to support you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              variant="peaceful" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Book a Session
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free initial consultation • Flexible scheduling • Insurance accepted
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;