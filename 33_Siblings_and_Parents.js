console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode); // It will be anything.
console.log(a.parentElement); // It must be an element.
console.log(a.firstChild.nextSibling);
