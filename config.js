// ==========================================
// ⚙️ CONFIGURATION (การตั้งค่าสภาพแวดล้อม)
// ==========================================

const CONFIG = {
    // 🌐 URL ของ Google Apps Script (ตัวใหม่ที่รวมโค้ดแล้ว)
    // สามารถใช้ลิงก์เดียวกันได้เลย เพราะระบบ Backend แยกส่วนให้แล้ว
    WEB_APP_API: "https://script.google.com/macros/s/AKfycbzMByl1n4eIt9Mz5z2-nP-oVWx07F1azJIdjZYJ2vALHCPkD76SWl17A1-VqU4-0Hcm/exec",

    // 📱 LIFF IDs
    LIFF_ID_CHECKIN: "2009669864-RS4IQsdL",
    LIFF_ID_HISTORY: "2009669864-MMaK2NVa",
 

    // 📍 การตั้งค่าพิกัดสถานที่ (ละติจูด, ลองจิจูด)
    TARGET_LATITUDE: 16.807157,
    TARGET_LONGITUDE: 100.263852,

    // 📏 ระยะห่างที่อนุญาตให้เช็คอินได้ (หน่วยเป็นเมตร)
    ALLOWED_RANGE_METERS: 30
};
