// 1. نظام الحجز عبر واتساب
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelectorAll('input')[0].value;
    const doctor = this.querySelector('select').value;
    const whatsappMsg = `السلام عليكم، أريد حجز موعد في مستشفى ابن الحاج التخصصي:%0A- اسم المريض: ${name}%0A- العيادة: ${doctor}%0Aمرسل عبر الموقع الإلكتروني.`;
    window.open(`https://wa.me/967782629622?text=${whatsappMsg}`, '_blank');
});

// 2. حاسبة BMI المطورة (مع شريط الألوان والنصائح)
function calculateBMI() {
    const w = parseFloat(document.getElementById('weight').value);
    let h = parseFloat(document.getElementById('height').value);
    const res = document.getElementById('bmi-result');

    if (w > 0 && h > 0) {
        if (h > 3) h = h / 100; // تصحيح الطول إذا أدخل بالسنتيمتر
        const bmi = (w / (h * h)).toFixed(1);
        
        let status = "", advice = "", color = "", pos = "";

        if (bmi < 18.5) {
            status = "وزن ناقص"; advice = "تحتاج لتغذية غنية بالبروتين."; color = "#3b82f6"; pos = "15%";
        } else if (bmi < 25) {
            status = "وزن مثالي"; advice = "رائع! حافظ على هذا التوازن."; color = "#10b981"; pos = "40%";
        } else if (bmi < 30) {
            status = "زيادة وزن"; advice = "ننصحك بالمشي 30 دقيقة يومياً."; color = "#f59e0b"; pos = "65%";
        } else {
            status = "سمنة"; advice = "يرجى مراجعة د. أماني لسلامة قلبك."; color = "#ef4444"; pos = "90%";
        }

        res.innerHTML = `
            <div class="mt-4 p-4 rounded-2xl border border-gray-100 bg-white">
                <div class="text-3xl font-black" style="color:${color}">${bmi}</div>
                <div class="font-bold text-sm mb-2">${status}</div>
                <div class="gauge-bar">
                    <div style="width:25%; background:#3b82f6"></div>
                    <div style="width:25%; background:#10b981"></div>
                    <div style="width:25%; background:#f59e0b"></div>
                    <div style="width:25%; background:#ef4444"></div>
                </div>
                <p class="text-[10px] text-gray-500">${advice}</p>
            </div>
        `;
        res.classList.remove('hidden');
    }
}

// 3. حاسبة موعد الولادة
function calculateDueDate() {
    const lmp = new Date(document.getElementById('lmp-date').value);
    const res = document.getElementById('due-result');

    if (lmp != "Invalid Date") {
        const due = new Date(lmp.getTime() + (280 * 24 * 60 * 60 * 1000));
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        res.innerHTML = `الموعد المتوقع بإذن الله:<br><span class="text-xl">${due.toLocaleDateString('ar-EG', options)}</span><br><small>ننصحك بالمتابعة مع د. مروى الأصبحي</small>`;
        res.classList.remove('hidden');
    }
}
