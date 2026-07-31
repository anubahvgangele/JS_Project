const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");

function openmodal() {
    console.log("Modal Open");

    modal.classList.remove("scale-0", "opacity-0");
    modal.classList.add("scale-100", "opacity-100");

    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
}

function closemodal() {
    console.log("Modal Close");

    modal.classList.remove("scale-100", "opacity-100");
    modal.classList.add("scale-0", "opacity-0");

    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0", "pointer-events-none");
}