document.addEventListener("DOMContentLoaded", function () {
  // Display date and time in header section
  function displayTime() {
    let currentDay = dayjs();

    $("#currentDay").text(currentDay.format("dddd, DD MMMM YYYY - HH:mm:ss"));
  }

  setInterval(displayTime, 1000);

  let date = new Date();
  let hour = date.getHours();
  let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (let i = 0; i < workingHours.length; i++) {
    let newRow = $("<div>");
    newRow.addClass("row");
    newRow.innerHTML = `<div class="col-1 col-xs-2 hour">${workingHours[i]}</div>
    <textarea class="col-10 col-xs-8 description"></textarea>
    <div class="col-1 col-xs-2 btn saveBtn"><i id="save-icon" class='fas fa-save'></i></div>`;

    if (workingHours[i] < hour) {
      newRow.addClass("past");
    } else if (workingHours[i] > hour) {
      newRow.addClass("future");
    } else {
      newRow.addClass("present");
    }

    // $('.container').append(newRow);
  }
});
