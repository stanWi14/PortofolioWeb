var himitems1 = [
    // Posisi, deskripsi tugas, nama acara 
    ['Head of Responsi B24','In charge of helding monthly additional study classes for Binusian 2024 (B24 is a student that enroll at 2020). The lecturers are from other B24 students. Because of pandemic, we not making offline classes, but we made Video Base Learning every month that being posted at HIMTI Bandung Youtube Channel and before a exam we always do a live class via Zoom', 'Responsi'],
    ['Instructor Responsi B24','Teach & make monthly youtube Video Base Learning for some subject like Human and Computer Interaction, and Calculus.', 'Responsi'],
    ['BIEL Event Committee','In charge of making rundown & rules for BIEL Esport Competition. Also helping as a Liaison officer at some of the match.', 'BIEL(BINUS Invitational Esport League)'],
    ['Summer Class Module Committe','In charge of making teaching material/module about MIT App Inventor and Flowgorithm for highschool student', 'Summer Class'],
    ['Instructor Programming Class','Help freshmen (B25) to learn C language & guide them to try online judge.', 'Algorithm Class'],
    ['SESKAM Event Committee',"In charge of making SESKAM Power Point about HIMTI all region",'SESKAM ( Sesi Kampus )']
  ]
  let contenthim1 = '';
  himitems1.forEach(p => {
    contenthim1 += `
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
  document.querySelector("#himti1").innerHTML = contenthim1;
