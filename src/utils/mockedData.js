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
                    question: 'We can compare a variable of type int with a boolean variable.',
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
                    question: 'The following program should add all the numbers in an int array and print it. Find the bug.',
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
                    quizzes: [
                        {
                            id: 11,
                            type: Quiz.STANDARD,
                            data: {
                                question: 'for (int i = 0; i < n; i++)',
                                possibleAnswers: [
                                    {
                                        id: 1,
                                        text: 'puts elements in reverse order'
                                    },
                                    {
                                        id: 2,
                                        text: 'puts elements in reverse order when n is even'
                                    },
                                    {
                                        id: 3,
                                        text: 'puts elements in reverse order when n is odd'
                                    },
                                    {
                                        id: 4,
                                        text: 'keeps elements in original order'
                                    },
                                    {
                                        id: 5,
                                        text: 'infinite loop'
                                    },
                                    {
                                        id: 6,
                                        text: 'compile-time error'
                                    },
                                    {
                                        id: 7,
                                        text: 'run-time error'
                                    }
                                ],
                                correctAnswer: 4
                            }
                        },
                        {
                            id: 12,
                            type: Quiz.STANDARD,
                            data: {
                                question: 'for (int i = 0; i < n; i++);',
                                possibleAnswers: [
                                    {
                                        id: 1,
                                        text: 'puts elements in reverse order'
                                    },
                                    {
                                        id: 2,
                                        text: 'puts elements in reverse order when n is even'
                                    },
                                    {
                                        id: 3,
                                        text: 'puts elements in reverse order when n is odd'
                                    },
                                    {
                                        id: 4,
                                        text: 'keeps elements in original order'
                                    },
                                    {
                                        id: 5,
                                        text: 'infinite loop'
                                    },
                                    {
                                        id: 6,
                                        text: 'compile-time error'
                                    },
                                    {
                                        id: 7,
                                        text: 'run-time error'
                                    }
                                ],
                                correctAnswer: 6
                            }
                        },
                        {
                            id: 13,
                            type: Quiz.STANDARD,
                            data: {
                                question: 'for (int i = 0; i <= n; i++)',
                                possibleAnswers: [
                                    {
                                        id: 1,
                                        text: 'puts elements in reverse order'
                                    },
                                    {
                                        id: 2,
                                        text: 'puts elements in reverse order when n is even'
                                    },
                                    {
                                        id: 3,
                                        text: 'puts elements in reverse order when n is odd'
                                    },
                                    {
                                        id: 4,
                                        text: 'keeps elements in original order'
                                    },
                                    {
                                        id: 5,
                                        text: 'infinite loop'
                                    },
                                    {
                                        id: 6,
                                        text: 'compile-time error'
                                    },
                                    {
                                        id: 7,
                                        text: 'run-time error'
                                    }
                                ],
                                correctAnswer: 7
                            }
                        },
                        {
                            id: 14,
                            type: Quiz.STANDARD,
                            data: {
                                question: 'for (int i = 0; i < n/2; i++)',
                                possibleAnswers: [
                                    {
                                        id: 1,
                                        text: 'puts elements in reverse order'
                                    },
                                    {
                                        id: 2,
                                        text: 'puts elements in reverse order when n is even'
                                    },
                                    {
                                        id: 3,
                                        text: 'puts elements in reverse order when n is odd'
                                    },
                                    {
                                        id: 4,
                                        text: 'keeps elements in original order'
                                    },
                                    {
                                        id: 5,
                                        text: 'infinite loop'
                                    },
                                    {
                                        id: 6,
                                        text: 'compile-time error'
                                    },
                                    {
                                        id: 7,
                                        text: 'run-time error'
                                    }
                                ],
                                correctAnswer: 1
                            }
                        },
                        {
                            id: 15,
                            type: Quiz.STANDARD,
                            data: {
                                question: 'for (int i = 0; i <=  n/2; i++)',
                                possibleAnswers: [
                                    {
                                        id: 1,
                                        text: 'puts elements in reverse order'
                                    },
                                    {
                                        id: 2,
                                        text: 'puts elements in reverse order when n is even'
                                    },
                                    {
                                        id: 3,
                                        text: 'puts elements in reverse order when n is odd'
                                    },
                                    {
                                        id: 4,
                                        text: 'keeps elements in original order'
                                    },
                                    {
                                        id: 5,
                                        text: 'infinite loop'
                                    },
                                    {
                                        id: 6,
                                        text: 'compile-time error'
                                    },
                                    {
                                        id: 7,
                                        text: 'run-time error'
                                    }
                                ],
                                correctAnswer: 3
                            }
                        }
                    ]
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
    },
    {
        title: 'The challenge',
        id: 4,
        topic: {
            title: 'Performance',
            id: 11
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Empirical analysis',
        id: 4,
        topic: {
            title: 'Performance',
            id: 11
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Mathematical models',
        id: 4,
        topic: {
            title: 'Performance',
            id: 11
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Doubling method',
        id: 4,
        topic: {
            title: 'Performance',
            id: 11
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Familiar examples',
        id: 4,
        topic: {
            title: 'Performance',
            id: 11
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'A typical client',
        id: 4,
        topic: {
            title: 'Searching and Sorting',
            id: 12
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Binary search',
        id: 4,
        topic: {
            title: 'Searching and Sorting',
            id: 12
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Insertion sort',
        id: 4,
        topic: {
            title: 'Searching and Sorting',
            id: 12
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Mergesort',
        id: 4,
        topic: {
            title: 'Searching and Sorting',
            id: 12
        },
        content: [
            {
                type: Content.WRITTEN,
                data: {
                    markup: 'Mergesort: \n\n Divide array into two halves. \n Recursively sort each half. \n Merge two halves to make sorted whole. \n'
                }
            },
            {
                type: Content.VIDEO,
                data: {
                    url: 'https://www.youtube.com/embed/b5E2s3JFkaI?list=PLrNmXMVD0XDTZei01cklYIuL6lcMls01b',
                    height: 145,
                    width: 260
                }
            },
            {
                type: Content.IMAGE,
                data: {
                    url: 'http://i.imgur.com/ERuLPsK.png',
                    height: 185,
                    width: 270,
                    text: 'Diagram of mergesort'
                }
            },
            {
                type: Content.IMAGE,
                data: {
                    url: 'http://i.imgur.com/onFRTQZ.png',
                    height: 185,
                    width: 270,
                    text: 'Java implementation'
                }
            }
        ],
        quiz: [
            {
                id: 1,
                type: Quiz.STANDARD,
                data: {
                    question: 'Mergesort was invented by...',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'Alan Turing'
                        },
                        {
                            id: 2,
                            text: 'John von Neumann'
                        },
                        {
                            id: 3,
                            text: 'Tony Hoare'
                        },
                        {
                            id: 4,
                            text: 'Donald Knuth'
                        },
                        {
                            id: 5,
                            text: 'Robert Sedgewick'
                        }
                    ],
                    correctAnswer: 2
                }
            },
            {
                id: 1,
                type: Quiz.MULTISELECT,
                data: {
                    question: 'Select the following that are properties of mergesort',
                    possibleAnswers: [
                        {
                            id: 1,
                            text: 'in place sorting'
                        },
                        {
                            id: 2,
                            text: 'faster time complexity than selection sort'
                        },
                        {
                            id: 3,
                            text: 'linear time guarantee'
                        },
                        {
                            id: 4,
                            text: 'requires an auxiliary array'
                        },
                        {
                            id: 5,
                            text: 'stable sort'
                        }
                    ],
                    correctAnswer: [1, 2, 4, 5]
                }
            }
        ],
        dataOfRelease: 12312515
    },
    {
        title: 'APIs',
        id: 4,
        topic: {
            title: 'Stacks and Queues',
            id: 13
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Clients',
        id: 4,
        topic: {
            title: 'Stacks and Queues',
            id: 13
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Strawman implementation',
        id: 4,
        topic: {
            title: 'Stacks and Queues',
            id: 13
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Linked lists',
        id: 4,
        topic: {
            title: 'Stacks and Queues',
            id: 13
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Implementations',
        id: 4,
        topic: {
            title: 'Stacks and Queues',
            id: 13
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'APIs and clients',
        id: 4,
        topic: {
            title: 'Symbol Tables',
            id: 14
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'A design challenge',
        id: 4,
        topic: {
            title: 'Symbol Tables',
            id: 14
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Binary search trees',
        id: 4,
        topic: {
            title: 'Symbol Tables',
            id: 14
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Implementations',
        id: 4,
        topic: {
            title: 'Symbol Tables',
            id: 14
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Analysis',
        id: 4,
        topic: {
            title: 'Symbol Tables',
            id: 14
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Overview',
        id: 4,
        topic: {
            title: 'Intro to Theoretical CS',
            id: 15
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Regular expessions',
        id: 4,
        topic: {
            title: 'Intro to Theoretical CS',
            id: 15
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'DFAs',
        id: 4,
        topic: {
            title: 'Intro to Theoretical CS',
            id: 15
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Applications',
        id: 4,
        topic: {
            title: 'Intro to Theoretical CS',
            id: 15
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Limitations',
        id: 4,
        topic: {
            title: 'Intro to Theoretical CS',
            id: 15
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Context',
        id: 4,
        topic: {
            title: 'Turing Machines',
            id: 16
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'A simple model of computation',
        id: 4,
        topic: {
            title: 'Turing Machines',
            id: 16
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Universality',
        id: 4,
        topic: {
            title: 'Turing Machines',
            id: 16
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Computability',
        id: 4,
        topic: {
            title: 'Turing Machines',
            id: 16
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Implications',
        id: 4,
        topic: {
            title: 'Turing Machines',
            id: 16
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Reasonable questions',
        id: 4,
        topic: {
            title: 'Intractability',
            id: 17
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'P and NP',
        id: 4,
        topic: {
            title: 'Intractability',
            id: 17
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Poly-time reductions',
        id: 4,
        topic: {
            title: 'Intractability',
            id: 17
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'NP-completeness',
        id: 4,
        topic: {
            title: 'Intractability',
            id: 17
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Living with intractability',
        id: 4,
        topic: {
            title: 'Intractability',
            id: 17
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Building blocks',
        id: 4,
        topic: {
            title: 'Combinational Circuits',
            id: 18
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Boolean algebra',
        id: 4,
        topic: {
            title: 'Combinational Circuits',
            id: 18
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Digital circuits',
        id: 4,
        topic: {
            title: 'Combinational Circuits',
            id: 18
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Adder circuit',
        id: 4,
        topic: {
            title: 'Combinational Circuits',
            id: 18
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Arithmetic/logic unit',
        id: 4,
        topic: {
            title: 'Combinational Circuits',
            id: 18
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Overview',
        id: 4,
        topic: {
            title: 'Central Processing Unit',
            id: 19
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Bits, registers, and memory',
        id: 4,
        topic: {
            title: 'Central Processing Unit',
            id: 19
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Program counter',
        id: 4,
        topic: {
            title: 'Central Processing Unit',
            id: 19
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Components, connections, and control',
        id: 4,
        topic: {
            title: 'Central Processing Unit',
            id: 19
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Popular languages',
        id: 4,
        topic: {
            title: 'Programming Languages',
            id: 20
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Java in context',
        id: 4,
        topic: {
            title: 'Programming Languages',
            id: 20
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Object-oriented programming',
        id: 4,
        topic: {
            title: 'Programming Languages',
            id: 20
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Type checking',
        id: 4,
        topic: {
            title: 'Programming Languages',
            id: 20
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    },
    {
        title: 'Functional programming',
        id: 4,
        topic: {
            title: 'Programming Languages',
            id: 20
        },
        content: [],
        quiz: [],
        dataOfRelease: 12312515
    }
];

export default mockedData;