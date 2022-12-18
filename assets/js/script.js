const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".button-open");
const closeModalBtn = document.querySelector(".button-close");

const openModal = function () {
    modal.classList.remove("hidden");
  };

  const closeModal = function() {
    modal.classList.add("hidden");
  }

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
   }
  })