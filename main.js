$(document).ready(function() {
  var counter = 1;

  $("#addButton").click(function() {
    var newButtonDiv = $(document.createElement("div")).attr(
      "id",
      "NewButton" + counter
    );

    newButtonDiv.html(
      " </label>" +
        '<input type="button" name="' +
        counter +
        '" id="button' +
        counter +
        '" value="' +
        counter +
        '" >'
    );

    newButtonDiv.appendTo("#ButtonsGroup");
    document.getElementById("count").innerHTML = "Counter = " + counter;
    counter++;
  });

  $("#removeButton").click(function() {
    if (counter == 1) {
      alert("No Buttons left to remove!");
      return false;
    }
    counter--;
    $("#NewButton" + counter).remove();
    var delCount = counter - 1;
    document.getElementById("count").innerHTML = "Counter = " + delCount;
  });

  $("#getButtonValue").click(function() {
    var msg = "";
    for (i = 1; i < counter; i++) {
      msg += "\n Textbox #" + i + " : " + $("#textbox" + i).val();
    }
    alert(msg);
  });
});
