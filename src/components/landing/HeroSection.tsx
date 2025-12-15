import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-accent text-sm md:text-base font-medium mb-4 opacity-0 animate-fade-in">
            به باغ تالار نارنجستان خوش آمدید
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-shadow opacity-0 animate-fade-in-up [animation-delay:200ms]">
            مکانی رویایی برای
            <br />
            <span className="text-accent">لحظات خاص شما</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:400ms]">
            باغ تالار نارنجستان با فضایی دلپذیر و خدماتی بی‌نظیر، میزبان جشن‌های عروسی، تولد و مراسم شرکتی شماست
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up [animation-delay:600ms]">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <a href="#contact">همین الان رزرو کنید</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              <a href="#gallery">مشاهده گالری</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 animate-float cursor-pointer"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
