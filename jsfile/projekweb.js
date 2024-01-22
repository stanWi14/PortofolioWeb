var webitems = [
  ['Era Clean Indonesia','Web company profile for Era Clean Indonesia', 'Wix','eraweb.png','https://www.eracleanindo.com/',"Lix Computer Intern"],
  ['Exotique Audio Web', 'Web company profile for Exotique Audio', 'Wix','exoweb.png','https://www.exotiqueaudio.com/', "Lix Computer Intern"],
  ['FishFeeder Controll Web','Webpage for FishFeeder Admin Manages Device','ReactJS, Bootstrap, & Firestore','fmweb.png','https://fishfeedercontrollpage.netlify.app/','Personal Project']
]
let contentweb = '';
webitems.forEach(p => {
  contentweb += `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top pt-2" src="image/project/${p[3]}" alt="Card image cap" style="height: 200px; object-fit: cover;"> <!-- Set a fixed height, adjust as needed -->
      <div class="card-body">
        <h5 class="card-title">${p[0]}</h5>
        <p class="card-text">${p[1]}</p>
        <p class="card-text">Tech Stack: ${p[2]}</p>
        <p class="card-text">Position: ${p[5]}</p>
        <a href="${p[4]}" class="btn btn-primary">See web</a>
      </div>
    </div>
  `;
});
document.querySelector("#web").innerHTML = contentweb;