document.addEventListener("DOMContentLoaded", function () {
  // Display date and time in header section
  function displayTime() {
    let currentDay = dayjs();

    $("#currentDay").text(currentDay.format("dddd, DD MMMM YYYY - HH:mm:ss"));
  }

  setInterval(displayTime, 1000);

  // Dynamically create and append hours row elements

  let date = new Date();
  let hour = date.getHours();
  let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  for (let i = 0; i < workingHours.length; i++) {
    let newRow = $("<div>");
    newRow.addClass("row");
    newRow.attr("id", "h-" + workingHours[i]);
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

  // Save button
  $(".saveBtn").on("click", function () {
    let time = $(this).siblings(".hour").text();

    let text = $(this).siblings(".description").val();

    // save to local storage
    localStorage.setItem(time, text);
  });

  // Dispay items after page refresh
  function displayStoredItems() {
    for (let i = 0; i < workingHours.length; i++) {
      const hour = workingHours[i] + ":00";
      let storedItem = localStorage.getItem(hour);
      console.log(storedItem);
      if (storedItem) {
        $(`#h-${workingHours[i]}`).children('.description').text(storedItem);
      }
    }
  }

  displayStoredItems();
});
