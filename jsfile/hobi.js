var hobbyitems = [
    //Nama, tahun masuk, tahun selesai
    ['fronto.jpg'],
    ['lion.jpg'],
    ['kepiting.jpg'],
    ['menpis.jpg'],
    ['julid.jpg'],
    ['helikopter.jpg'],
    ['julido.jpg'],
    ['pbass.jpg']
  ]
  let contenthobby = '';
  hobbyitems.forEach(p => {
    contenthobby += `
    <div class="col-lg-3 col-md-4 col-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="image/Hobi/${p[0]}" alt="">
      </a>
    </div>
    `
  });
  document.querySelector("#Hobby").innerHTML = contenthobby;