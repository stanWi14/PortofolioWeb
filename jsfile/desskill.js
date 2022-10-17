var desitems = [
    ['Adobe Photoshop','https://drive.google.com/drive/folders/1mShdAw5OXiy-9kcDU4gC0lFO3aVqUcvJ?usp=sharing'],
    ['Adobe Premier Pro',''],
    ['Figma','https://drive.google.com/drive/folders/1xl9OQZPui4886HzYUIFQkgw55En7UXW2?usp=sharing'],
    ['Paint',''],
    ['diagrams.net',''],
    ['SketchUp','']
  ]
  let contentdes = '';
  desitems.forEach(p => {
    contentdes += `
    <a href="${p[1]}" class="btn btn-warning mt-2 mb-2" role="button">${p[0]}</a>
    `
  });
  document.querySelector("#Des").innerHTML = contentdes;