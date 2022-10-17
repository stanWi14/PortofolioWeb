var himitems2 = [
    // Posisi, deskripsi tugas, nama acara 
    ['President of HIMTI Bandung 2022/2023','In charge of leading HIMTI Bandung in 2022 to 2023. Our goal this year is to develop members of Himti Bandung in terms of IT insight and can provide a comfortable situation to establish a sense of kinship. In this year also we do a lot of collaboration event with HIMTI from other regions because we just merge. ', 'HIMTI'],
  ]
  let contenthim2 = '';
  himitems2.forEach(p => {
    contenthim2 += `
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
  document.querySelector("#himti2").innerHTML = contenthim2;
