// حجز موعد عبر الواتساب
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelectorAll('input')[0].value;
    const doctor = this.querySelector('select').value;
    const msg = `طلب حجز من الموقع:%0Aالاسم: ${name}%0Aالعيادة: ${doctor}`;
    window.open(`https://wa.me/967782629622?text=${msg}`, '_blank');
});

// حاسبة الوزن
function calculateBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    const res = document.getElementById('bmi-result');
    if (w > 0 && h > 0) {
        const bmi = (w / (h * h)).toFixed(1);
        res.innerHTML = `مؤشر الكتلة: ${bmi}`;
        res.classList.remove('hidden');
    }
}

// حاسبة الولادة
function calculateDueDate() {
    const lmp = new Date(document.getElementById('lmp-date').value);
    const res = document.getElementById('due-result');
    if (lmp != "Invalid Date") {
        const due = new Date(lmp.getTime() + (280 * 24 * 60 * 60 * 1000));
        res.innerHTML = `موعد الولادة المتوقع: <br> ${due.toLocaleDateString('ar-EG')}`;
        res.classList.remove('hidden');
    }
}
