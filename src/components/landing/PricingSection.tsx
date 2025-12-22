import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const packages = [
  {
    name: "پکیج نقره‌ای",
    price: "۲۵",
    unit: "میلیون تومان",
    description: "مناسب برای مراسم‌های کوچک و جمع‌های خانوادگی",
    features: [
      "ظرفیت تا ۱۰۰ نفر",
      "استفاده از تالار اصلی",
      "پذیرایی پایه",
      "دکوراسیون ساده",
      "سیستم صوتی",
    ],
    popular: false,
  },
  {
    name: "پکیج طلایی",
    price: "۴۵",
    unit: "میلیون تومان",
    description: "محبوب‌ترین انتخاب برای مراسم‌های متوسط",
    features: [
      "ظرفیت تا ۲۵۰ نفر",
      "استفاده از تالار و باغ",
      "پذیرایی کامل شام",
      "دکوراسیون حرفه‌ای",
      "DJ و سیستم صوتی",
      "عکاسی پایه",
      "پارکینگ VIP",
    ],
    popular: true,
  },
  {
    name: "پکیج الماسی",
    price: "۸۰",
    unit: "میلیون تومان",
    description: "برای مراسم‌های بزرگ و باشکوه",
    features: [
      "ظرفیت تا ۵۰۰ نفر",
      "اختصاصی تمام فضا",
      "پذیرایی لوکس",
      "دکوراسیون سفارشی",
      "گروه موسیقی زنده",
      "عکاسی و فیلمبرداری",
      "ماشین عروس",
      "اتاق آرایش VIP",
    ],
    popular: false,
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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/30">
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
            پکیج‌های قیمت
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            پکیج مناسب خود را
            <span className="text-primary"> انتخاب کنید</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            با توجه به نیاز و بودجه خود، بهترین پکیج را انتخاب کنید
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                pkg.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl"
                  : "bg-card text-card-foreground shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                  پرطرفدار
                </div>
              )}

              {/* Package Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span
                    className={`text-sm ${
                      pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {pkg.unit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        pkg.popular ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  pkg.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                <a href="#contact">رزرو این پکیج</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * قیمت‌ها شامل ارزش افزوده می‌باشد. برای اطلاع از جزئیات بیشتر تماس بگیرید.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;