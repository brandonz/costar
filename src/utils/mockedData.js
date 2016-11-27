import Quiz from './quizType.js';
import Content from './contentType.js';

var mockedData = [
    {
        title: 'Standard',
        id: 0,
        topic: {
            title: 'Quiz Demos',
            id: 0
        },
        content: [],
        quiz: [
            {
                id: 1,
                type: Quiz.STANDARD,
                data: {
                    question: 'We can compare a variable of type int with a boolean variable?',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'True'
                        },
                        {
                            id: 2,
                            text: 'False'
                        }
                    ],
                    correctAnswer: 2
                }
            }
        ],
        dataOfRelease: 1
    },
    {
        title: 'Multi Select',
        id: 0,
        topic: {
            title: 'Quiz Demos',
            id: 0
        },
        content: [],
        quiz: [
            {
                id: 1,
                type: Quiz.MULTISELECT,
                data: {
                    question: 'Please select all the valid Java variable types below:',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'class variable'
                        },
                        {
                            id: 2,
                            text: 'instance variable'
                        },
                        {
                            id: 3,
                            text: 'complex variable'
                        },
                        {
                            id: 4,
                            text: 'local variable'
                        },
                        {
                            id: 5,
                            text: 'quantum variable'
                        }
                    ],
                    correctAnswer: [1, 2, 4]
                }
            }
        ],
        dataOfRelease: 1
    },
    {
        title: 'Code Line',
        id: 0,
        topic: {
            title: 'Quiz Demos',
            id: 0
        },
        content: [],
        quiz: [
            {
                id: 1,
                type: Quiz.CODE,
                data: {
                    question: 'The following program should add all the number in an int array and print it. Find the bug.',
                    possibleAnswers: [
                        'public static void sumArray(int[] input) {',
                        '          int sum = 0;',
                        '          for (int i = 0; i < input.length; i++) {',
                        '                    sum = 0;',
                        '                    sum += input[i];',
                        '          }',
                        '          System.out.println(sum);',
                        '}'
                    ],
                    correctAnswer: '                    sum = 0;',
                    explanation: 'The sum variable is reset to 0 after every iteration of the loop.'
                }
            }
        ],
        dataOfRelease: 1
    },
    {
        title: 'Sortable List',
        id: 0,
        topic: {
            title: 'Quiz Demos',
            id: 0
        },
        content: [],
        quiz: [
            {
                id: 1,
                type: Quiz.SORTABLE,
                data: {
                    question: 'Please sort the program so that it prints "Hello, World!" when run.',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: '}'
                        },
                        {
                            id: 2,
                            text: '          System.out.println("Hello, World!");'
                        },
                        {
                            id: 3,
                            text: 'public static void main() {'
                        }
                    ],
                    correctAnswer: [3, 2, 1]
                }
            }
        ],
        dataOfRelease: 1
    },
    {
        title: 'Tabbed Question',
        id: 0,
        topic: {
            title: 'Quiz Demos',
            id: 0
        },
        content: [],
        quiz: [
            {
                id: 1,
                type: Quiz.TABBED,
                data: {
                    question: 'Suppose that a[] is an integer array of length n. Consider this incomplete Java code below. Suppose that you substitute each loop fragment into the rectangle. What effect will it have on the elements in the array a[]?',
                    uri: 'http://i.imgur.com/ns8uRg4.png',
                    quizzes: []
                }
            }
        ],
        dataOfRelease: 1
    },
    {
        title: 'Basic programming concepts',
        id: 1,
        topic: {
            title: 'Introduction to Java',
            id: 1
        },
        content: [
            {
                type: Content.WRITTEN,
                data: {
                    markup: 'Java features: \n\n Widely used. \n Widely available. \n Continuously under development since early 1990s. \n Embraces full set of modern abstractions. \n Variety of automatic checks for mistakes in programs.'
                }
            },
            {
                type: Content.VIDEO,
                data: {
                    url: 'https://www.youtube.com/embed/Ap62QNMmFuI?list=PLrNmXMVD0XDR6-LB2D57F3Xhq9r16lvDx',
                    height: 145,
                    width: 260
                }
            },
            {
                type: Content.IMAGE,
                data: {
                    url: 'http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif',
                    height: 185,
                    width: 270
                }
            },
            {
                type: Content.WRITTEN,
                data: {
                    markup: 'This is more sample text.'
                }
            }
        ],
        quiz: [
            {
                id: 1,
                type: Quiz.STANDARD,
                data: {
                    question: 'Which of following is not a feature of Java?',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'Embraces a full set of modern abstractions'
                        },
                        {
                            id: 2,
                            text: 'Gives the programmer full control of memory'
                        },
                        {
                            id: 3,
                            text: 'Object Oriented'
                        },
                        {
                            id: 4,
                            text: 'Easy to learn'
                        },
                        {
                            id: 5,
                            text: 'Widely used'
                        }
                    ],
                    correctAnswer: 2
                }
            },
            {
                id: 3,
                type: Quiz.STANDARD,
                data: {
                    question: 'This is a sample quiz, option 3 is correct.',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'Option 1'
                        },
                        {
                            id: 2,
                            text: 'Option 2'
                        },
                        {
                            id: 3,
                            text: 'Option 3'
                        },
                        {
                            id: 4,
                            text: 'Option 4'
                        },
                        {
                            id: 5,
                            text: 'Option 5'
                        }
                    ],
                    correctAnswer: 3
                }
            }
        ],
        dataOfRelease: 12312515
    },
    {
        title: 'Program development',
        id: 2,
        topic: {
            title: 'Introduction to Java',
            id: 1
        },
        content: [
            {
                type: Content.WRITTEN,
                data: {
                    markup: 'A data type is a set of values and a set of operations on those values.'
                }
            },
            {
                type: Content.VIDEO,
                data: {
                    url: 'https://www.youtube.com/embed/WCYk-Ljq1Co?list=PLrNmXMVD0XDR6-LB2D57F3Xhq9r16lvDx',
                    height: 145,
                    width: 260
                }
            }
        ],
        quiz: [
            {
                id: 2,
                type: Quiz.MULTISELECT,
                data: {
                    question: 'Which of following are Java primitive data types?',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'char'
                        },
                        {
                            id: 2,
                            text: 'int'
                        },
                        {
                            id: 3,
                            text: 'double'
                        },
                        {
                            id: 4,
                            text: 'function'
                        },
                        {
                            id: 5,
                            text: 'boolean'
                        }
                    ],
                    correctAnswer: [1, 2, 3, 5],
                    explanation: "The eight primitive Java data types are: byte, short, int, long, float, double, boolean, and char."
                }
            }
        ],
        dataOfRelease: 12312515
    },
    {
        title: 'Built-in data types',
        id: 3,
        topic: {
            title: 'Introduction to Java',
            id: 1
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Type conversions',
        id: 3,
        topic: {
            title: 'Introduction to Java',
            id: 1
        },
        content: [],
        quiz: [
            {
                id: 3,
                type: Quiz.CODE,
                data: {
                    question: 'The following method prints "Hello, World!", find the line with the bug.',
                    possibleAnswers: [
                        'public static void function HelloWorld() {',
                        '          String text = "Hello, World!";',
                        '          System.out.println(text);',
                        '}'
                    ],
                    correctAnswer: 'public static void function HelloWorld() {'
                }
            }
        ],
        dataOfRelease: 12312515
    },
    {
        title: 'Conditionals: the if statement',
        id: 4,
        topic: {
            title: 'Conditionals & Loops',
            id: 2
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Loops: the while statement',
        id: 4,
        topic: {
            title: 'Conditionals & Loops',
            id: 2
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'An alternative: the for loop',
        id: 4,
        topic: {
            title: 'Conditionals & Loops',
            id: 2
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Nesting',
        id: 4,
        topic: {
            title: 'Conditionals & Loops',
            id: 2
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Debugging',
        id: 4,
        topic: {
            title: 'Conditionals & Loops',
            id: 2
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Basic concepts',
        id: 4,
        topic: {
            title: 'Arrays',
            id: 3
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Examples of array-processing code',
        id: 4,
        topic: {
            title: 'Arrays',
            id: 3
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Two-dimensional arrays',
        id: 4,
        topic: {
            title: 'Arrays',
            id: 3
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Standard input and output',
        id: 4,
        topic: {
            title: 'Input & Output',
            id: 4
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Standard drawing',
        id: 4,
        topic: {
            title: 'Input & Output',
            id: 4
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Fractal drawings',
        id: 4,
        topic: {
            title: 'Input & Output',
            id: 4
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Animation',
        id: 4,
        topic: {
            title: 'Input & Output',
            id: 4
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Basic concepts',
        id: 4,
        topic: {
            title: 'Functions & Libraries',
            id: 5
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Case Study: digital Audio',
        id: 4,
        topic: {
            title: 'Functions & Libraries',
            id: 5
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Application: Gaussian distribution',
        id: 4,
        topic: {
            title: 'Functions & Libraries',
            id: 5
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Modular programming and libraries',
        id: 4,
        topic: {
            title: 'Functions & Libraries',
            id: 5
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Foundations',
        id: 4,
        topic: {
            title: 'Recursion',
            id: 6
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'A classic example',
        id: 4,
        topic: {
            title: 'Recursion',
            id: 6
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Recursive graphics',
        id: 4,
        topic: {
            title: 'Recursion',
            id: 6
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Avoiding exponential waste',
        id: 4,
        topic: {
            title: 'Recursion',
            id: 6
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Dynamic programming',
        id: 4,
        topic: {
            title: 'Recursion',
            id: 6
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Overview',
        id: 4,
        topic: {
            title: 'A Computing Machine',
            id: 7
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Data types',
        id: 4,
        topic: {
            title: 'A Computing Machine',
            id: 7
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Instructions',
        id: 4,
        topic: {
            title: 'A Computing Machine',
            id: 7
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Operating the machine',
        id: 4,
        topic: {
            title: 'A Computing Machine',
            id: 7
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Machine-language programming',
        id: 4,
        topic: {
            title: 'A Computing Machine',
            id: 7
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Perspective',
        id: 4,
        topic: {
            title: 'von Neumann Machines',
            id: 8
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Note of caution',
        id: 4,
        topic: {
            title: 'von Neumann Machines',
            id: 8
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Practical implications',
        id: 4,
        topic: {
            title: 'von Neumann Machines',
            id: 8
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Simulation',
        id: 4,
        topic: {
            title: 'von Neumann Machines',
            id: 8
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Overview',
        id: 4,
        topic: {
            title: 'Abstract Data Types',
            id: 9
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Color',
        id: 4,
        topic: {
            title: 'Abstract Data Types',
            id: 9
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Image processing',
        id: 4,
        topic: {
            title: 'Abstract Data Types',
            id: 9
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'String processing',
        id: 4,
        topic: {
            title: 'Abstract Data Types',
            id: 9
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Overview',
        id: 4,
        topic: {
            title: 'Creating Data Types',
            id: 10
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Point charges',
        id: 4,
        topic: {
            title: 'Creating Data Types',
            id: 10
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Turtle graphics',
        id: 4,
        topic: {
            title: 'Creating Data Types',
            id: 10
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Complex numbers',
        id: 4,
        topic: {
            title: 'Creating Data Types',
            id: 10
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    }
];

export default mockedData;