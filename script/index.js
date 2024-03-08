import cars from "./car.js";

const cardCars = document.getElementById("car-rent");
// const availableCars = cars.filterCarByAvailability();

const tanggal = document.getElementById("tanggal");
const waktu_jemput = document.getElementById("waktu-jemput");
const jumlah_penumpang = document.getElementById("jumlah-penumpang");
const buttonCariMobil = document.getElementById("search-submit");
const tempatFilter = document.getElementById("tempatFilter");

function fungsiMenampilkan(arr) {
  let cardSearchAvailable = "";
  arr.map((car) => {
    cardSearchAvailable += `<div class="col-md-4 d-flex">
                <div class="card mb-4 flex-fill">
                  <div class="card-body p-4 d-flex flex-column">
                    <img
                      src="${car.image}"
                      class="img-fluid mb-4 rounded"
                      alt="..."
                    />
                    <p class="card-text">${car.model}</p>
                    <h5 class="card-title mb-3">Rp ${car.rentPerDay
                      .toLocaleString()
                      .replace(",", ".")} / hari</h5>
                    <p class="card-text">
                      ${car.description}
                    </p>
                    <div class="mb-2">
                      <img class="me-2" src="assets/fi_users.png" alt="" />${
                        car.capacity
                      }
                      Orang
                    </div>
                    <div class="mb-2">
                      <img
                        class="me-2"
                        src="assets/fi_settings.png"
                        alt=""
                      />${car.transmission}
                    </div>
                    <div class="mb-2">
                      <img
                        class="me-2"
                        src="assets/fi_calendar.png"
                        alt=""
                      />Tahun ${car.year}
                    </div>
                    <div class="mt-auto">
                    <a
                      href="#"
                      class="btn col-12 text-white"
                      style="background-color: #5cb85f"
                      >Pilih Mobil</a
                    >
                    </div>
                  </div>
                </div>
              </div>`;
  });
  cardCars.innerHTML = cardSearchAvailable;
}

buttonCariMobil.addEventListener("submit", (event) => {
  event.preventDefault();
  tempatFilter.innerHTML = `
                <label class="form-label" for="sortYear">Urutkan Tahun</label>
                <select id="sortYear" class="form-select" >
                  <option value="paling-sesuai" selected>Paling sesuai</option>
                  <option value="terbaru">Terbaru</option>
                  <option value="terlama">Terlama</option>
                </select>
                `;
  const urutkanTahun = document.getElementById("sortYear");

  let searchedCars = cars.searchCars(tanggal.value, jumlah_penumpang.value);
  let searchedCars2 = [...searchedCars];

  fungsiMenampilkan(searchedCars);

  urutkanTahun.addEventListener("change", (event) => {
    // console.log(urutkanTahun.value);
    if (urutkanTahun.value == "terbaru") {
      fungsiMenampilkan(cars.sortCarByYearDecendingly(searchedCars2));
    } else if (urutkanTahun.value == "terlama") {
      fungsiMenampilkan(cars.sortCarByYearAscendingly(searchedCars2));
    } else {
      fungsiMenampilkan(searchedCars);
    }
  });
});

// console.log(availableCars);
