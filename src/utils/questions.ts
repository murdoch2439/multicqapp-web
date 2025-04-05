interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
    titles?:any;
}

export const questions: Question[] = [
    {
        question: 'What was the name of the first electronic computer, built in 1946?',
        answers: ['TERMOX', 'MADAV', 'ENIAC', 'EDVAC'],
        correctAnswer: 'ENIAC',
    },
    {
        question: 'Which operating system was developed by Linus Torvalds?',
        answers: ['Windows', 'macOs', 'Android', 'Linux'],
        correctAnswer: 'Linux',
    },
    {
        question: 'What protocol is used to transfer files over the web?',
        answers: ['HTML', 'HTTP', 'FTP', 'SMTP'],
        correctAnswer: 'FTP',
    },
    {
        question: "What's the main difference between IPv4 and IPv6?",
        answers: ['Security','IP address size' , 'Data encryption', 'Connection speed'],
        correctAnswer: 'IP address size',
    },
    // Add more questions as needed
];
