'use client';

import { useState } from 'react';
import QuizScreen from '../components/quizscreen'; 

export default function MainContent() {
  const [mainScreen, setCurrentScreen] = useState<'welcome' | 'quiz'>('welcome');

 const handleStartQuiz = () => {
  setCurrentScreen('quiz');
}

  if (mainScreen === 'quiz') {
    return (
      <div>
        <QuizScreen />
      </div>
    )
  }

  return (
    <div id="welcomescreen" className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-[1000px] h-[600px] bg-white rounded">
      <div className="flex flex-row items-center justify-center w-full">
      <div className="bg-[url('/logozeniark.jpg')] bg-contain bg-center bg-no-repeat w-64 h-24"></div>
      </div>

      {/* 2nd part */}
      <div className=" flex items-center justify-center">
      <p className="text-4xl font-semibold mb-4">
        Welcome to the Trivia Challenge!
      </p>
      </div>

      {/* 3rd part */}
      <div className=" flex items-center justify-center">
      <p className="text-2xl font-normal mb-8">
        You will be presented with 10 True or False questions.
      </p>
      </div>

      {/* Button*/}
      <button id="quiz-start" className="bg-[#1e5aa8] text-white font-semibold py-2 px-10 rounded-lg  hover:bg-[#1a4c8b] transition duration-300 hover:scale-105 mb-10">
        Can you score 10/10?
      </button>

      {/* 4th part */}
      <div>
        <button 
        onClick={handleStartQuiz}
        className="text-[#1e5aa8] font-bold underline underline-offset-8 cursor-pointer transition duration-300 hover:scale-105">LET'S START</button>
      </div>
      </div>
    </div>
  );
}
