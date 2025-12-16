import { MapPin, Users, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "موقعیت استثنایی",
    description: "واقع در شمال تهران با دسترسی آسان و پارکینگ اختصاصی",
  },
  {
    icon: Users,
    title: "ظرفیت بالا",
    description: "پذیرایی از ۵۰ تا ۵۰۰ مهمان در فضای داخلی و باغ",
  },
  {
    icon: Sparkles,
    title: "خدمات لوکس",
    description: "کترینگ حرفه‌ای، تشریفات و دکوراسیون منحصر به فرد",
  },
  {
    icon: Clock,
    title: "رزرو آسان",
    description: "رزرو آنلاین سریع با پشتیبانی ۲۴ ساعته",
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
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
                alt="باغ تالار نارنجستان"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm mb-2 block">
              درباره ما
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              بیش از ۲۰ سال
              <br />
              <span className="text-primary">میزبان شادی‌های شما</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              باغ تالار نارنجستان با بیش از دو دهه تجربه در برگزاری مراسم، فضایی سرسبز و دلنشین را برای خاص‌ترین لحظات زندگی شما فراهم کرده است. تیم حرفه‌ای ما با اشتیاق و دقت، جشن شما را به یک خاطره ماندگار تبدیل می‌کند.
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
                  className="flex gap-4 items-start p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
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
