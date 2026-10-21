console.log("Actually working");
// Local Analytics Visit Counter 
document.addEventListener("DOMContentLoaded", () => {
  try {
    // 1. Check if our 'visit_count' variable already exists in browser memory
    let totalVisits = localStorage.getItem("my_mock_site_visits");

    if (totalVisits === null) {
      // First time loading the page? Initialize it at 1
      totalVisits = 1;
    } else {
      // If it exists, convert it to a number and add +1
      totalVisits = parseInt(totalVisits) + 1;
    }

    // 2. Save the updated count back into browser memory
    localStorage.setItem("my_mock_site_visits", totalVisits);

    // 3. Print the results safely to the console
    console.log(`🚀 Local Analytics Active!`);
    console.log(`📊 This page has been visited ${totalVisits} times on this machine.`);

  } catch (error) {
    console.error("Local tracking unavailable:", error);
  }
});
