"use client";
import React, { useState, useEffect } from 'react';
import LandingHero from "@/components/LandingHero";
import Quiz from "@/components/Quiz";
import styles from "./page.module.css";
import HeroImage01 from '../assets/image_1.png'
import HeroImage02 from '../assets/image_2.png'
import BackgroundSVG from '../assets/01.svg'
import BackgroundSVG02 from '../assets/02.svg'
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [quizVisible, setQuizVisible] = useState(false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from an external source or API
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data.questions))
      .catch(error => console.error('Error loading questions:', error));
  }, []);

  return questions.length > 0 ? (
    <div>
      <LandingHero setQuizVisible={setQuizVisible} />
      <HeroSection
        imageSrc={HeroImage01.src}
        title="Hair loss needn't be irreversible. We can help!"
        subheading="Hair loss"
        description="We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
        imagePosition="left"
        backgroundSvg={BackgroundSVG.src}
      />
      <HeroSection
        imageSrc={HeroImage02.src}
        title="Erections can be a tricky thing. But no need to feel down!"
        subheading="Erecetile dysfunction"
        description="We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
        imagePosition="right"
        backgroundSvg={BackgroundSVG02.src}
      />
      {quizVisible && <Quiz questions={questions} />}
    </div>
  ) : null;
}