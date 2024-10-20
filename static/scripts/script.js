
function hasNoDigits(str) {
    const regex = /\d/;
    return !regex.test(str);
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let response1 = document.getElementById("response1");
    let response2 = document.getElementById("response2");
    let label1 = document.getElementById("label1");
    let label2 = document.getElementById("label2")

    response1.innerText = "";
    response2.innerText = "";
    label1.classList.remove("mistake-color");
    label2.classList.remove("mistake-color");
    document.getElementById("name1").classList.remove("mistake-border-color");
    document.getElementById("name2").classList.remove("mistake-border-color");

    if (hasNoDigits(name1) === false) {
        response1.innerText = "ошибка аларм аларм";
        label1.classList.add("mistake-color");
        document.getElementById("name1").classList.add("mistake-border-color")
    } else if (hasNoDigits(name2) === false) {
        response2.innerText = "ошибка аларм аларм";
        label2.classList.add("mistake-color");
        document.getElementById("name2").classList.add("mistake-border-color")
    } else {
        this.reset();
    }
});

const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

function changeImage1() {
    const img = document.getElementById('menu-img');
    img.src = 'static/img/close-m.svg';
}

function changeImage2() {
    const img = document.getElementById('menu-img');
    img.src = 'static/img/menu-m.svg';
}

let flag = false;

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';

            if (flag === false) {
                flag = true
                changeImage1();
            } else {
                flag = false
                changeImage2();
            }
        }

    }
}

dropbtn.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    if (flag === false) {
        flag = true
        changeImage1();
    } else {
        flag = false
        changeImage2();
    }
    // if (dropdownContent.style.display === 'block') {
    //     changeImage1();
    // } else {
    //     changeImage2();
    // }
});