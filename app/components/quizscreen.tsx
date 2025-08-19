export interface Questions {
    id: number;
    question: string;  
    answer: boolean;
}

export const mockQuestions: Questions[] = [
    {
        id: 1,
        question: "Greenland is almost as big as Africa", 
        answer: false
    },
    {
        id: 2,
        question: "A slug's blood is green",
        answer: false
    },
    {
        id: 3,
        question: "Greenland is almost as big as Africa",
        answer: false
    },
    {
        id: 4,
        question: "The music video to The Buggle's 'Video Killed the Radio Star was the first music video to broadcast on MTV.",
        answer: true
    },
    {
        id: 5,
        question: "Gumbo is a stew that originated in Louisiana.",
        answer: false
    },
    {
        id: 6,
        question: "'Undertale' is an RPG created by Toby Fox and released in 2015.",
        answer: true
    },
    {
        id: 7,
        question: "An atom contains a nucleus.",
        answer: true
    },
    {
        id: 8,
        question: "Russia passed a law in 2013 which outlaws telling children that homosexuals exist.",
        answer: false
    },
    {
        id: 9,
        question: "The United States of America declared their independence from the British Empire on July 4th, 1776.",
        answer: true
    },
    {
        id: 10,
        question: "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
        answer: false
    },

];

export default function QuizScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-[800px]">
                <h1 className="text-3xl font-bold mb-6">Quiz Screen</h1>
                <p className="text-lg mb-4">This is where the quiz questions will be displayed.</p>
                {/* You can map through mockQuestions here to display each question */}
            </div>
        </div>
    );
}