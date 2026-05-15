fetch("https://steep-wildflower-8b46.abobasas3018.workers.dev/")
  .then(r => r.json())
  .then(data => {
    document.getElementById("topbar").innerText =
      data.visits + " Visits :: free oldschool online deathmatch :: project status: INDEV";
  });
