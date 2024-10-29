export const  loadDoc =(e,responseState)=>{
  const xhr = new XMLHttpRequest();
  const formData = new FormData(e)
  xhr.open('POST', 'http://localhost:9090/api/registration', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      responseState.textContent = JSON.parse(xhr.responseText).message
      responseState.className = "response-state-false"
    } else {
      responseState.textContent = JSON.parse(xhr.responseText).message
      responseState.className = "response-state-true"
    }
};
xhr.onerror = function() {
  console.log("произошла ошибка")
};
xhr.send(formData);
}