import { generate, Options } from "cucumber-html-reporter";

const options: Options = {
  theme: "hierarchy",
  jsonFile: "tests/reports/cucumber-report.json",
  output: "tests/reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
};

generate(options);
