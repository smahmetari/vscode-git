setTimeout(() => {
    const p = document.createElement("p");
    p.innerText = "this was added dynamically";
    document.body.appendChild(p);
}, 2000);
