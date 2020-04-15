function displayInfo(event, tabID) {
    let i;
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablinks");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabID).style.display = "block";
    event.currentTarget.className += ' active';
}