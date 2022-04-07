let overlay = document.querySelector('.header__overlay');
let showOverlay = document.querySelectorAll('.header__button');
showOverlay.forEach((showOverlay) => { 
    showOverlay.addEventListener('click' ,()=>{
        overlay.classList.toggle('overlay_show')});
});

// let showOverlay = document.getElementById('show_overlay');
// let hideOverlay = document.getElementById('hide_overlay');
// function Overlay(show_hide, overlay){
//     show_hide.addEventListener('click', ()=>{
//         overlay.classList.toggle('overlay_show');
//     });
// };
// Overlay(showOverlay, overlay);
// Overlay(hideOverlay, overlay);




// let addFormElement = document.getElementById('add_form_elem');
// let formElement = document.getElementById('form_elem');
// let formLabel = document.getElementById('form_label');
// let formElementCounter = 2;
// addFormElement.addEventListener('click', ()=>{
//     if(formElementCounter == 5){
//         alert(`Количество участников должно не превышть ${formElementCounter}`);
//     }
//     else{
//         let newFormElement = formElement.cloneNode(true);
//         formElementCounter++;
//         let form = addFormElement.parentNode;
//         form.insertBefore(newFormElement, addFormElement); 
//     }
// })



// ajax for registration form
// function sendRequest(){
//     let form = document.getElementById('form');
//     let formData = new FormData(form);
//     $.ajax({
//         type: "POST",
//         url: '',
//         data: formData,
//         dataType: 'html',
//         processData: false,
//         contentType: false,
//         success: function(){
//             alert('POST success');
            
//         },
//         erorr: function(){
//             alert('POST error');
//         }
//     })    
}





// Process contact form
$('#form').submit(function(event) {
    event.preventDefault();
   
    setTimeout(function() {
        // Get data
      var data = {
        'entry.1381807465': $('#team').val(),
        'entry.689161790': $('#study_place').val(),
        'entry.277358756': $('#sections').val(),
        'entry.964255080': $('#participant1').val(),
        'entry.702140556': $('#email').val(),
        'entry.160789097': $('#tel').val(),
        'entry.1752364032': $('#participant2').val(),
        'entry.1721330725': $('#participant3').val(),
        'entry.1823584633': $('#participant4').val(),
        'entry.1726591051': $('#participant5').val(),
      };
  
      // Validate form
      var formSuccess = true;
      Object.keys(data).forEach(function(key, index) {
        if (!data[key]) {
          formSuccess = false;
          alert('Please complete all fields');
        }
      });
  
      if (formSuccess) {
        // Send request
        $.ajax({
          url: 'https://docs.google.com/forms/d/e/1FAIpQLScQvxtYBZYX-z_sPh_BICnoZJhgb_VZim6gDXg9gNTorc6_tQ/formResponse',
          type: 'POST',
          crossDomain: true,
          dataType: "xml",
          data: data,
          success: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on success');
            alert('Message sent!');
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on error');
            alert('Error');
          }
        });
      }
    }, 300);
  });
  