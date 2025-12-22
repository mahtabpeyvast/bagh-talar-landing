import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, ChefHat, Soup } from "lucide-react";
import { useState } from "react";

const menuCategories = [
  { id: "مرغ", label: "مرغ", icon: "🍗" },
  { id: "کباب", label: "کباب", icon: "🥩" },
  { id: "ایرانی", label: "ایرانی", icon: "🍚" },
  { id: "نوشیدنی", label: "نوشیدنی", icon: "☕" },
  { id: "سوپ", label: "سوپ و آش", icon: "🥣" },
];

const menuItems = {
  مرغ: [
    {
      name: "چلو جوجه ران کباب زعفرانی",
      description: "چلو جوجه‌کباب زعفرانی از برنج ایرانی خوش‌عطر و تکه‌های مرغ تازه مزه‌دار شده با زعفران",
      price: "۳۶۰,۰۰۰",
    },
    {
      name: "جوجه کباب زعفرانی",
      description: "تکه‌های مرغ تازه با زعفران دم‌کرده، ماست و ادویه‌های مخصوص",
      price: "۳۰۰,۰۰۰",
    },
    {
      name: "زرشک پلو با مرغ",
      description: "برنج ایرانی خوش‌عطر، زرشک تازه، مرغ پخته‌شده نرم و آبدار با زعفران",
      price: "۲۸۵,۰۰۰",
    },
  ],
  کباب: [
    {
      name: "چلو کباب برگ",
      description: "برنج ایرانی با گوشت گوسفندی یا گوساله تازه و لطیف",
      price: "۸۵۰,۰۰۰",
    },
    {
      name: "چلو کباب چنجه",
      description: "تکه‌های گوشت مزه‌دار شده با کره و ادویه‌های مخصوص",
      price: "۸۵۰,۰۰۰",
    },
    {
      name: "چلو کباب لقمه نگینی",
      description: "کباب لقمه نگینی از گوشت تازه گوسفندی با برنج ایرانی",
      price: "۳۸۰,۰۰۰",
    },
    {
      name: "چلو کباب کوبیده زعفرانی",
      description: "گوشت گوسفندی تازه و کباب شده به همراه برنج چلو",
      price: "۳۲۰,۰۰۰",
    },
  ],
  ایرانی: [
    {
      name: "چلو خورشت قیمه نثار",
      description: "گوشت گوسفندی با لپه، زعفران، خلال بادام و پسته",
      price: "۵۹۰,۰۰۰",
    },
    {
      name: "چلو خورشت فسنجان",
      description: "گردوی تازه آسیاب شده، رب انار ترش با مرغ یا گوشت",
      price: "۴۵۰,۰۰۰",
    },
    {
      name: "چلو خورشت قورمه سبزی",
      description: "سبزی‌های معطر تازه، گوشت گوسفندی، لوبیا قرمز و لیموعمانی",
      price: "۳۸۰,۰۰۰",
    },
  ],
  نوشیدنی: [
    {
      name: "دوغ سنتی",
      description: "دوغ خانگی با نعنا و گلاب، خنک و گوارا",
      price: "۵۰,۰۰۰",
    },
    {
      name: "شربت زعفران",
      description: "شربت زعفران اصیل با گلاب، خنک‌کننده و معطر",
      price: "۸۰,۰۰۰",
    },
    {
      name: "چای سنتی",
      description: "چای دم‌کرده ایرانی با زعفران یا هل",
      price: "۴۰,۰۰۰",
    },
  ],
  سوپ: [
    {
      name: "آش رشته",
      description: "آش رشته سنتی با حبوبات، سبزی‌های معطر و کشک",
      price: "۱۲۰,۰۰۰",
    },
    {
      name: "سوپ جو",
      description: "سوپ جو با سبزیجات تازه، مرغ و ادویه‌های مخصوص",
      price: "۱۰۰,۰۰۰",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const CateringSection = () => {
  const [activeCategory, setActiveCategory] = useState("مرغ");

  return (
    <section id="catering" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            پذیرایی شایسته شما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            خدمات پذیرایی و
            <span className="gold-text"> کترینگ</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            با بهترین کیفیت و طعم‌های اصیل ایرانی، پذیرایی شایسته مهمانان شما را تضمین می‌کنیم
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="glass-light p-8 hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-5">
              <UtensilsCrossed className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خدمات کترینگ</h3>
            <p className="text-muted-foreground leading-relaxed">
              تیم حرفه‌ای آشپزخانه ما با استفاده از تازه‌ترین مواد اولیه، غذاهای لذیذ و متنوع را آماده می‌کند
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-light p-8 hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-5">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">کافی‌شاپ</h3>
            <p className="text-muted-foreground leading-relaxed">
              کافی‌شاپ مجهز ما با انواع نوشیدنی‌های گرم و سرد، شیرینی‌های تازه پذیرای شماست
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-light p-8 hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-5">
              <Soup className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خدمات بیرون‌بر</h3>
            <p className="text-muted-foreground leading-relaxed">
              امکان سفارش بیرون‌بر با بسته‌بندی مناسب و تحویل سریع برای مهمانی‌های خانگی
            </p>
          </motion.div>
        </motion.div>

        {/* Food Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border p-8 md:p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <ChefHat className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">منوی غذا</h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span className="text-sm">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-4"
          >
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-light p-6 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-foreground font-bold">
                    {item.name}
                  </h5>
                  <span className="text-primary font-bold whitespace-nowrap mr-4">
                    {item.price} <span className="text-xs text-muted-foreground">تومان</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringSection;