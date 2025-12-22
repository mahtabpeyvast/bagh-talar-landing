import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gold-text">باغ تالار</span>
              <span className="text-foreground/80"> ایرانیان</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              با بیش از ۲۰ سال تجربه، میزبان خاص‌ترین لحظات زندگی شما هستیم.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:09121769054"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@narenjestan.ir"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">تماس با ما</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>خیابان جماران، خیابان حسن‌پور، کوچه ششم، باغ تالار ایرانیان</li>
              <li>
                <a href="tel:09121769054" className="hover:text-primary transition-colors">
                  ۰۹۱۲۱۷۶۹۰۵۴
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@narenjestan.ir"
                  className="hover:text-primary transition-colors"
                >
                  info@narenjestan.ir
                </a>
              </li>
              <li>همه روزه ۹ صبح تا ۹ شب</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} باغ تالار ایرانیان. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;