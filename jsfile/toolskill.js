var toolitems = [
    ['MIT App Inventor',''],
    ['Flowgorithm',''],
    ['Bootstrap','https://drive.google.com/drive/folders/1b4FR6aMIoPlnPnEHzIOa2PorBLPZyfQF?usp=sharing'],
    ['Android Studio','https://drive.google.com/drive/folders/1LdhXMNsmFEbBoDUt2WbqbspSuqbHtAJ8?usp=sharing'],
    ['Firebase',''],
    ['Cisco',''],
    ['WIX','Experience.html']
  ]
  let contenttool= '';
  toolitems.forEach(p => {
    contenttool += `
    <a href="${p[1]}" class="btn btn-warning mt-2 mb-2" role="button">${p[0]}</a>
    `
  });
  document.querySelector("#Tool").innerHTML = contenttool;