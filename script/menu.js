function smallMenu() {
  const x = document.getElementById("myHeader");
  if (x.className === "page-header") {
    x.className += " responsive";
  } else {
    x.className = "page-header";
  }
}
