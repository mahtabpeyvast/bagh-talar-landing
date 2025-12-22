import React from 'react';
import { X, Clock, Flame } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  time: string;
  description: string;
  calories?: string;
}

interface FoodItemModalProps {
  item: FoodItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

const FoodItemModal: React.FC<FoodItemModalProps> = ({ item, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* هدر Modal */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* محتوای Modal */}
        <div className="p-6">
          {/* قیمت و زمان */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-amber-50 px-6 py-3 rounded-xl">
              <div className="text-3xl font-bold text-amber-600">
                {item.price.toLocaleString()} تومان
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-700">
                <Clock className="ml-2" size={20} />
                <span className="text-lg">{item.time}</span>
              </div>
              
              {item.calories && (
                <div className="flex items-center text-gray-700">
                  <Flame className="ml-2" size={20} />
                  <span className="text-lg">{item.calories}</span>
                </div>
              )}
            </div>
          </div>

          {/* وضعیت نظر */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-gray-600">📝 نظری ثبت نشده است!</span>
            </div>
          </div>

          {/* جزئیات غذا */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">محتویات:</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
            </div>
          </div>

          {/* دکمه‌های اقدام */}
          <div className="sticky bottom-0 bg-white pt-6 border-t">
            <div className="flex gap-4">
              <button
                onClick={onAddToCart}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl"
              >
                🛒 افزودن به سبد خرید
              </button>
              
              <button
                onClick={onClose}
                className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl text-lg font-semibold transition-colors"
              >
                بازگشت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemModal;