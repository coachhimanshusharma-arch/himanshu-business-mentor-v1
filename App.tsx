
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';

// Lazy load below-the-fold sections for faster initial page load
const InstagramProfile = lazy(() => import('./components/Sections/InstagramProfile'));
const Testimonials = lazy(() => import('./components/Sections/Testimonials'));
const ProblemAgitation = lazy(() => import('./components/Sections/ProblemAgitation'));
const QuizBanner = lazy(() => import('./components/Sections/QuizBanner'));
const Journey = lazy(() => import('./components/Sections/Journey'));
const Philosophy = lazy(() => import('./components/Sections/Philosophy'));
const WhatYouLearn = lazy(() => import('./components/Sections/WhatYouLearn'));
const Webinar = lazy(() => import('./components/Sections/Webinar'));
const FAQ = lazy(() => import('./components/Sections/FAQ'));
const FinalCTA = lazy(() => import('./components/Sections/FinalCTA'));
const InstantLeadForm = lazy(() => import('./components/LeadGen/InstantLeadForm'));
const Quiz = lazy(() => import('./components/LeadGen/Quiz'));
const ExitIntent = lazy(() => import('./components/LeadGen/ExitIntent'));
const SocialProofToast = lazy(() => import('./components/LeadGen/SocialProofToast'));
const FloatingCTA = lazy(() => import('./components/LeadGen/FloatingCTA'));

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // Toggle handlers
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const openQuiz = () => setShowQuiz(true);
  const closeQuiz = () => setShowQuiz(false);

  return (
    <Router>
      <div className="min-h-screen bg-hero-gradient font-sans text-white selection:bg-cyan selection:text-space">
        <Header onConnect={openForm} onWebinar={() => {
          const element = document.getElementById('webinar');
          element?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <main className="pt-20">
          <Hero onQuiz={openForm} onWebinar={() => {
            const element = document.getElementById('webinar');
            element?.scrollIntoView({ behavior: 'smooth' });
          }} />

          <Suspense fallback={<div className="min-h-[200px]" />}>
            <InstagramProfile />
          </Suspense>

          <Suspense fallback={<div className="min-h-[200px]" />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <ProblemAgitation />
          </Suspense>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <QuizBanner onStart={openQuiz} />
          </Suspense>

          <Suspense fallback={<div className="min-h-[200px]" />}>
            <Journey />
          </Suspense>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <Philosophy />
          </Suspense>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <WhatYouLearn />
          </Suspense>

          <div id="webinar">
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Webinar />
            </Suspense>
          </div>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <FAQ />
          </Suspense>

          <Suspense fallback={<div className="min-h-[100px]" />}>
            <FinalCTA
              onQuiz={openQuiz}
              onWebinar={() => {
                const element = document.getElementById('webinar');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              onForm={openForm}
            />
          </Suspense>
        </main>

        <Footer />

        {/* Lead Gen Modals & Overlays */}
        <Suspense fallback={null}>
          {showForm && <InstantLeadForm onClose={closeForm} />}
          {showQuiz && <Quiz onClose={closeQuiz} />}
          <ExitIntent />
          <SocialProofToast />
          <FloatingCTA onConnect={openForm} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
