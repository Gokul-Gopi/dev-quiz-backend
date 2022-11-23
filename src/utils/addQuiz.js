import { Quiz } from "../models/quiz.model";

const quiz = {
  id: "1",
  name: "Javascript",
  questions: [
    {
      question:
        "Which of the following is true about variable naming conventions in JavaScript?",
      options: [
        {
          option:
            "JavaScript variable names must begin with a letter or the underscore character.",
          isCorrect: false,
        },
        {
          option: " JavaScript variable names are case sensitive.",
          isCorrect: false,
        },
        {
          option: "Both of the above.",
          isCorrect: true,
        },
        {
          option: "None of the above.",
          isCorrect: false,
        },
      ],
      points: 5,
    },

    {
      question:
        "Which built-in method returns the calling string value converted to upper case?",
      options: [
        {
          option: "toUpperCase()",
          isCorrect: true,
        },
        {
          option: "toUpper()",
          isCorrect: false,
        },
        {
          option: "changeCase(case)",
          isCorrect: false,
        },
        {
          option: "None of the above.",
          isCorrect: false,
        },
      ],
      points: 5,
    },

    {
      question: 'How do you call a function named "myFunction"?',
      options: [
        {
          option: "call function myFunction()  ",
          isCorrect: false,
        },
        {
          option: "myFunction()  ",
          isCorrect: true,
        },
        {
          option: "call myFunction()",
          isCorrect: false,
        },
        {
          option: "None of the above.",
          isCorrect: false,
        },
      ],
      points: 5,
    },

    {
      question: "How to insert a comment that has more than one line?",
      options: [
        {
          option: "<!--This comment hasmore than one line-- > ",
          isCorrect: false,
        },
        {
          option: "//This comment has more than one line//",
          isCorrect: false,
        },
        {
          option: "/*This comment has more than one line*/  ",
          isCorrect: true,
        },
        {
          option: "?This comment has more than one line?  ",
          isCorrect: false,
        },
      ],
      points: 5,
    },

    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        {
          option: 'var colors = "red", "green", "blue"',
          isCorrect: false,
        },
        {
          option: 'var colors = (1:"red", 2:"green", 3:"blue")',
          isCorrect: false,
        },
        {
          option: 'var colors = ["red", "green", "blue"]',
          isCorrect: true,
        },
        {
          option: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
          isCorrect: false,
        },
      ],
      points: 5,
    },
    {
      question: "What is the use of the <noscript> tag in Javascript?",
      options: [
        {
          option: "The contents are displayed by non-JS browsers",
          isCorrect: true,
        },
        {
          option: "Clears cookies and cache",
          isCorrect: false,
        },
        {
          option: "Both of the above",
          isCorrect: false,
        },
        {
          option: "None of the above",
          isCorrect: false,
        },
      ],
      points: 5,
    },
    {
      question: "What does the 'toLocateString()' method do in JS?",
      options: [
        {
          option: "Retruns a localised object representation",
          isCorrect: false,
        },
        {
          option: "Returns a parsed string",
          isCorrect: false,
        },
        {
          option: "Returns a localised string representation of an object",
          isCorrect: true,
        },
        {
          option: "None of the above",
          isCorrect: false,
        },
      ],
      points: 5,
    },
  ],
};

export const addQuiz = async () => {
  try {
    const newQuiz = new Quiz({
      name: quiz.name,
      questions: quiz.questions,
    });

    await newQuiz.save();
  } catch (error) {
    console.log("Error while adding quiz in DB: ", error.message);
  }
};
