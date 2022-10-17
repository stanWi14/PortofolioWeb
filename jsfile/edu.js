var eduitems = [
    //Nama, tahun masuk, tahun selesai
    ['SMPK 1 BPK PENABUR Bandung','2014','2017','Regular'],
    ['SMAK 1 BPK PENABUR Bandung','2017','2020','IPA Regular'],
    ['Bina Nusantara University @Bandung','2020','Current','Computer Science']
 ]
let contentedu = '';
eduitems.forEach(p => {
    contentedu += `
    <div class="card table m-5" style="width: 18rem;">
        <div class="card-body m-3 text-center">
            <h5 class="card-title">${p[0]}</h5>
            <p class="card-text">${p[1]} - ${p[2]}</p>
            <p class="card-text">Major: ${p[3]}</p>
        </div>
    </div>
    `
});
document.querySelector("#Edu").innerHTML = contentedu;