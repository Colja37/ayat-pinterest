// بيانات تمويهية تحاكي الـ API
const sampleVerses = [
    { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", ref: "سورة الشرح - الآية 6" },
    { text: "وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ", ref: "سورة الأنبياء - الآية 83" },
    { text: "فَاصْبِرْ صَبْرًا جَمِيلًا", ref: "سورة المعارج - الآية 5" },
    { text: "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ", ref: "سورة الفرقان - الآية 58" },
    { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", ref: "سورة البقرة - الآية 153" },
    { text: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", ref: "سورة الطلاق - الآية 3" }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("pinterest-content");
    
    // دالة لتوليد الكروت داخل الموقع
    function displayVerses() {
        grid.innerHTML = ""; // تصفية المحتوى
        
        sampleVerses.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            
            card.innerHTML = `
                <div class="card-body">
                    <p class="verse-text">" ${item.text} "</p>
                    <p class="verse-ref">${item.ref}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // تشغيل الدالة فوراً عند تحميل الصفحة
    displayVerses();
});
