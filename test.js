const testList = [
  {
    answer: "무야호",
    imageUrl: "assets/test1.jpg",
  },
  { answer: "아모르파티", imageUrl: "assets/test2.jpeg" },
  { answer: "던질까말까", imageUrl: "assets/test3.jpeg" },
  { answer: "깡", imageUrl: "assets/test4.png" },
  { answer: "4달라", imageUrl: "assets/test5.jpeg" },
  { answer: "호롤롤로", imageUrl: "assets/test6.jpeg" },
  { answer: "아안돼", imageUrl: "assets/test7.png" },
  { answer: "ppap", imageUrl: "assets/test8.jpeg" },
  { answer: "마포대교는무너졌냐", imageUrl: "assets/test9.jpg" },
  {
    answer: "이제는더이상물러날곳이없다",
    imageUrl: "assets/test10.jpeg",
  },
];

let currentQuestion = 0;
let score = 0;
let userResponses = [];

document
  .getElementById("answerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userAnswer = document
      .getElementById("userAnswer")
      .value.trim()
      .toLowerCase();
    if (userAnswer === testList[currentQuestion].answer) {
      score++;
    }
    userResponses.push({
      question: testList[currentQuestion].answer,
      userAnswer: userAnswer,
    });

    currentQuestion++;
    if (currentQuestion < testList.length) {
      displayQuestion();
    } else {
      displayResults();
    }
    document.getElementById("userAnswer").value = ""; // Reset input field
  });

function displayQuestion() {
  document.getElementById("questionNumber").textContent =
    "문제 " + (currentQuestion + 1);
  document.getElementById("memeImage").src = testList[currentQuestion].imageUrl;
}

function displayResults() {
  const main = document.querySelector("main");
  let resultHtml = `<h2>당신의 점수: ${score}/${testList.length}</h2>`;
  userResponses.forEach((response, index) => {
    resultHtml += `<p>문제 ${index + 1}: 정답은 '${
      response.question
    }', 당신의 대답은 '${response.userAnswer}'</p>`;
  });
  main.innerHTML = resultHtml;
}

// 초기 문제 표시
displayQuestion();
