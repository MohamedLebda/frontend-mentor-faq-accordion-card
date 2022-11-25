const questions = document.querySelectorAll(".question-head");
const box = document.querySelector(".box");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentElement.querySelector("p").classList.toggle("show");
    question.querySelector(".arrow").classList.toggle("rotate");
    question.querySelector("h2").classList.toggle("question-bold");

    for (let questionHead of questions) {
      if (
        questionHead.querySelector("h2").classList.contains("question-bold")
      ) {
        box.classList.add("box-move");
        break;
      } else {
        box.classList.remove("box-move");
      }
    }
  });
});
