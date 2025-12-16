import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, ChefHat } from "lucide-react";

const menuItems = {
  مرغ: [
    {
      name: "چلو جوجه ران کباب زعفرانی",
      description: "چلو جوجه‌کباب زعفرانی از برنج ایرانی خوش‌عطر، تکه‌های مرغ تازه مزه‌دار شده با زعفران، ماست، پیاز، روغن و ادویه‌های مخصوص تشکیل شده است.",
    },
  ],
};

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

const CateringSection = () => {
  return (
    <section id="catering" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدمات پذیرایی و کافی‌شاپ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با بهترین کیفیت و طعم‌های اصیل ایرانی، پذیرایی شایسته مهمانان شما را تضمین می‌کنیم
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">خدمات کترینگ</h3>
            <p className="text-muted-foreground leading-relaxed">
              تیم حرفه‌ای آشپزخانه ما با استفاده از تازه‌ترین مواد اولیه، غذاهای لذیذ و متنوع را برای مراسم شما آماده می‌کند. از غذاهای سنتی ایرانی تا منوهای بین‌المللی.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Coffee className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">کافی‌شاپ</h3>
            <p className="text-muted-foreground leading-relaxed">
              کافی‌شاپ مجهز ما با انواع نوشیدنی‌های گرم و سرد، شیرینی‌های تازه و دسرهای خوشمزه، فضایی دلنشین برای استراحت و پذیرایی مهمانان شما فراهم می‌کند.
            </p>
          </motion.div>
        </motion.div>

        {/* Food Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">منوی غذا</h3>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <h4 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border">
                {category}
              </h4>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-muted/50 rounded-xl p-5"
                  >
                    <h5 className="text-foreground font-semibold mb-2">{item.name}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CateringSection;
