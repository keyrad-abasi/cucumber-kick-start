export class Calculator {
  execute(expression: string): string {
    return eval(expression).toString();
  }
}
