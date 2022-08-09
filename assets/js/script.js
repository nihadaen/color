const box = document.querySelectorAll(".box");
let dropZone = document.querySelector(".mainBox");
const inp = document.querySelector("#change");
const btn = document.querySelector(".changeButton");
const custom = document.querySelector(".customBox");


box.forEach(element => {
    element.style.backgroundColor = element.id;
    element.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text", e.target.id)
    });

    dropZone.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.boxShadow = "0px 0px 53px 4px rgba(0,0,0,0.58)";
    });
    dropZone.addEventListener("dragleave", function () {
        this.style.boxShadow = "none";
    });

    dropZone.addEventListener("drop", function (e) {
        let id = e.dataTransfer.getData("text");
        if (id) {
            dropZone.style.backgroundColor = id;
            custom.style.backgroundColor = "transparent";
            dropZone.style.transitionDuration = "1.5s";
        }
        this.style.boxShadow = "none";
    });
});

btn.addEventListener("click", () => {
    custom.style.backgroundColor = inp.value;
    custom.setAttribute("id", inp.value);
    inp.value = "";
});

custom.addEventListener("dragstart", e=>{
    e.dataTransfer.setData("text", e.target.id);
})

