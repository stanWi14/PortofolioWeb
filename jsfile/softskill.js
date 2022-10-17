var softitems = [
    ['Public Speaking',''],
    ['Lead Meeting',''],
    ['MC',''],
    ['Teaching',''],
    ['Teamwork',''],
    ['Initiative','']
  ]
  let contentsoft = '';
  softitems.forEach(p => {
    contentsoft += `
    <a href="${p[1]}" class="btn btn-warning mt-2 mb-2" role="button">${p[0]}</a>
    `
  });
  document.querySelector("#Soft").innerHTML = contentsoft;