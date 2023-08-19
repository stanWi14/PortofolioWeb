var binitems = [
    ['Volunteer Host Zoom PIT Vairbees 2021','vairbees20211.jpg'],
    ['Volunteer Host Zoom PIT Vairbees 2021','vairbees2021.jpg'],
    ['BINECHA 2022 Presentation', 'binecha.jpg'],
    ['Data Entry PIT Vairbees 2022','volunvairbees.jpg'],
    ['Volunteer Host Zoom PIT Vairbees 2022','volunvairbees2.jpg'],
    ['Team Volunteer PIT Vairbees 2022','volunvairbees1.jpg'],
    ['Pupet Workshop','pupet.jpg'],
    ['Mengajar App Bisnis di Aloysius','mengajardisa2.jpg'],
    ['Mengajar App Bisnis di Aloysius','mengajardisa3.jpg'],
    ['Mengajar App Bisnis di Aloysius','MengajarAloysiusSA.jpg'],
    ['Mengajar App Bisnis di Aloysius','mengajardisa.jpg'],
    ['Mengajar App Bisnis di Aloysius','mengajardisa1.jpg'],
    ['Expo Computer Science BINUS @Bandung','ExpoBINUS2022.jpg'],
    ['Expo Computer Science BINUS @Bandung','ExpoBINUS20221.jpg'],
    ['Expo Computer Science BINUS @Bandung','ExpoBINUS20222.jpg']
    ]
    let contentbin = '';
    binitems.forEach(p => {
    contentbin += `
    <div class="col-md-4 col-sm-6 mb-3">
    <div class="card text-bg-dark p-2">
        <img src="image/GalleryBinus/${p[1]}" class="card-img" alt="..." style="height: 250px;">
        <div class="card-body">
            <h5 class="card-title">${p[0]}</h5>
        </div>
    </div>
</div>

    `
    });
    document.querySelector("#Binus").innerHTML = contentbin;
