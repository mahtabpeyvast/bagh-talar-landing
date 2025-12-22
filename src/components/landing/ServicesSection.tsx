import { Heart, Briefcase, Cake, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Heart,
    title: "مراسم عروسی",
    description:
      "برگزاری باشکوه‌ترین جشن عروسی با تشریفات کامل، دکوراسیون منحصر به فرد و پذیرایی عالی",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
  },
  {
    icon: Briefcase,
    title: "مراسم شرکتی",
    description:
      "برگزاری سمینارها، همایش‌ها و جشن‌های شرکتی با تجهیزات حرفه‌ای و خدمات ویژه",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
  },
  {
    icon: Cake,
    title: "جشن تولد",
    description:
      "برگزاری جشن تولد کودکان و بزرگسالان با تم‌های متنوع و برنامه‌های شاد",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
  },
  {
    icon: PartyPopper,
    title: "سایر مراسم",
    description:
      "برگزاری نامزدی، سالگرد، جشن فارغ‌التحصیلی و هر مناسبت ویژه دیگر",
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
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm mb-2 block">
            خدمات ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            برای هر مناسبتی
            <br />
            <span className="text-primary">آماده‌ایم</span>
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
              className="group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
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