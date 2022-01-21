const modal = document.querySelector(".modal");
const loginBtns = document.querySelectorAll(".login-btn");
const closeBtn = document.querySelector(".close");
const showcaseBg = document.querySelector(".main-background");

function closeModal() {
    modal.classList.add("modal-closed");
}

modal.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
loginBtns.forEach(btn => {
    btn.addEventListener("click", () => modal.classList.remove("modal-closed"));
});
