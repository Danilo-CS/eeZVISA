import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function CustomerReviews() {
  const reviews = [
    {
      rating: 5,
      title: "Excellent Visa Support",
      text: "The visa application process was incredibly smooth. The step-by-step guidance made it easy to understand what documents I needed and how to submit them. The support team was always available when I had questions.",
      author: "Maria S., Brazil",
      service: "Family Visa Application"
    },
    {
      rating: 5,
      title: "Professional and Efficient",
      text: "I was worried about applying for my work visa, but this platform made everything clear and straightforward. The document checklist and status tracking features helped me stay organized throughout the entire process.",
      author: "Raj P., India",
      service: "Employment Visa Processing"
    },
    {
      rating: 5,
      title: "Outstanding Experience",
      text: "As a student applying for my visa, I appreciated how the platform guided me through each requirement. The multi-language support and clear instructions made the complex process much more manageable.",
      author: "Liu W., China",
      service: "Student Visa Application"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Read why applicants trust USCIS Online Services
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex text-[#CD2026]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              Rated 4.8 out of 5 stars by our applicants
            </span>
          </div>
          <p className="text-gray-600">
            (125,847 verified application reviews)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-[#CD2026] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {review.title}
              </h3>
              <p className="text-gray-600 mb-6">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-medium text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#003875]' : 'bg-gray-300'}`}
            />
          ))}
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}