"use client";

import { useState } from 'react';   

export interface Questions {
    id: number;
    category: string;
    question: string;  
    answer: boolean;
}

export const mockQuestions: Questions[] = [
    {
        id: 1,
        category: "Geography",
        question: "Greenland is almost as big as Africa", 
        answer: false
    },
    {
        id: 2,
        category: "Animals",
        question: "A slug's blood is green",
        answer: false
    },
    {
        id: 3,
        category: "Geography",
        question: "Greenland is almost as big as Africa",
        answer: false
    },
    {
        id: 4,
        category: "Entertainment Music",
        question: "The music video to The Buggle's 'Video Killed the Radio Star was the first music video to broadcast on MTV.",
        answer: true
    },
    {
        id: 5,
        category: "General Knowledge",
        question: "Gumbo is a stew that originated in Louisiana.",
        answer: false
    },
    {
        id: 6,
        category: "Entertainment Video Games",
        question: "'Undertale' is an RPG created by Toby Fox and released in 2015.",
        answer: true
    },
    {
        id: 7,
        category: "Science & Nature",
        question: "An atom contains a nucleus.",
        answer: true
    },
    {
        id: 8,
        category: "Politics",
        question: "Russia passed a law in 2013 which outlaws telling children that homosexuals exist.",
        answer: false
    },
    {
        id: 9,
        category: "History",
        question: "The United States of America declared their independence from the British Empire on July 4th, 1776.",
        answer: true
    },
    {
        id: 10,
        category: "Sports",
        question: "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
        answer: false
    },

];

export default function QuizScreen() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswer, setUserAnswer] = useState<boolean[]>([]);

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsFinished(false);
        setUserAnswer([])
    }

    const currentQuestion = mockQuestions[currentQuestionIndex];

    const handleAnswer = (answer: boolean) => {
        
        const newUserAnswers = [...userAnswer];
        newUserAnswers[currentQuestionIndex] = answer;
        setUserAnswer(newUserAnswers);

        if (answer === currentQuestion.answer)  {
            setScore(score + 1);
        }
        if (currentQuestionIndex < mockQuestions.length - 1) { 
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    } 

    if (isFinished) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center w-[900px] h-[920px] bg-white rounded">
                    <h2 className="text-2xl font-semibold">Final Results</h2>
                    <p className="text-lg mb-4">Your score: {score}</p>

                    <div>
                        {mockQuestions.map((question, index) => (
                            <div key={(question.id)} className="mb-2">
                                <p className="font-semibold">{index + 1}. {question.question}</p>
                                <p> Correct Answer: <span className="text-gray-500">{question.answer ? "True" : "False"}</span></p>
                                <p className={`font-bold ml-3 ${userAnswer[index] === question.answer ? "text-green-500" : "text-red-500"}`}>Your Answer: {userAnswer[index] === true ? "True" : userAnswer[index] === false ? "False" : "Unanswered"}</p>
                            </div>
                        ))}
                    </div>

                    <button onClick={resetQuiz} className='underline underline-offset-8 cursor-pointer font-semibold hover:scale-120 transition duration-300 text-[#1e5aa8] text-lg'>PLAY AGAIN</button>
                </div>
            </div>
        );
    }
 
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-[1000px] h-[600px] bg-white rounded">

                {/* Header Section */}
                <div className="flex items-center justify-between w-full px-8 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-[url('/minilogo.jpg')] bg-contain bg-center bg-no-repeat w-32 h-16"></div>
                        <span className="text-lg font-medium">Category: {currentQuestion.category}</span>
                    </div>
                <span className="text-gray-500 text-md font-normal">{currentQuestionIndex + 1} of {mockQuestions.length}</span>
                </div>

                {/* Question Section */}
                <div className='flex-1 flex flex-col items-center justify-center px-8'>
                    <h1 className="text-3xl font-normal text-center mb-6 max-w-2xl">{currentQuestion.question}</h1>
                    <div className="flex gap-6">
                        <button onClick={() => handleAnswer(true)} className="bg-green-500 hover:bg-green-700 text-white px-6 py-1 rounded hover:scale-105 transition duration-300">✓ True</button>
                        <button onClick={() => handleAnswer(false)} className="bg-red-500 hover:bg-red-700 text-white px-6 py-1 rounded hover:scale-105 transition duration-300">✗ False</button>
                    </div>
                    </div>
                </div>
            </div>
    );
}