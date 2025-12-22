import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import venueEntrance from "@/assets/venue-entrance.png";
import venueGarden from "@/assets/venue-garden.jpg";
import venueAutumn from "@/assets/venue-autumn.jpg";
import venueSunset from "@/assets/venue-sunset.jpg";

const galleryImages = [
  {
    src: venueEntrance,
    alt: "ورودی باغ",
    category: "ورودی",
  },
  {
    src: venueGarden,
    alt: "فضای سبز باغ",
    category: "فضای باغ",
  },
  {
    src: venueAutumn,
    alt: "پاییز در باغ",
    category: "پاییز",
  },
  {
    src: venueSunset,
    alt: "غروب در باغ",
    category: "غروب",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="w-12 h-px bg-primary mx-auto mb-6" />
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            گالری تصاویر
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            نگاهی به
            <span className="gold-text"> فضای ما</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            تصاویری از فضای زیبای باغ تالار ایرانیان
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImage(image.src)}
              className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500 flex items-center justify-center">
                <span className="text-foreground text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  {image.category}
                </span>
              </div>
              {/* Border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-300" />
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
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 left-6 text-foreground/60 hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="تصویر بزرگ"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;