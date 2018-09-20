$(document).ready(function () {
  var counter = 1;

  $("#addButton").click(function () {
    var newButtonDiv = $(document.createElement("div")).attr(
      "id",
      "NewButton" + counter
    );

    let divTag = newButtonDiv.html(
      " </label>" +
      '<input type="button" name="' +
      counter +
      '" id="button' +
      counter +
      '" value="' +
      counter +
      '" style="background-color: blue; color: white' +
      '" >'
    );
    if (counter % 2 == 0) {
      let v = divTag[0];
      v.getElementsByTagName("input")[0].style.backgroundColor = "black";
    }
    if (counter % 5 == 0) {
      let c = divTag[0];
      c.getElementsByTagName("input")[0].style.borderTop = "5px solid Orange";
    }

    newButtonDiv.appendTo("#ButtonsGroup");
    document.getElementById("count").innerHTML = +counter;
    counter++;
  });

  $("#removeButton").click(function () {
    if (counter == 2) {
      $("#NewButton1").remove();
      document.getElementById("count").innerHTML = "No Boxes";
      counter = 1;
      return;
    } else {
      if (counter > 2) {
        counter--;
        $("#NewButton" + counter).remove();
        document.getElementById("count").innerHTML = counter - 1;
      }

    }
    return false;
  });

});
