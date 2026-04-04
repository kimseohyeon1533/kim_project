console.log("JS 파일 연결 완료!");

const button = document.getElementById("myButton");
const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementById("welcomeMessage");

button.addEventListener("click", runPractice);

function runPractice() {
    console.log("버튼이 클릭되었습니다!");

    const name = nameInput.value.trim();

    if (name === "") {
        welcomeMessage.textContent = "이름을 입력해주세요!";
    } else {
        welcomeMessage.textContent = name + "님, 방문해주셔서 반갑습니다 💚";
    }
}