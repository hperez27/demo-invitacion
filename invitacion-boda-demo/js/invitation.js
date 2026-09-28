const weddingDate = new Date("2026-12-06T17:00:00").getTime();
function updateCountdown(){
  const distance = weddingDate - Date.now();
  const box = document.getElementById("countdown");
  if(distance <= 0){ box.innerHTML="<h2>¡Hoy es el gran día! 🤍</h2>"; return; }
  const days=Math.floor(distance/86400000);
  const hours=Math.floor((distance%86400000)/3600000);
  const minutes=Math.floor((distance%3600000)/60000);
  const seconds=Math.floor((distance%60000)/1000);
  document.getElementById("days").textContent=String(days).padStart(2,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("active");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
