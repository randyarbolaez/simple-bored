let activity = document.getElementById('activity');

function randomActivity() {
  fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(res => {
      activity.innerHTML = res.activity.toUpperCase();
    });
}
