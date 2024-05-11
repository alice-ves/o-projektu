const buttons = document.querySelectorAll('.heading-button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.container__text').forEach((container) => {
      container.classList.toggle('hidden');
    });
  });
});
