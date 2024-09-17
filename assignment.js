
// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {
  const savings = income - expenses;
  const taxPercent = 0.2;
  const tax = savings * taxPercent;

  if (income <= 0 || expenses <= 0 || income < expenses) {
    return "Invalid Input";
  }

  return tax;
}



// Problem 02 : Notification Generator

function sendNotification(email) {
  const part = email.split("@");
  const username = part[0];
  const domainName = part[1];

  if (!email.includes('@')) {
      return "Invalid Email";
  }

  return `${username} sent you an email from ${domainName}`;
}




// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
  const digit = /\d/;
  const hasDigit = digit.test(name);

  if (typeof name !== 'string') {
    return "Invalid Input";
  }

  return hasDigit;
}




// Problem 04 : Calculate Admission Final Score

function calculateFinalScore(obj){
  const {name,testScore,schoolGrade,isFFamily} = obj;

  if (typeof obj !== 'object') {
      return "Invalid Input";
  }
  if (testScore>50 || schoolGrade>30 || typeof isFFamily!=='boolean'){
      return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily){
      finalScore += 20;
  }

  return finalScore >=80 ;
}



// Problem 05:  Predict Avarage Waiting Time

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  if (serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }

  let timeSpend = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    timeSpend += waitingTimes[i];
  }

  let avgTime = timeSpend / waitingTimes.length;
  let peopleLeft = serialNumber - waitingTimes.length - 1;
  let timeLeft = avgTime * peopleLeft;

  return timeLeft;
}




