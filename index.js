function loadHTML(divId, htmlFile) {
  const includedDiv = document.getElementById(divId);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      includedDiv.innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "includes/" + htmlFile, true);
  xhr.send();
}

loadHTML("navigation", "nav.html");
loadHTML("hero", "hero.html");
loadHTML("oferta", "oferta.html");
loadHTML("ofirmie", "ofirmie.html");
loadHTML("realizacje", "realizacje.html");
loadHTML("instagram", "instagram.html");
loadHTML("footer", "footer.html");
