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
              lost, overwhelmed, and disconnected from ourselves. Our mission is to provide 
              a safe, nurturing sanctuary where individuals can heal, grow, and rediscover 
              their inner strength.
            </p>
            
            <p>
              Founded on principles of compassion, understanding, and holistic wellness, 
              we offer a comprehensive approach to healing that addresses the mind, body, 
              and spirit. Whether you're recovering from trauma, managing stress, or simply 
              seeking a deeper connection with yourself, we're here to support you every 
              step of the way.
            </p>
            
            <p className="text-primary font-medium">
              Your journey to renewal begins with a single step. Let us walk alongside you 
              as you discover the beautiful, resilient person you're meant to be.
            </p>
          </div>
        </div>
        <div>
          <img src="/keeona.png" alt="keeona hedrick" className="max-h-[600px] rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;