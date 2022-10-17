var langitems = [
    ['C','https://drive.google.com/drive/folders/1OXHLtM-e_tvQMIyQEsSTuPE4Mfd9YdOW?usp=sharing'],
    ['Java','https://drive.google.com/drive/folders/10w9DkWUhxjw341eWy9deu6vSvU01sPXU?usp=sharing'],
    ['Python 3','https://drive.google.com/drive/folders/1IbmNyjIKUy5HA7vkIm0B1704VkY3HzMV?usp=sharing'],
    ['Kotlin','https://drive.google.com/drive/folders/1zcfBoUnDJ3t6EzReQjAvwEvOLLBiq3A_?usp=sharing'],
    ['HTML','https://drive.google.com/drive/folders/1UPMqNOla5l9XSAdeMRn1CEvHGrRqG-wA?usp=sharing'],
    ['CSS','https://drive.google.com/drive/folders/1UPMqNOla5l9XSAdeMRn1CEvHGrRqG-wA?usp=sharing'],
    ['Javascript',''],
    ['Visual Basic',''],
    ['SQL','']
  ]
  let contentlang= '';
  langitems.forEach(p => {
    contentlang += `
    <a href="${p[1]}" class="btn btn-warning mt-2 mb-2" role="button">${p[0]}</a>
    `
  });
  document.querySelector("#Lang").innerHTML = contentlang;