// J Taylor Groundworks
// Gallery Lightbox

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-grid img");

    if (!images.length) return;

    let current = 0;

    // Create overlay

    const overlay = document.createElement("div");
    overlay.className = "lightbox";

    overlay.innerHTML = `

        <span class="lightbox-close">&times;</span>

        <button class="lightbox-prev">&#10094;</button>

        <img class="lightbox-image" src="" alt="">

        <button class="lightbox-next">&#10095;</button>

    `;

    document.body.appendChild(overlay);

    const lightboxImage = overlay.querySelector(".lightbox-image");

    function show(index){

        current = index;

        lightboxImage.src = images[index].src;
        lightboxImage.alt = images[index].alt;

        overlay.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    function hide(){

        overlay.classList.remove("show");

        document.body.style.overflow = "";

    }

    function next(){

        current++;

        if(current >= images.length){

            current = 0;

        }

        show(current);

    }

    function previous(){

        current--;

        if(current < 0){

            current = images.length-1;

        }

        show(current);

    }

    images.forEach((img,index)=>{

        img.style.cursor="zoom-in";

        img.addEventListener("click",()=>{

            show(index);

        });

    });

    overlay.querySelector(".lightbox-close").onclick = hide;

    overlay.querySelector(".lightbox-next").onclick = next;

    overlay.querySelector(".lightbox-prev").onclick = previous;

    overlay.addEventListener("click",(e)=>{

        if(e.target===overlay){

            hide();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!overlay.classList.contains("show")) return;

        switch(e.key){

            case "Escape":

                hide();

                break;

            case "ArrowRight":

                next();

                break;

            case "ArrowLeft":

                previous();

                break;

        }

    });

});