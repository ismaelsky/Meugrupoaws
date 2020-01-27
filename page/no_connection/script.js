document.addEventListener("online", onOnline, false);

function onOnline() {
  window.location.replace("../t_home/index.html");
}

function reco(){
  window.location.replace("../no_connection/index.html");
}

document.getElementById("reconectar").addEventListener("click", reco);
