let f = () => {
  try {
    let x = 0;
    // console.log(Program);
    console.log("Program ran successfully");
    return;
  } catch (error) {
    console.log("This is an error");
    console.log(c);
  } finally {
    // Write for final cleanups
    console.log("I am a good boy");
    // Close the file
    // Exit the loop
    // Write to the log file
  }
};
f();
console.log("End");
