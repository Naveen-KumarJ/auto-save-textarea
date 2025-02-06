let textArea = document.querySelector('textarea');
// localStorage.removeItem('textContent')
if(localStorage.getItem("textContent")==null)       
    localStorage.setItem('textContent',textArea.value);
else{
    textArea.innerText = localStorage.getItem("textContent");
}

textArea.addEventListener('keyup',()=>{
    localStorage.setItem('textContent',textArea.value)
})