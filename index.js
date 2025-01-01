
const qrcodeContainer = document.getElementById("qrcode");
const textBox = document.getElementById("text");
var text = textBox.value;
function generateQRCode() {
  qrcodeContainer.innerHTML = "";
  if(text){
    const heading = document.createElement("h3");
    heading.innerText="Here is your QR Code 👇🏻";
    qrcodeContainer.appendChild(heading);
    var QR = document.createElement("img");
    QR.src =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+text; 
    qrcodeContainer.appendChild(QR);
  }else{
    textBox.classList.add("error");
    setTimeout(()=>{
      textBox.classList.remove("error");
    },1000)
  }
}
textBox.addEventListener("input", function() {
  text = textBox.value;
  if (!text) {
    qrcodeContainer.innerHTML = "";
  }
});
