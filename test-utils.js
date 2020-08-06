const OUTCOMES = {
  FAIL: "FAIL",
  PASS: "PASS",
};

const test = (testName, result, expected) => {
  const outcome = result === expected ? OUTCOMES.PASS : OUTCOMES.FAIL;
  console.log(`${testName}: ${outcome}`);
};

exports.test = test;
