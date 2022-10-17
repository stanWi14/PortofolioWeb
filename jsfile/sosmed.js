var sosmeditems = [
    ['Instagram', 'LogoInsta.jpg','https://www.instagram.com/stanley_wisely14/', 'Visit now'],
    ['Facebook','LogoFb.jpg','https://www.facebook.com/stanley.wisely.9/', 'Visit now'],
    ['LinkedIn','LogoLinkin.jpg','https://id.linkedin.com/in/stanley-wisely-a50908205', 'Visit now'],
    ['Github','LogoGitHub.png','https://github.com/stanWi14', 'Visit now'],
    ['Gmail','LogoGmail.jpg','mailto:stanleywisely257@gmail.com','Send email'],
    ['Outlook','LogoOutlook.jpg','mailto:stanley.wisely@binus.ac.id','Send email']
  ]
  let contentsosmed = '';
  sosmeditems.forEach(p => {
    contentsosmed += `
    <div class="feature col">
      <div class="col-md-4 jus">
        <img src=" image/LogoContact/${p[1]}" class="img-fluid rounded-start rounded-end m-1 mt-5" alt="keyboard">
      </div>
      <h3 class="fs-2">${p[0]}</h3>
      <a href="${p[2]}" class="btn btn-warning" style="width: 100px;" role="button" >${p[3]}</a>
    </div>
    `
  });
  document.querySelector("#sosmed").innerHTML = contentsosmed;