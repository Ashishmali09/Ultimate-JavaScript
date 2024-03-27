// Regular expressions(Regex) are patterns used to match character combinations in strings

const regex = /(Ash){2}/gi;
const text = "Ashash is a nice nice and awesome very nice guy";
console.log(text.replace(regex, "Ash"));
