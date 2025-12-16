import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    alt: "مراسم عروسی",
    category: "عروسی",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070",
    alt: "باغ نارنجستان",
    category: "فضای باغ",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069",
    alt: "دکوراسیون",
    category: "دکوراسیون",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    alt: "تالار اصلی",
    category: "تالار",
  },
  {
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062",
    alt: "پذیرایی",
    category: "پذیرایی",
  },
  {
    src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072",
    alt: "شب مراسم",
    category: "شب",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
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
            گالری تصاویر
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            نگاهی به
            <span className="text-primary"> فضای ما</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            تصاویری از مراسم‌های برگزار شده و فضای زیبای باغ تالار نارنجستان
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImage(image.src)}
              className={`relative group cursor-pointer rounded-xl overflow-hidden ${
                index === 0 || index === 5 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="تصویر بزرگ"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
