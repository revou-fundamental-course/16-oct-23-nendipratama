
// Ambil elemen-elemen HTML yang diperlukan
const form = document.querySelector('.form');
const formOutput = document.getElementById('form-output');
const submit = document.getElementById('submit');
const greetingValue = document.getElementById('greeting');

function output() {
    // Ambil nilai dari input dan textarea
    const nama = document.getElementById('fname').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value; // Corrected the selector
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const pesan = document.getElementById('Pesan').value;
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    // Buat pesan yang akan ditampilkan
    const outputMessage = `Today is ${currentDate}\n\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}`;

    // Tampilkan pesan di elemen form-output
    formOutput.textContent = outputMessage; // Changed .value to .textContent
}

function greetingName() {
    const nama = document.getElementById('fname').value;

    const greetingOutput = `Hi ${nama}, Welcome to this website`;
    greetingValue.textContent = greetingOutput; // Changed .innerHTML to .textContent
}

submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    output();
    greetingName();
});