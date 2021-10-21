# Code Challenges 12

Given any whole integer number, your task this week is simply to output the number to the console in the traditional LCD “calculator font”. You shouldn’t use any external libraries to achieve this.

## Example

Given the number 123456789, the expected output might look like this:

```
  _  _     _  _  _  _  _
| _| _||_||_ |_   ||_||_|
||_  _|  | _||_|  ||_| _| 
```

# Run

Using `deno`

```
deno run number.js <number>
```

e.g. `deno run number.js 123456789`

# Method

Each numeric symbol is 3x3 chars. For example the number 9:

```
  012
0  _    
1 |_|
2  _|
```

Interestingly, there are only 7 different rows that can be composed to create each symbol 0-9. These are:

`['   ', ' _ ', '| |', '|_|', '  |', ' _|', '|_ ']`

Thus each symbol can be defined as a combination of 3 of each of these rows.

This application is broken down into a few steps.

1. Define the rows and map them to three-line symbols
1. Construct an object that holds a 3-line grid of these symbols (in JS it's easy to use a dictionary for this)
1. Concatenate these rows with a newline separator and write to `console.log`
