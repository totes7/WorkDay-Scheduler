document.addEventListener("DOMContentLoaded", function () {
  // Display date and time in header section
  function displayTime() {
    let currentDay = dayjs();

    $("#currentDay").text(currentDay.format("dddd, DD MMMM YYYY - HH:mm:ss"));
  }

  setInterval(displayTime, 1000);

  let date = new Date();
  let hour = date.getHours();
  let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  for (let i = 0; i < workingHours.length; i++) {
    let newRow = $("<div>");
    newRow.addClass("row");
    let hourDiv = $("<div>");
    hourDiv.addClass("col-1 col-xs-2 hour");
    hourDiv.text(`${workingHours[i]}:00`);
    let textDiv = $("<textarea>");
    textDiv.addClass("col-10 col-xs-8 description");
    let saveBtn = $("<div>");
    saveBtn.addClass("col-1 col-xs-2 btn saveBtn");
    let saveIcon = $("<i>");
    saveIcon.addClass("fas fa-save");
    saveIcon.attr("id", "save-icon");

    saveBtn.append(saveIcon);
    newRow.append(hourDiv, textDiv, saveBtn);

    if (workingHours[i] < hour) {
      textDiv.addClass("past");
    } else if (workingHours[i] > hour) {
      textDiv.addClass("future");
    } else {
      textDiv.addClass("present");
    }

    $(".container").append(newRow);
  }
});
