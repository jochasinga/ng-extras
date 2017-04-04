var app = angular.module("extras", []);
var slug = function () {
  return (input) => {
    var delim, chars;
    // Accept config object
    if (typeof input === "object") {
      if (input["camelCase"]) {
        chars = input.data.split("");
        for (let i in data) {
          if (a[i].match(/[A-Z]/)) {
            a[i] = "-" + a[i];
          }
        }
        return chars.join("").toLowerCase();
      } 
      delim = input["delimiter"] ? opt["delimiter"] : " ";
      chars = input.data.split(delim);
    }
    // Accept string
    else if (typeof input === "string") {
      // Default to " " as delimiter
      chars = input.split(" ");
      return chars.join("-").toLowerCase();
    }
  }
}

app.filter("sluggify", slug);

export {app as extras};


