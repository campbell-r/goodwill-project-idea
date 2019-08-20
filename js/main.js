var currentButton = -1;
// To move to local/session storage, change the array into a stored object and use functions to get/set the values.
var inputValues = [0,0,0,0,0,0,0,0,0,0,0,0];

function goToButtonView(btnNumber) {
  $("#mainview").css("visibility", "hidden");
  $("#btnview").css("visibility", "visible");
  $("#mainview").css("display", "none");
  $("#btnview").css("display", "block");
  $("#resultsview").css("display", "none");
  $("#resultsview").css("visibility", "hidden");

  currentButton = btnNumber;
  $("#buttonInput")[0].value = inputValues[currentButton];
}

function returnToMainView() {
  $("#mainview").css("visibility", "visible");
  $("#btnview").css("visibility", "hidden");
  $("#mainview").css("display", "block");
  $("#btnview").css("display", "none");
  $("#resultsview").css("display", "none");
  $("#resultsview").css("visibility", "hidden");
}

function updateCurrentValue() {
  let num = parseFloat($("#buttonInput")[0].value);

  if (num >= 0) {
  inputValues[currentButton] = num;
  }
}

function showResults() {
  $("#mainview").css("visibility", "hidden");
  $("#btnview").css("visibility", "hidden");
  $("#mainview").css("display", "none");
  $("#btnview").css("display", "none");
  $("#resultsview").css("display", "block");
  $("#resultsview").css("visibility", "visible");


  $("#resultText").text(JSON.stringify(inputValues));
}
