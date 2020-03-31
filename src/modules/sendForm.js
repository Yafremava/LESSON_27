'use strict';
const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const forms = document.querySelectorAll('form[name = user_form]');
  const reset = () =>{
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((elem) => {
      elem.value = '';
    });
  };
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem; color: white';
  forms.forEach((item) => {
    item.addEventListener('submit', (event)=>{
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(item);
      let body = {};   
      formData.forEach((val, key) => {
        body[key] = val;
      });       
      postData(body)
       .then((response) => {
          if(response.status !== 200){
            throw new Error('status network not 200');
          }
        }) 
        .then(() =>{            
          statusMessage.textContent = successMessage;
          reset();
          setTimeout(()=>{
            statusMessage.remove();
          },5000);
        })         
        .catch((error) => { 
          statusMessage.textContent = errorMessage;
          setTimeout(()=>{
            statusMessage.remove();
          },5000);
          console.log(error);          
        });
    });     
  });     
  const postData = (body) =>{
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include'
    });
  };
};
export default sendForm;