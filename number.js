/**
 * Characters are composed of 3 lines of text
 * Each line is one of 7 patterns
 */
const chars = [, '   ', ' _ ', '| |', '|_|', '  |', ' _|', '|_ '];
/**
 * Our 10 different figures are comprised of 3 different 'chars' or lines of text
 */
const figures = [234, 155, 267, 266, 145, 276, 274, 235, 244, 245]
  .map(n => n.toString().split('').map(n => chars[Number(n)]));

/**
 * Calculates each line of chars from the given numbers
 * Then logs it to the console as a 3-line string
 * @param number digit
 */
const writeNumber = (number) => {
  const rows = { 0: '', 1: '', 2: '' };
  number.toString()
    .split('')
    .map(n => figures[n])
    // pivot!
    .forEach(digit =>
      digit.forEach((line, rowIndex) => rows[rowIndex] = rows[rowIndex] += line)
    );
  console.log(Object.values(rows).join('\n'));
};

// output
writeNumber(Deno.args[0]);