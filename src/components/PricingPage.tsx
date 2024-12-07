import React from 'react';
import { Check, Star, Shield, Clock, Users, ArrowRight, HelpCircle, DollarSign, Plus, Minus } from 'lucide-react';

export function PricingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const tiers = [
    {
      name: "Do it Yourself",
      price: "$89",
      description: "Perfect for those who want to handle their visa application independently",
      features: [
        "Step-by-step application guide",
        "Document checklist",
        "Basic eligibility check",
        "24/7 email support",
        "Application progress tracking"
      ],
      cta: "Start Application",
      popular: false
    },
    {
      name: "Assisted",
      price: "$169",
      description: "Expert guidance as you complete your visa application",
      features: [
        "All DIY features",
        "Document review by experts",
        "Priority support",
        "Live chat assistance",
        "Application error check",
        "Interview preparation guide"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Full Service",
      price: "$299",
      description: "Let our experts handle your entire visa application",
      features: [
        "All Assisted features",
        "Dedicated visa expert",
        "Complete application handling",
        "Premium support 24/7",
        "Express processing",
        "Guarantee of completion"
      ],
      cta: "Talk to an Expert",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the application fee?",
      answer: "Our application fee covers the entire visa processing service including document review, application preparation, and support throughout the process. Government fees are not included and will be clearly communicated before submission."
    },
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary depending on the visa type and your specific situation. Typically, our DIY option takes 2-3 weeks, while our Full Service option can expedite the process. We'll provide you with an estimated timeline during your initial consultation."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time during the application process. The difference in price will be prorated based on your current stage in the application process."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "If your visa application is rejected and you've used our Full Service option, we'll help you understand the reasons and assist with the reapplication process at no additional cost. For other plans, we offer discounted rates for reapplication support."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a money-back guarantee if you're not satisfied with our service. Refund eligibility varies by plan and stage of application. Please refer to our refund policy for detailed information."
    },
    {
      question: "What support is available if I need help?",
      answer: "All plans include access to our support team. DIY plans include email support, Assisted plans add live chat, and Full Service plans provide dedicated expert support via phone, email, and chat 24/7."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the option that{' '}
              <span className="text-[#003875]">best fits your needs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you prefer to handle your visa application independently or want expert assistance,
              we have the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#003875] text-white rounded-lg hover:bg-[#002855] transition-colors">
                <HelpCircle className="w-5 h-5" />
                <span>Help me choose</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border-2 border-[#003875] text-[#003875] rounded-lg hover:bg-[#003875] hover:text-white transition-colors">
                <DollarSign className="w-5 h-5" />
                <span>Compare features</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                tier.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-[#003875]">{tier.price}</span>
                  <span className="text-gray-500 ml-2">/ application</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <button className={`w-full py-3 px-6 rounded-lg font-medium mb-8 ${
                  tier.popular
                    ? 'bg-[#003875] text-white hover:bg-[#002855]'
                    : 'border-2 border-[#003875] text-[#003875] hover:bg-[#003875] hover:text-white'
                } transition-colors`}>
                  {tier.cta}
                </button>

                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  {index === 0 && <Clock className="w-4 h-4" />}
                  {index === 1 && <Shield className="w-4 h-4" />}
                  {index === 2 && <Users className="w-4 h-4" />}
                  <span>
                    {index === 0 && "Average completion time: 2-3 weeks"}
                    {index === 1 && "100% Satisfaction guaranteed"}
                    {index === 2 && "Over 50,000 successful applications"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">All plans include:</p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-[#003875]" />
              <span className="text-gray-600">Secure Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#003875]" />
              <span className="text-gray-600">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#003875]" />
              <span className="text-gray-600">Expert Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our visa application services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-[#003875]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#003875]" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-[#003875] text-white rounded-lg hover:bg-[#002855] transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}