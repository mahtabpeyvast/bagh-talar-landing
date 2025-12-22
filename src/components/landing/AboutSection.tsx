import { MapPin, Users, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "موقعیت استثنایی",
    description: "واقع در شمال تهران با دسترسی آسان",
  },
  {
    icon: Users,
    title: "ظرفیت بالا",
    description: "پذیرایی از ۵۰ تا ۵۰۰ مهمان",
  },
  {
    icon: Sparkles,
    title: "خدمات لوکس",
    description: "کترینگ و تشریفات حرفه‌ای",
  },
  {
    icon: Clock,
    title: "رزرو آسان",
    description: "پشتیبانی ۲۴ ساعته",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
                alt="باغ تالار ایرانیان"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-px bg-primary mb-6" />
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              درباره ما
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              بیش از ۲۰ سال
              <br />
              <span className="gold-text">میزبان شادی‌های شما</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              باغ تالار ایرانیان با بیش از دو دهه تجربه در برگزاری مراسم، فضایی سرسبز و دلنشین را برای خاص‌ترین لحظات زندگی شما فراهم کرده است. تیم حرفه‌ای ما با اشتیاق و دقت، جشن شما را به یک خاطره ماندگار تبدیل می‌کند.
            </p>

            {/* Feature Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-start p-4 glass-light rounded-sm hover:border-primary/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;