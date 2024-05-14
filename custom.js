function goBack() {
  window.history.back();
}
// Carrer Form
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the fresher button
  document.getElementById("fresherBtn").addEventListener("click", function () {
    // Redirect to the page for fresher
    window.location.href = "fresher.html";
  });

  // Event listener for the experienced button
  document
    .getElementById("experiencedBtn")
    .addEventListener("click", function () {
      // Redirect to the page for experienced
      window.location.href = "pro.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
  // Check if the close button exists before adding the event listener
  var closeButton = document.querySelector(".close-popup");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      // Hide the popup
      document.getElementById("popup").style.display = "none";
    });
  } else {
    console.error("Close button not found!");
  }
});
function calculateTotalTime(index) {
  var startDate = new Date(
    document.getElementsByName("Start_Date_" + index)[0].value
  );
  var endDate = new Date(
    document.getElementsByName("End_Date_" + index)[0].value
  );

  if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
    var diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var years = Math.floor(diffDays / 365);
    var months = Math.floor((diffDays % 365) / 30);
    var days = diffDays % 30;
    var totalTime = "";
    if (years > 0) {
      totalTime += years + " years ";
    }
    if (months > 0) {
      totalTime += months + " months ";
    }
    if (days > 0) {
      totalTime += days + " days";
    }
    document.getElementsByName("Total_Time_" + index)[0].value =
      totalTime.trim();
  } else {
    document.getElementsByName("Total_Time_" + index)[0].value = "";
  }
}
