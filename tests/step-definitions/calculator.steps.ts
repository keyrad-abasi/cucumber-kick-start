import expect from "expect";
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { Calculator } from "../../src/domain";

Given("اینکه عبارت ورودی {string} باشه", function (input: string) {
  this.expression = input;
});

When("که ماشین حساب شروع به اجرای عملیات کنه", function () {
  const calculator = new Calculator();
  try {
    this.result = calculator.execute(this.expression);
  } catch (error) {
    throw new Error("Operation execution failed!");
  }
});

Then(
  "نتیجه ی حاصل باید برابر با {string} باشه",
  function (expectedValue: string) {
    expect(this.result).toBe(expectedValue);
  }
);
