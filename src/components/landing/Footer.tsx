import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">
              باغ تالار ایرانیان
            </h3>
            <p className="text-background/70 leading-relaxed mb-4">
              با بیش از ۲۰ سال تجربه، میزبان خاص‌ترین لحظات زندگی شما هستیم.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:09121769054"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@narenjestan.ir"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              {[
                { name: "درباره ما", href: "#about" },
                { name: "خدمات", href: "#services" },
                { name: "گالری", href: "#gallery" },
                { name: "پکیج‌ها", href: "#pricing" },
                { name: "تماس با ما", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-background/70">
              <li>خیابان جماران، خیابان حسن‌پور، کوچه ششم، باغ تالار ایرانیان</li>
              <li>
                <a href="tel:09121769054" className="hover:text-accent transition-colors">
                  ۰۹۱۲۱۷۶۹۰۵۴
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@narenjestan.ir"
                  className="hover:text-accent transition-colors"
                >
                  info@narenjestan.ir
                </a>
              </li>
              <li>همه روزه ۹ صبح تا ۹ شب</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>
            © {new Date().getFullYear()} باغ تالار ایرانیان. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
