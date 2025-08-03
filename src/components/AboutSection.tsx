const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-peaceful">
      <div className="max-w-7xl mx-auto text-center flex md:flex-row flex-col justify-between items-center gap-6">
        <div className="slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            About <span className="text-gradient">NuLife 2 Living</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At NuLife 2 Living, we understand that life's challenges can leave us feeling 
              lost, overwhelmed, and disconnected from ourselves. Our Purpose is to provide a safe, structured, and supportive environment for people undergoing major life transitions, such as those aging out of foster care, recovering from domestic violence, transitioning from homelessness, or facing recent unemployment or displacement.
            </p>
            
            <p>
              NuLife 2 Living serves as a stable foundation where residents can rebuild their lives, develop essential life skills, and work toward long-term independence and self-sufficiency.
            </p>
            
            <p className="text-primary font-medium">
              Your journey to renewal begins with a single step. Let us walk alongside you 
              as you discover the beautiful, resilient person you're meant to be.
            </p>
          </div>
        </div>
        <div>
          <img src="/keeona.png" alt="keeona hedrick" className="max-h-[600px]" />
          <div className="w-1/2 mx-auto text-lg text-primary leading-relaxed py-4">
          <p>Keeona Hedrick</p>
          <p className="text-[12px]">Founder and CEO of NuLife 2 Living Homes, LLC</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;