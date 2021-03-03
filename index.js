
let countryCode = document.getElementById('country-code').value;
let number = document.form_main.number.value;
let message = document.form_main.message.value;
const testInput = document.getElementById('message');
const testOutput = document.getElementById('test-output');
let url = "https://api.whatsapp.com/send?phone=";
let end_url = `${url}${countryCode}${number}&text=%20${message}`;
const copyBtn = document.getElementById('copy-btn');






function generateLink() {
    let countryCode = document.form_main.countryCode.value;
    let number = document.form_main.number.value;
    let message = document.form_main.message.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${countryCode}${number}&text=%20${message}`;
    
    document.getElementById('end_url').value = end_url;
    var str = end_url;
    var replaced = str.split(' ').join('%20');
    end_url = replaced;
    document.getElementById('end_url').style.visibility = 'visible';

    document.querySelector('.tooltip').style.visibility = 'visible';
  }


  function myFunction() {
    var copyText = document.getElementById("end_url");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


  //Event Listeners
    copyBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        myFunction();
    });




   testInput.addEventListener('input', (e) =>{

    testOutput.innerHTML = testInput.value;

   })