const chars = [, '   ', ' _ ', '| |', '|_|', '  |', ' _|', '|_ '];

const figures = [234, 155, 267, 266, 145, 276, 274, 235, 244, 245]
  .map(n => Array.from(String(n)).map(n => chars[Number(n)]));

const writeNumber = (number) => {
  const rows = { 0: '', 1: '', 2: '' };
  Array.from(String(number))
    .map(n => figures[n])
    .forEach(digit => digit.forEach((l, i) => rows[i] = rows[i] += l));
  return Object.values(rows).join('\n');
};

console.log(writeNumber(Deno.args[0]));