//your JS code here. If required.
        let container = document.querySelector(".container");
        container.style.padding="10px"
        container.style.border="1px solid black"
        container.style.display="flex"
        container.style.flexWrap="wrap"
        container.style.backgroundColor="#111111"

        for (let i = 0; i < 800; i++) {
            let box = document.createElement("div");
            box.style.height="40px";
            box.style.width="40px"
            box.style.margin="5px"
            box.style.backgroundColor="#1d1d1d"
            box.style.borderRadius="10px"
            box.style.transition="backgroundcolor 1s ease"
            box.classList.add("square")
            container.appendChild(box);

            box.addEventListener("mouseover",()=>{
                const red = Math.floor(Math.random()*256)
                const green = Math.floor(Math.random()*256)
                const blue = Math.floor(Math.random()*256)

                box.style.backgroundColor=`rgb(${red},${green},${blue})`

                setTimeout(()=>{
                    box.style.backgroundColor="#1d1d1d"
                },1000)
            })

        }