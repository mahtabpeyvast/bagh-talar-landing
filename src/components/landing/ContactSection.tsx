import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "تلفن تماس",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    href: "tel:02112345678",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "info@narenjestan.ir",
    href: "mailto:info@narenjestan.ir",
  },
  {
    icon: MapPin,
    title: "آدرس",
    value: "تهران، شمال شهر، بلوار باغ نارنجستان",
    href: "#",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    value: "همه روزه ۹ صبح تا ۹ شب",
    href: "#",
  },
];

const eventTypes = [
  "عروسی",
  "مراسم شرکتی",
  "جشن تولد",
  "نامزدی",
  "سایر مراسم",
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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "پیام شما ارسال شد!",
      description: "همکاران ما به زودی با شما تماس خواهند گرفت.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
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
            تماس با ما
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            همین الان
            <span className="text-primary"> رزرو کنید</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            برای رزرو و کسب اطلاعات بیشتر، فرم زیر را پر کنید یا با ما تماس بگیرید
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg order-2 lg:order-1"
          >
            <h3 className="text-xl font-bold text-card-foreground mb-6">
              فرم درخواست رزرو
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    نام و نام خانوادگی *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="نام شما"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    شماره تماس *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    ایمیل
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    نوع مراسم *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">انتخاب کنید</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  توضیحات
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="تاریخ مورد نظر، تعداد مهمانان و سایر توضیحات..."
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  "در حال ارسال..."
                ) : (
                  <>
                    <Send className="w-4 h-4 ml-2" />
                    ارسال درخواست
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              راه‌های ارتباطی
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden h-48 bg-muted flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p>نقشه موقعیت مکانی</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
