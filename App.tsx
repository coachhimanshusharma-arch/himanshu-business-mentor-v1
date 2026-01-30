
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import ProblemAgitation from './components/Sections/ProblemAgitation';
import QuizBanner from './components/Sections/QuizBanner';
import Journey from './components/Sections/Journey';
import Philosophy from './components/Sections/Philosophy';
import WhatYouLearn from './components/Sections/WhatYouLearn';
import Webinar from './components/Sections/Webinar';
import Testimonials from './components/Sections/Testimonials';
import FAQ from './components/Sections/FAQ';
import FinalCTA from './components/Sections/FinalCTA';
import MultiStepForm from './components/LeadGen/MultiStepForm';
import Quiz from './components/LeadGen/Quiz';
import ExitIntent from './components/LeadGen/ExitIntent';
import SocialProofToast from './components/LeadGen/SocialProofToast';
import FloatingCTA from './components/LeadGen/FloatingCTA';

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
          <Hero onQuiz={openQuiz} onWebinar={() => {
             const element = document.getElementById('webinar');
             element?.scrollIntoView({ behavior: 'smooth' });
          }} />
          
          <ProblemAgitation />
          
          <QuizBanner onStart={openQuiz} />
          
          <Journey />
          
          <Philosophy />
          
          <WhatYouLearn />
          
          <div id="webinar">
            <Webinar />
          </div>
          
          <Testimonials />
          
          <FAQ />
          
          <FinalCTA 
            onQuiz={openQuiz} 
            onWebinar={() => {
              const element = document.getElementById('webinar');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            onForm={openForm} 
          />
        </main>

        <Footer />

        {/* Lead Gen Modals & Overlays */}
        {showForm && <MultiStepForm onClose={closeForm} />}
        {showQuiz && <Quiz onClose={closeQuiz} />}
        <ExitIntent />
        <SocialProofToast />
        <FloatingCTA onConnect={openForm} />
      </div>
    </Router>
  );
}

export default App;
