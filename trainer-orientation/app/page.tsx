'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Welcome to Trainer Orientation',
    subtitle: 'Your Journey Begins Here',
    content: [
      'Welcome to our team!',
      'This orientation will guide you through everything you need to know',
      'Get ready to make an impact'
    ],
    background: 'bg-gradient-to-br from-blue-600 to-purple-700'
  },
  {
    id: 2,
    title: 'Our Mission & Vision',
    subtitle: 'What We Stand For',
    content: [
      'Mission: Empower learners through exceptional training experiences',
      'Vision: Be the leading provider of transformative education',
      'Values: Excellence, Innovation, Integrity, Collaboration'
    ],
    background: 'bg-gradient-to-br from-green-600 to-teal-700'
  },
  {
    id: 3,
    title: 'Your Role as a Trainer',
    subtitle: 'Key Responsibilities',
    content: [
      '✓ Deliver engaging and effective training sessions',
      '✓ Adapt content to meet learner needs',
      '✓ Assess and provide constructive feedback',
      '✓ Foster an inclusive learning environment',
      '✓ Continuously improve your training skills'
    ],
    background: 'bg-gradient-to-br from-orange-600 to-red-700'
  },
  {
    id: 4,
    title: 'Training Methodology',
    subtitle: 'How We Teach',
    content: [
      '1. Interactive Learning: Engage participants actively',
      '2. Practical Application: Real-world examples and exercises',
      '3. Continuous Assessment: Regular feedback loops',
      '4. Personalized Approach: Adapt to different learning styles',
      '5. Technology Integration: Leverage modern tools'
    ],
    background: 'bg-gradient-to-br from-indigo-600 to-blue-700'
  },
  {
    id: 5,
    title: 'Essential Tools & Resources',
    subtitle: 'Your Trainer Toolkit',
    content: [
      '📚 Learning Management System (LMS)',
      '💻 Presentation Software & Materials',
      '📊 Assessment & Evaluation Tools',
      '🎥 Virtual Training Platforms',
      '📱 Communication Channels',
      '📖 Resource Library & Best Practices'
    ],
    background: 'bg-gradient-to-br from-pink-600 to-rose-700'
  },
  {
    id: 6,
    title: 'Best Practices',
    subtitle: 'Keys to Success',
    content: [
      'Preparation: Plan and rehearse thoroughly',
      'Engagement: Keep participants actively involved',
      'Clarity: Communicate concepts clearly and concisely',
      'Flexibility: Adapt to unexpected situations',
      'Empathy: Understand and support learner challenges',
      'Reflection: Continuously evaluate and improve'
    ],
    background: 'bg-gradient-to-br from-cyan-600 to-blue-700'
  },
  {
    id: 7,
    title: 'Support & Development',
    subtitle: 'Growing Together',
    content: [
      '👥 Mentorship Program: Paired with experienced trainers',
      '📈 Professional Development: Regular workshops and training',
      '🤝 Peer Collaboration: Monthly trainer meetups',
      '📞 Support Team: Available 24/7 for assistance',
      '🎓 Certification Opportunities: Advance your career'
    ],
    background: 'bg-gradient-to-br from-violet-600 to-purple-700'
  },
  {
    id: 8,
    title: 'Policies & Guidelines',
    subtitle: 'Important Information',
    content: [
      '• Code of Conduct: Maintain professionalism always',
      '• Confidentiality: Protect learner and company information',
      '• Attendance: Arrive 15 minutes before sessions',
      '• Feedback: Complete post-session evaluations',
      '• Safety: Follow all health and safety protocols'
    ],
    background: 'bg-gradient-to-br from-amber-600 to-orange-700'
  },
  {
    id: 9,
    title: 'Next Steps',
    subtitle: 'Getting Started',
    content: [
      '1️⃣ Complete onboarding paperwork',
      '2️⃣ Access your trainer dashboard and materials',
      '3️⃣ Schedule your first observation session',
      '4️⃣ Meet with your mentor',
      '5️⃣ Review your first training assignment',
      '6️⃣ Attend the new trainer workshop'
    ],
    background: 'bg-gradient-to-br from-emerald-600 to-green-700'
  },
  {
    id: 10,
    title: 'Thank You!',
    subtitle: 'Welcome to the Team',
    content: [
      'Questions? Contact us anytime',
      '📧 Email: training@company.com',
      '📞 Phone: (555) 123-4567',
      '💬 Slack: #trainer-support',
      '',
      'We\'re excited to have you on board!'
    ],
    background: 'bg-gradient-to-br from-blue-600 to-indigo-700'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Main Slide */}
      <div className={`w-full max-w-6xl aspect-[16/9] ${slide.background} rounded-2xl shadow-2xl p-12 flex flex-col justify-center text-white relative overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
          <h2 className="text-3xl font-light mb-12 opacity-90">{slide.subtitle}</h2>

          <div className="space-y-4 text-xl">
            {slide.content.map((item, index) => (
              <p key={index} className="leading-relaxed opacity-95">{item}</p>
            ))}
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-8 right-8 text-white/60 text-lg font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-blue-600'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-gray-600 text-sm text-center">
        Use arrow keys ← → or click buttons to navigate
      </div>
    </div>
  );
}
