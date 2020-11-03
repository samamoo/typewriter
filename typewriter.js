const sentence = "Hello! This is you from the future.";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    // if (char === sentence[sentence.length-1]) {
    //   console.log("\n")
    // }
  }, delay);
  delay += 50;
}
setTimeout(() => {
  console.log("\t"); 
}, delay);