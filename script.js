setTimeout(()=> {
    const p = document.createElement("p");
    p.innerText = "this was added dynamicly";
    document.body.appendChild(p);
}, 2000)