//single element
// const form=document.getElementById('my-form');
// console.log(form);

//multiple element

// console.log(document.querySelectorAll('.items'));
/*const items = document.querySelectorAll('.item');
items.forEach(item => {
    console.log(item);
});*/

/*const ul= document.querySelector('.items')

uls.remove();
 uls.lastElementChild.remove();

ul.firstElementChild.textContent='Hello'
ul.children[1].innerHTML='Welcome';
ul.lastElementChild.innerHTML='<h4>To learning JS</h4>'*/
// const btnx= document.querySelector('.btn')
// btnx.style.background='red';
// btnx.style.color='black';

//eventListener
/*const btn = document.querySelector('.btn')
// 'click' is mouse event. other mouse event include: mouseover,mouseout
btn.addEventListener('mouseout', event => {
    event.preventDefault();
    // the event is to get event property
    // console.log(event)
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('header').style.color='red';
    document.querySelector('.text').style.color='red';
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello World</h1>';


  });  
  */

  const myForm =document.querySelector('#my-form');
  const nameInput =document.querySelector('#name');
  const emailInput =document.querySelector('#email');
  const msg =document.querySelector('.msg');
  const userList =document.querySelector('#users');

  myForm.addEventListener('submit', onSubmit);
  function onSubmit(event){
      event.preventDefault();
      //to get the name typed inside the form
    //   console.log( `${nameInput.value} ${emailInput.value}`);

        if(nameInput.values===''|| emailInput.value===''){
            msg.classList.add('error');
            msg.innerHTML='Please enter all fields';
            setTimeout(() => {
                msg.remove()
            }, 3000);
            // this function automatically refresh the page within 5seconds
            function timedRefresh(timeoutPeriod) {
                setTimeout("location.reload(true);",timeoutPeriod);
            }
            
            window.onload = timedRefresh(5000);
            
        }
        else{
                 const li = document.createElement('li'); //is a type node
                li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
                console.log(userList.appendChild(li));// this will show the appendChild list on the console
                userList.appendChild(li);//This show the appendChild on the UI
                 //clear field
                 nameInput.value='';
                 emailInput.value='';

               

        msg.classList.add('success')
        msg.innerHTML='Success';
         setTimeout(() => {
         msg.remove()
         }, 3000);

         
    }
    // this function automatically refresh the page within 5seconds
    function timedRefresh(timeoutPeriod) {
        setTimeout("location.reload(true);",timeoutPeriod);
    }
    
    window.onload = timedRefresh(50000);
}
           
  