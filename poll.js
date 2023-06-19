'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(`${this.question} \n${this.options.join('\n')}`)
    );
    if (userInput >= 0 && userInput <= this.answers.length) {
      this.answers[userInput]++;
    } else {
      console.log('invalid selection');
    }
    this.displayResult(this.answers);
    return userInput;
  },

  displayResult(type) {
    console.log(type);
  },
};

const pollButton = document.getElementById('poll');
pollButton.addEventListener('click', () => {
  poll.registerNewAnswer();
});

const testData = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResult(testData);
poll.displayResult(testData2);
