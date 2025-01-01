// Callbacks

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script loaded with SRC:" + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with Src " + src);
    callback(new Error("Src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello! " + src);
}

function goodBye(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("GoodBye " + src);
}
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
  hello
);
