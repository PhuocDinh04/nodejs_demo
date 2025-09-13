// Hàm hiển thị tên và tuổi
function showInfo(name, age) {
    return `Tên: ${name}, Tuổi: ${age}`;
}

// Hàm tính tuổi từ năm sinh
function calcAge(name, birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return showInfo(name, age);
}

// In kết quả ra màn hình
console.log(calcAge("Phuoc", 2004));
