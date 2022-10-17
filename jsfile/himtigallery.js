var himitems = [
    ['Techno 2022','techno.jpg'],
    ['HIMTI Podcast','podcast1.jpg'],
    ['HIMTI Podcast','podcast.jpg'],
    ['Expo HIMTI 2022','expohim.jpg'],
    ['Expo HIMTI 2022','expohim1.jpg'],
    ['Expo HIMTI 2022','expohim2.jpg'],
    ['Makrab Pengurus HIMTI 2022/2023','makrab.jpg'],
    ['Expo OK 2022','panitexpo.jpg'],
    ['Campus Tour','CampusTour.jpg']
    ]
    let contenthim = '';
    himitems.forEach(p => {
    contenthim += `
    <div class="card text-bg-dark p-2 m-2" style="width: 30%;">
        <img src="image/GalleryHimti/${p[1]}" style="height: 250px;" class="card-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p[0]}</h5>
        </div>
      </div>
    `
    });
    document.querySelector("#HIMTI").innerHTML = contenthim;
