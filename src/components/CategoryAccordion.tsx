import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  time: string;
  description: string;
  calories?: string;
}

interface Category {
  id: number;
  title: string;
  items: FoodItem[];
}

interface CategoryAccordionProps {
  category: Category;
  onItemClick: (item: FoodItem) => void;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ category, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
      {/* هدر دسته‌بندی */}
      <button
        className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-white hover:from-amber-100 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
        <span className="text-amber-600">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>

      {/* محتوای آکاردئون */}
      {isOpen && (
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-lg p-5 hover:shadow-lg hover:border-amber-200 transition-all cursor-pointer"
                onClick={() => onItemClick(item)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                  <span className="text-lg font-bold text-amber-600">
                    {item.price.toLocaleString()} تومان
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="ml-2">🕒</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="text-gray-500 text-sm">📝 نظری ثبت نشده است!</div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                
                <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition-colors">
                  مشاهده جزئیات و افزودن
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;