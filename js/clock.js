const clock = document.querySelector("#clock");


setInterval(() => {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`
}, 1000)