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
