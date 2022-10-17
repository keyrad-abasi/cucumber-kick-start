Feature: Addition

    Scenario Outline: Add two numbers
        Given the input "<input>"
        When the calculator is run
        Then the output should be "<output>"

        Examples:
            | input  | output |
            | 2+0    | 2      |
            | 2+(-2) | 0      |
            | 2+3    | 5      |
            | 3+2    | 5      |
            | 99+1   | 100    |
