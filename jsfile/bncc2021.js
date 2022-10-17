var bnitems1 = [
    // Posisi, deskripsi tugas, nama acara 
    ['Game Dev Activist','In charge of making PowerPoint for BNCC Learning and Training Game Development Class', 'LnT Class'],
    ['Techbinar Treasurer','In charge of making financial reports for every BNCC Techbinars monthly event', 'Techbinar']
  ]
  let contentbn1 = '';
  bnitems1.forEach(p => {
    contentbn1 += `
      <div id="keyBoard" class="col-md-4 mt-2">
        <div class="card mb-0" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-0">
              <div class="card-body">
                <h5 class="card-title">${p[0]}</h5>
                <p class="card-text"></p>
                <p class="card-text">Event: ${p[2]}</p>
                <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Job Description" data-content="${p[1]}">Job Description</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  });
  document.querySelector("#bncc1").innerHTML = contentbn1;
