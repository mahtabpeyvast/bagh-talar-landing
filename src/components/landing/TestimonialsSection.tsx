import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارا و امیر محمدی",
    event: "مراسم عروسی",
    rating: 5,
    text: "باغ تالار نارنجستان بهترین انتخاب برای عروسی ما بود. همه چیز عالی بود، از پذیرایی گرفته تا دکوراسیون. مهمانان ما همه تحت تأثیر قرار گرفتند.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    name: "شرکت فناوران نوین",
    event: "همایش سالانه",
    rating: 5,
    text: "برای همایش سالانه شرکت، نارنجستان را انتخاب کردیم و بسیار راضی بودیم. تجهیزات حرفه‌ای و هماهنگی عالی تیم، کار ما را بسیار آسان کرد.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
  },
  {
    name: "خانواده رضایی",
    event: "جشن تولد",
    rating: 5,
    text: "جشن تولد دخترمان در این باغ تالار برگزار شد. بچه‌ها خیلی خوش گذراندند و فضای باغ فوق‌العاده زیبا بود. حتماً دوباره می‌آییم!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm mb-2 block">
            نظرات مشتریان
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            مهمانان ما
            <span className="text-primary"> چه می‌گویند؟</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            نظرات واقعی مشتریانی که جشن‌های خود را در نارنجستان برگزار کرده‌اند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
