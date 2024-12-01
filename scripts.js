document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị của các trường trong form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Kiểm tra xem các trường có được điền đầy đủ không
    if (name === "" || email === "" || message === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return; // Dừng nếu thiếu thông tin
    }

    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return;
    }

    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ với bạn sớm.");
});

// Hàm kiểm tra định dạng email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
