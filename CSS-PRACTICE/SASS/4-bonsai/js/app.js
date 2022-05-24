
function showContent() {
    element = document.getElementById("content");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='flex';  
        element.style.position='absolute';  
        element.style.top='155px';  
        element.style.gap='80px';  
        element.style.left='510px';  
        
    }
    else {
        element.style.display='none';
    }
}