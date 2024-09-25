const messages = [
    "Chúc bạn luôn vui vẻ và hạnh phúc!",
    "Hy vọng bạn có một năm mới tràn đầy niềm vui!",
    "Mong rằng mọi ước mơ của bạn sẽ thành hiện thực!",
    "Chúc bạn nhiều sức khỏe và thành công trong năm tới!",
    "Hãy tận hưởng ngày đặc biệt của bạn nhé!"
];

let currentIndex = 0;

function startTyping() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    typeMessage(messages[currentIndex]);
}

function typeMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = ""; // Xóa nội dung trước đó
    let i = 0;

    const interval = setInterval(() => {
        if (i < message.length) {
            messageDiv.innerText += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            currentIndex = (currentIndex + 1) % messages.length; // Chuyển sang câu tiếp theo
            
            // Thêm khoảng thời gian chờ trước khi bắt đầu câu tiếp theo
            setTimeout(() => {
                messageDiv.innerText = ""; // Xóa nội dung trước khi gõ câu mới
                setTimeout(() => {
                    typeMessage(messages[currentIndex]); // Gọi lại hàm để gõ câu tiếp theo
                }, 500); // Thời gian chờ trước khi bắt đầu gõ câu mới
            }, 1500); // Thời gian hiển thị câu hoàn chỉnh
        }
    }, 100); // Thay đổi giá trị này để điều chỉnh tốc độ gõ
}

// Bắt đầu hiển thị lời chúc khi trang được tải
window.onload = startTyping;
