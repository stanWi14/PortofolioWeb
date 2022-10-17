var libitems = [
    ['OpenCV','https://drive.google.com/drive/folders/1Yct-CrncGbZCTCCBuKJlFRVYO6P9dwcD?usp=sharing'],
    ['Arduino','https://drive.google.com/drive/folders/1rPL7m190lcVORM0AorXeKsQv8e5AP_X-?usp=sharing'],
    ['ESP8266','https://drive.google.com/drive/folders/1s2-V2-ZUSP8zkbNjQf90-BvJr247MnTt?usp=sharing']
  ]
  let contentlib= '';
  libitems.forEach(p => {
    contentlib += `
    <a href="${p[1]}" class="btn btn-warning mt-2 mb-2" role="button">${p[0]}</a>
    `
  });
  document.querySelector("#Lib").innerHTML = contentlib;