function loadHTML(elementId, fileName) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", fileName, true);
    xhttp.send();
}

// Khi trang được tải, gọi hàm loadHTML để tải header và footer
window.onload = function() {
    loadHTML("header-placeholder", "/my_profile/components/header.html");
    loadHTML("footer-placeholder", "/my_profile/components/footer.html");
};
