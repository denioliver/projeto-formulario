
const ulQuadrados = document.querySelector("ul.quadrados")

for (let i = 0; i < 15; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120));

    const position = random(1, 99) ;
    
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    ulQuadrados.appendChild(li);
}

