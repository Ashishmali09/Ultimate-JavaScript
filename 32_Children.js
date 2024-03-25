console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.childNodes[0] === document.body.firstChild);
console.log(
  document.body.childNodes[document.body.childNodes.length - 1] ===
    document.body.lastChild
);

const arr = Array.from(document.body.childNodes);
console.log(arr);
