var bnitems2 = [
    // Posisi, deskripsi tugas, nama acara 
    ['HRD Staff','In charge of helping HRD Manager, we make some plan about training event for BNCC activist & help for interviewing activist', 'HRD']
  ]
  let contentbn2 = '';
  bnitems2.forEach(p => {
    contentbn2 += `
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
  document.querySelector("#bncc2").innerHTML = contentbn2;
