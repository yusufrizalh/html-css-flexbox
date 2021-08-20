// let status = true;

// let learnPromise = new Promise(function(resolve, reject) {
//     // pengecekan terhadap status
//     if (status) {   // berhasil
//         resolve(console.log("Resolve: Saya belajar JavaScript"));
//     } else {        // gagal
//         reject(console.log("Reject: Saya batal belajar JavaScript"));
//     }
// });

function makePromise(status) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (status) {
        resolve("Berhasil");
      } else {
        reject("Gagal");
      }
    }, 3 * 1000); // 3000ms
  });
}

let learnPromise = makePromise(true);
// perintah selanjutnya didefinisikan dengan then
learnPromise
  .then(
    (success) => console.log(success) // resolve
    // reason => console.log(reason)    // reject
  )
  .catch(
    // reject
    (reason) => console.log(reason)
  )
  .finally(console.log("Finally"));

function bukaData(lokasiData) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest(); // request data dari luar JS

    request.onreadystatechange = function (arg) {
      // periksa state yg ada didalam request
      if (this.readyState === 4) {
        if (this.status == 200) {
          // OK
          // berhasil
          resolve(this.response);
        } else {
          // gagal
          reject(this.status);
        }
      }
    };
    request.open("GET", lokasiData, true);
    request.send();
  });
}

const btnPesan = document.querySelector("#btnPesan");
const pesan = document.querySelector("#pesan");

btnPesan.onclick = function () {
  bukaData("../data/data.json")
    .then((response) => {
      // resolve
      const hasil = JSON.parse(response);
      pesan.innerHTML = hasil.pesan;
    })
    .catch(
      (error) => (pesan.innerHTML = `Terjadi error: ${error}`) // reject
    )
    .finally(console.log("Belajar Promise di JavaScript"));
};
