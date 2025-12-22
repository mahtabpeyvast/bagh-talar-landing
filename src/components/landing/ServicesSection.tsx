import { Heart, Briefcase, Cake, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Heart,
    title: "مراسم عروسی",
    description: "برگزاری باشکوه‌ترین جشن عروسی با تشریفات کامل",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
  },
  {
    icon: Briefcase,
    title: "مراسم شرکتی",
    description: "سمینارها و همایش‌ها با تجهیزات حرفه‌ای",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
  },
  {
    icon: Cake,
    title: "جشن تولد",
    description: "جشن تولد کودکان و بزرگسالان با تم‌های متنوع",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
  },
  {
    icon: PartyPopper,
    title: "سایر مراسم",
    description: "نامزدی، سالگرد و هر مناسبت ویژه",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            خدمات ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            برای هر مناسبتی
            <br />
            <span className="gold-text">آماده‌ایم</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            از جشن عروسی تا مراسم شرکتی، تیم ما با تجربه و دقت بالا در خدمت شماست
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;