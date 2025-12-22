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
      description: "چلو جوجه‌کباب زعفرانی از برنج ایرانی خوش‌عطر، تکه‌های مرغ تازه مزه‌دار شده با زعفران، ماست، پیاز، روغن و ادویه‌های مخصوص تشکیل شده است.",
      price: "۳۶۰,۰۰۰",
    },
    {
      name: "جوجه کباب زعفرانی",
      description: "جوجه‌کباب زعفرانی از تکه‌های مرغ تازه، زعفران دم‌کرده، ماست، پیاز، آب‌لیمو تازه، روغن و ادویه‌های مخصوص تهیه می‌شود.",
      price: "۳۰۰,۰۰۰",
    },
    {
      name: "زرشک پلو با مرغ",
      description: "زرشک پلو با مرغ از برنج ایرانی خوش‌عطر، زرشک تازه، مرغ پخته‌شده نرم و آبدار، پیاز، زعفران، کره و ادویه‌های سنتی ایرانی تشکیل شده است.",
      price: "۲۸۵,۰۰۰",
    },
  ],
  کباب: [
    {
      name: "چلو کباب برگ",
      description: "چلو کباب برگ از برنج ایرانی خوش‌عطر، گوشت گوسفندی یا گوساله تازه و لطیف، کره، پیاز و ادویه‌های مخصوص تشکیل شده است.",
      price: "۸۵۰,۰۰۰",
    },
    {
      name: "چلو کباب چنجه",
      description: "چلو کباب چنجه از برنج ایرانی خوش‌عطر، تکه‌های گوشت گوسفندی یا گوساله تازه مزه‌دار شده، کره، پیاز و ادویه‌های مخصوص تشکیل شده است.",
      price: "۸۵۰,۰۰۰",
    },
    {
      name: "چلو کباب لقمه نگینی",
      description: "چلو کباب لقمه نگینی از برنج ایرانی خوش‌عطر، کباب لقمه نگینی تهیه‌شده از گوشت تازه گوسفندی یا گوساله، کره و ادویه‌های مخصوص تشکیل شده است.",
      price: "۳۸۰,۰۰۰",
    },
    {
      name: "چلو کباب کوبیده زعفرانی",
      description: "این غذا از گوشت گوسفندی تازه و کباب شده به همراه برنج چلو تهیه شده است.",
      price: "۳۲۰,۰۰۰",
    },
  ],
  ایرانی: [
    {
      name: "چلو خورشت قیمه نثار",
      description: "چلو خورشت قیمه نثار از برنج ایرانی خوش‌عطر، گوشت گوسفندی یا گوساله، لپه، رب گوجه‌فرنگی، پیاز، لیموعمانی، زعفران، خلال بادام و پسته، سیب‌زمینی خلالی و ادویه‌های مخصوص تشکیل شده است.",
      price: "۵۹۰,۰۰۰",
    },
    {
      name: "چلو خورشت فسنجان",
      description: "چلو خورشت فسنجان از برنج ایرانی، گردوی تازه آسیاب شده، رب انار ترش، مرغ یا گوشت و ادویه‌های مخصوص تهیه می‌شود.",
      price: "۴۵۰,۰۰۰",
    },
    {
      name: "چلو خورشت قورمه سبزی",
      description: "چلو خورشت قورمه سبزی از برنج ایرانی، سبزی‌های معطر تازه، گوشت گوسفندی، لوبیا قرمز و لیموعمانی تهیه می‌شود.",
      price: "۳۸۰,۰۰۰",
    },
  ],
  نوشیدنی: [
    {
      name: "دوغ سنتی",
      description: "دوغ خانگی با نعنا و گلاب، خنک و گوارا.",
      price: "۵۰,۰۰۰",
    },
    {
      name: "شربت زعفران",
      description: "شربت زعفران اصیل با گلاب، خنک‌کننده و معطر.",
      price: "۸۰,۰۰۰",
    },
    {
      name: "چای سنتی",
      description: "چای دم‌کرده ایرانی با زعفران یا هل.",
      price: "۴۰,۰۰۰",
    },
  ],
  سوپ: [
    {
      name: "آش رشته",
      description: "آش رشته سنتی با حبوبات، سبزی‌های معطر، رشته و کشک.",
      price: "۱۲۰,۰۰۰",
    },
    {
      name: "سوپ جو",
      description: "سوپ جو با سبزیجات تازه، مرغ و ادویه‌های مخصوص.",
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
    <section id="catering" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-garden-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-3">پذیرایی شایسته شما</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            خدمات پذیرایی و کافی‌شاپ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-garden-gold mx-auto mb-6 rounded-full" />
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
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خدمات کترینگ</h3>
            <p className="text-muted-foreground leading-relaxed">
              تیم حرفه‌ای آشپزخانه ما با استفاده از تازه‌ترین مواد اولیه، غذاهای لذیذ و متنوع را برای مراسم شما آماده می‌کند.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-garden-gold/20 to-garden-gold/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Coffee className="w-8 h-8 text-garden-gold" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">کافی‌شاپ</h3>
            <p className="text-muted-foreground leading-relaxed">
              کافی‌شاپ مجهز ما با انواع نوشیدنی‌های گرم و سرد، شیرینی‌های تازه و دسرهای خوشمزه پذیرای شماست.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-garden-gold/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Soup className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خدمات بیرون‌بر</h3>
            <p className="text-muted-foreground leading-relaxed">
              امکان سفارش بیرون‌بر با بسته‌بندی مناسب و تحویل سریع برای مهمانی‌های خانگی شما.
            </p>
          </motion.div>
        </motion.div>

        {/* Food Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-border/30"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <ChefHat className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">منوی غذا</h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
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
                className="group bg-gradient-to-br from-muted/80 to-muted/40 rounded-2xl p-6 hover:from-primary/10 hover:to-muted/60 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <h5 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">
                    {item.name}
                  </h5>
                  <span className="text-primary font-bold text-lg whitespace-nowrap mr-4">
                    {item.price} <span className="text-sm text-muted-foreground">تومان</span>
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