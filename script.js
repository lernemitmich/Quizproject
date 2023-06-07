// Define quiz questions and answers
const quizData = [
    {
      question: "1. What are algorithms?",
      options: ["The results of computer programs", "The steps to accomplish a task",
       "The output of machine learning models", "The input to a computer program"],
      answer: 1,
    },
    {
      question: "2. What does AI stand for?",
      options: ["Automated Intelligence", "Artificial Information", 
      "Algorithmic Integration", "Artificial Intelligence"],
      answer: 3,


    },

    {
        question:  "3. What is AI?",
      options: ["AI are systems designed to mimic human intellegence and capabilities",
       "A technique used in studies the nature of knowledge", 
      "It is used to confuse the programmer",
       " A type of computer hardware that specializes in performing complex calculations"],
      answer: 0,
      },
    {
      question: " 4. What is the Turing test?",
      options: ["A test to determine if a machine can think like a human", 
      "A test to evaluate a machine's physical strength", 
      "A test to measure a machine's ability to perform mathematical calculations",
       "A test to assess a machine's ability to recognize patterns in data"],
      answer: 0,

      },

      {
        question: "5. Who was the first to coin the term 'artificial intelligence' ?",
        options: ["John McCarthy,1956.", 
        "Alan Turing in 1950", 
        "Tim Berners-Lee in 1989 ",
         "Eliza in 1966"],
        answer: 0,
  
        },

    {
        question: "6. The first chatbot, known as ELIZA, was created by whom ?",
        options: ["John McCarthy,an American computer scientist.", 
        "Alan Turing Britishcomputer scientist", 
        "Tim Berners-Lee British computer scientist  ",
         "Joseph Weizenbaum, a German-American computer scientist"],
            answer: 3,
      
        },

    {
        question: "7. Who is considered to be the creator of the first robot??",
        options: ["Alan Turing", 
        " George Devol", 
        "Joseph Weizenbaum",
        "Tim Berners-Leet"],
        answer: 1,
          
      },

      {
        question: " 8. Who is the developer of the humanoid robot Sophia?",
        options: ["Joseph Weizenbaum", 
        " George Devol", 
        "Hanson Robotics",
        "Tim Berners-Leet"],
        answer: 2,
          
      },

      {
        question: " 9.Which one of these are AI?",
        options: ["Vertual Asssistants", 
        " Streaming services", 
        "smart vaccums",
        "All of the above"],
        answer: 3,
          
      },

      {
        question: " 10. What does GPT stand for in ChatGPT?",
        options: [" General Purpose Transformer", 
        " Generative Pre-trained Transformer", 
        "Graph Processing Toolkit",
        "Global Positioning Technology"],
        answer: 1,
          
      },
    // Add  questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load the current question. 
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
  
    // Clear options
    optionsElement.innerHTML = "";
  
    // Add options
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("label");
      optionElement.innerHTML = `
        <input type="radio" name="answer" value="${index}">
        ${option}
      `;
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const answer = Number(selectedOption.value);
      if (answer === quizData[currentQuestion].answer) {
        score++;
        document.getElementById("feedback").innerText = "Correct answer!";
      } else {
        document.getElementById("feedback").innerText = "Wrong answer!";
      }
      // Disable options after answering
      const options = document.querySelectorAll('input[name="answer"]');
      options.forEach((option) => {
        option.disabled = true;
      });
    }
  }
  
  
  // Function to move to the next question
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      selectedOption.checked = false;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      document.getElementById("feedback").innerText = "";
    } else {
      // Display final score
      document.getElementById("question").innerText = `You scored ${score } out of ${quizData.length }.`;
      document.getElementById("options").innerHTML = "";
      document.getElementById("feedback").innerText = "";
      document.getElementsByTagName("button")[0].style.display = "none";
      document.getElementsByTagName("button")[1].style.display = "none";
    }
  }
  
  
  // Initial load
  loadQuestion();
  