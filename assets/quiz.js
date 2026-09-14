document.querySelectorAll("[data-quiz]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = form.querySelector("[data-feedback]");
    const choice = form.querySelector('input[type="radio"]:checked');
    if (!choice) {
      feedback.textContent = "先选择一个答案，再核对。";
      feedback.removeAttribute("data-result");
      return;
    }
    const correct = choice.value === form.dataset.answer;
    feedback.dataset.result = correct ? "correct" : "retry";
    feedback.textContent = correct ? form.dataset.correct : form.dataset.retry;
  });
});
