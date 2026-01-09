setTimeout(() => {
    const p = document.createElement("p");
    p.innerText = "This was added dynamically";
    document.body.appendChild(p);
}, 2000);
