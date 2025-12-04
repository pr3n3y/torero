const MapSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg animate-fade-in">
          {/* Google Maps Embed */}
          <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4164723954686!2d72.82404389999999!3d18.9888669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce191ed25173%3A0xc164530bcb855f99!2sTorero%20Softwares%20Limited!5e0!3m2!1sen!2sin!4v1733333333333!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Torero Softwares Limited Location"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
