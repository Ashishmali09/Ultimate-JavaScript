let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.tBodies[0].rows);

console.log(t.rows[1].cells);
console.log(t.rows[0].sectionRowIndex);
console.log(t.rows[1].rowIndex);
console.log(t.rows[1].cells[0].cellIndex);

console.log(typeof document);
console.log(typeof window);
