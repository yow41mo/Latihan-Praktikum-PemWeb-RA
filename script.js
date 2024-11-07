// script.js

// Konstanta untuk bobot dan batas kelulusan
const TUGAS_WEIGHT = 0.3;
const UTS_WEIGHT = 0.3;
const UAS_WEIGHT = 0.4;
const PASSING_GRADE = 60;

// Fungsi untuk menghitung nilai
function calculateGrade() {
    // Mengambil input nilai
    const tugas = parseFloat(document.getElementById('tugas').value);
    const uts = parseFloat(document.getElementById('uts').value);
    const uas = parseFloat(document.getElementById('uas').value);

    // Memvalidasi input
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert('Silakan masukkan nilai yang valid antara 0 dan 100.');
        return;
    }

    // Menghitung rata-rata tertimbang
    let average = (tugas * TUGAS_WEIGHT) + (uts * UTS_WEIGHT) + (uas * UAS_WEIGHT);

    // Menentukan nilai huruf
    let letterGrade;
    if (average >= 90) {
        letterGrade = 'A';
    } else if (average >= 80) {
        letterGrade = 'B';
    } else if (average >= 70) {
        letterGrade = 'C';
    } else if (average >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'E';
    }

    // Menampilkan hasil
    document.getElementById('result').innerText = `Rata-rata: ${average.toFixed(2)}\n Nilai Huruf: ${letterGrade}`;
}

// Menambahkan event listener pada tombol
document.getElementById('calculate').addEventListener('click', calculateGrade);
