function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(script);
    script.onerror = () => callback(new Error(`Loi truy cap`));
    document.head.append(script);
}
loadScript("http://javascript.info/callback", function (error, data))