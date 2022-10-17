import expect from "expect";
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { Calculator } from "../../src/domain";

Given("the input {string}", function (input: string) {
  this.expression = input;
});

When("the calculator is run", function () {
  const calculator = new Calculator();
  try {
    this.result = calculator.execute(this.expression);
  } catch (error) {
    throw new Error("Operation execution failed!");
  }
});

Then("the output should be {string}", function (expectedValue: string) {
  expect(this.result).toBe(expectedValue);
});
