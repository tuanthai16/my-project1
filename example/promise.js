function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); //<script>
        script.src = src;
        script.onload = () => resolve(10);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script);
    });
}
loadScript("https://javascript.info/callbacks")
    .then((data) => data + "phai co cai gi day")
    .then((data2) => console.log(data2))
    .catch((error) => console.log(error));