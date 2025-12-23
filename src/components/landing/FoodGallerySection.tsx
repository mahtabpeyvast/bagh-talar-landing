import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";
import food7 from "@/assets/food-7.jpg";
import food8 from "@/assets/food-8.jpg";
import food9 from "@/assets/food-9.jpg";
import food10 from "@/assets/food-10.jpg";

const foodImages = [
{ src: food1, title: "کشک بادمجان" }, 
{ src: food3, title: "سالاد الویه" },
{ src: food5, title: "سالاد الویه" },
{ src: food6, title: "میرزاقاسمی" }, 
{ src: food7, title: "سوسیس بندری" },
{ src: food8, title: "سالاد فصل" },
{ src: food9, title: "سوسیس بندری" },
{ src: food10, title: "سالاد میوه" },
];

const FoodGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            گالری غذا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            تصاویر
            <span className="gold-text"> غذاهای ما</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نمونه‌ای از غذاهای لذیذ و متنوع که توسط سرآشپزهای مجرب ما تهیه می‌شود
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {foodImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-foreground font-medium">{image.title}</span>
                </div>
              </div>
              {/* Border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 z-10 p-2 text-foreground/60 hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                src={foodImages[selectedImage].src}
                alt={foodImages[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-3"
              >
                <span className="text-foreground font-medium">
                  {foodImages[selectedImage].title}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FoodGallerySection;