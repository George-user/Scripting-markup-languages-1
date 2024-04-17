Pagego();
Pagesq();

document.getElementById("text").addEventListener("dblclick", Pageclick)
document.getElementById("page1").addEventListener("dblclick", Pageclick)

function Pageclick(cho) {
    let choise =  true

    let target = cho.target
    document.onmousemove = (cho) => {
        if (choise) {
            target.style.left = cho.clientX + "px"
            target.style.top = cho.clientY + "px"
        }
    }

    document.onclick = () => {
        choise = false
    }
}

function Pagego() {
    let targ = document.getElementById("page2")

    let step = -1
    let posit = 0

    setInterval(() => {
        if (posit === screen.width - targ.width || posit === 0) {
            step = -step
        }
        posit += step
        targ.style.left = posit + "px"
    }, 1);
}

function Pagesq() {
    let ang = 0;
    let tar = document.getElementById("page3");

    setInterval(circle, 1);

    function circle() {
        let radius = 300;
        let centerX = screen.width / 2 - tar.width / 2;
        let centerY = screen.height / 2 - tar.height / 2;
        ang += 2 * Math.PI / 180;

        tar.style.left = centerX + radius * Math.sin(ang) + "px";
        tar.style.top = centerY + radius * Math.cos(ang) + "px";
    }
}

