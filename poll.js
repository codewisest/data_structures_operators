'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        'What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++'
      )
    );
    console.log(this);
    if (userInput >= 0 && userInput <= this.answers.length) {
      this.answers[userInput]++;
    } else {
      console.log('invalid selection');
    }
    this.displayResult();
    return userInput;
  },

  displayResult(type) {
    type = this.answers;
    console.log(type);
  },
};

const pollButton = document.getElementById('poll');
pollButton.addEventListener('click', () => {
  poll.registerNewAnswer();
});

console.log(poll.answers);
