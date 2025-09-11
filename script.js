document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("lastUpdated");
  if (el) {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    el.innerHTML += formattedDate;
  }
});

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML =
    `${today.toDateString()} ${h}:${m}:${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}
