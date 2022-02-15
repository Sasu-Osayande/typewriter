const sentence = "hello there from lighthouse labs";
const newLine = "\n";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}`)
    if (char === sentence.length - 1) {
      process.stdout.write("\n")
    }
  }, delay += 50)
};