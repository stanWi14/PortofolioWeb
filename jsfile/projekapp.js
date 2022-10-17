var appitems = [
  ['TandaIn','Android apps for reserve seat in restaurant', 'Android Studio, Kotlin, & Firebase','tandain.png','https://github.com/stanWi14/TandaIn',"Frontend"]
]
let contentapp = '';
appitems.forEach(p => {
  contentapp += `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top pt-2" src="image/project/${p[3]}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${p[0]}</h5>
      <p class="card-text">${p[1]}</p>
      <p class="card-text">Tech Stack: ${p[2]}</p>
              <p class="card-text">Position: ${p[5]}</p>
      <a href="${p[4]}" class="btn btn-primary">See project</a>
    </div>
  </div>
  `
});
document.querySelector("#app").innerHTML = contentapp;