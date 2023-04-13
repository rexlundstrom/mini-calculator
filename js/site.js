const add = () => {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let sum = num1 + num2;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = sum;
};

const subtract = () => {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let difference = num1 - num2;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = difference;
};

const multiply = () => {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let product = num1 * num2;

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = product;
};

const divide = () => {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let resultsDiv = document.getElementById("results");

  if (num2 === 0) {
    resultsDiv.innerHTML = "Cannot divide by zero";
  } else {
    let quotient = num1 / num2;
    resultsDiv.innerHTML = quotient;
  }
};

// NUMBERS //

const one = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 1;
    document.getElementById("firstNumber").value = 1;
  } else {
    resultsDiv.innerHTML += 1;
    document.getElementById("firstNumber").value += 1;
  }

  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

};

const two = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 2;
  } else {
    resultsDiv.innerHTML += 2;
  }
};

const three = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 3;
  } else {
    resultsDiv.innerHTML += 3;
  }
};

const four = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 4;
  } else {
    resultsDiv.innerHTML += 4;
  }
};

const five = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 5;
  } else {
    resultsDiv.innerHTML += 5;
  }
};

const six = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 6;
  } else {
    resultsDiv.innerHTML += 6;
  }
};

const seven = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 7;
  } else {
    resultsDiv.innerHTML += 7;
  }
};

const eight = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 8;
  } else {
    resultsDiv.innerHTML += 8;
  }
};

const nine = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML == 0) {
    resultsDiv.innerHTML = 9;
  } else {
    resultsDiv.innerHTML += 9;
  }
};

const zero = () => {
  let resultsDiv = document.getElementById("results");
  if (resultsDiv.innerHTML != 0) {
    resultsDiv.innerHTML += 0;
  }
};

const clearAll = () => {
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = 0;
};

const sumAll = () => {
  let numStr = document.getElementById("numberSeries").value;
  let resultsDiv = document.getElementById("results");

  const numArr = numStr.split("");
  let output = 0;

  if (!numArr.length) {
    resultsDiv.innerHTML = `Enter numbers`;
  } else {
    numArr.forEach((el) => {
      let num = parseFloat(el);
      if (typeof num === "number") {
        output += num;
      }
    });

    resultsDiv.innerHTML = output;
  }
};

const multiplyAll = () => {
  let numStr = document.getElementById("numberSeries").value;
  let resultsDiv = document.getElementById("results");

  const numArr = numStr.split("");
  let output = 1;

  if (!numArr.length) {
    resultsDiv.innerHTML = `Enter numbers`;
  } else {
    numArr.forEach((el) => {
      let num = parseFloat(el);
      if (typeof num === "number") {
        output *= num;
      }
    });

    resultsDiv.innerHTML = output;
  }
};

const minimum = () => {
  let numStr = document.getElementById("numberSeries").value;
  let resultsDiv = document.getElementById("results");

  const numArr = numStr.split("");
  let smallest = numArr[0];

  if (!numArr.length) {
    resultsDiv.innerHTML = `Enter numbers`;
  } else {
    numArr.forEach((el) => {
      let num = parseFloat(el);
      if (typeof num === "number" && num < smallest) {
        smallest = num;
      }
    });

    resultsDiv.innerHTML = smallest;
  }
};

const maximum = () => {
  let numStr = document.getElementById("numberSeries").value;
  let resultsDiv = document.getElementById("results");

  const numArr = numStr.split("");
  let largest = numArr[0];

  if (!numArr.length) {
    resultsDiv.innerHTML = `Enter numbers`;
  } else {
    numArr.forEach((el) => {
      let num = parseFloat(el);
      if (typeof num === "number" && num > largest) {
        largest = num;
      }
    });

    resultsDiv.innerHTML = largest;
  }
};

const average = () => {
  let numStr = document.getElementById("numberSeries").value;
  let resultsDiv = document.getElementById("results");

  const numArr = numStr.split("");
  let total = 0;

  if (!numArr.length) {
    resultsDiv.innerHTML = `Enter numbers`;
  } else {
    numArr.forEach((el) => {
      let num = parseFloat(el);
      if (typeof num === "number") {
        total += num;
      }
    });
    let output = total / numArr.length;
    resultsDiv.innerHTML = output;
  }
};
