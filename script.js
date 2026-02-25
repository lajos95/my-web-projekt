const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("Mód átváltva."); //Segít a hibakeresésben.
});