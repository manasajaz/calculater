function cal(val) {
  var inp = document.getElementById("inp");
  inp.value += val;
}

function rslt() {
  inp.value = eval(inp.value);
}

function clr() {
  inp.value = "";
}

function Delete() {
  inp.value = inp.value.toString().slice(0, -1);
}

function sq() {
  inp.value = inp.value * inp.value;
}
