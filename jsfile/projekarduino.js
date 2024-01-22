var arduitems = [
  ['Smart Aquaponic Embedded System','Automated Fish feeder & balancing planting area humidity', 'Arduino','aquapro.png','https://drive.google.com/drive/folders/1ma-pB9GlF46Zjm4i6qZ9qae33SCtfpnB?usp=sharing','System Architect'],
  ['HIMTI Expo Bot', 'Hand Tracking Robot using arduino, servos, and python opencv', 'Arduino, Python OpenCV','expro.png','https://github.com/stanWi14/Hand_Following_Movement_Robot','Solo Project'],
  ['FishFeeder','Fish Feeding IoT Device that use Android App as it Interface','Arduino Uno, ESP32, Firebase, & pairing','devicefishfeeder.jpeg','','Project Manager & Device Pairing part dev'],
  ['Another Tinkercad Project', 'Other Arduino projects at my github repository :D ', 'Arduino & C++','ardupro.png','https://github.com/stanWi14','Solo Project']
]

let contentardu = '';
arduitems.forEach(p => {
  contentardu += `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top pt-2" src="image/project/${p[3]}" alt="Card image cap" style="height: 200px; object-fit: cover;"> <!-- Set a fixed height, adjust as needed -->
      <div class="card-body">
        <h5 class="card-title">${p[0]}</h5>
        <p class="card-text">${p[1]}</p>
        <p class="card-text">Tech Stack: ${p[2]}</p>
        <p class="card-text">Position: ${p[5]}</p>
        <a href="${p[4]}" class="btn btn-primary">See project</a>
      </div>
    </div>
  `;
});

document.querySelector("#arduino").innerHTML = contentardu;