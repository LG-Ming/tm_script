(function() {
    let timer = setInterval(function () {
        if (document.body) {
            var btn = document.querySelector("button[aria-label=\"关闭\"]");
            if (btn != null) {
                btn.click();
                clearInterval(timer);
            }
        }
    });
})();
