var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var content = event.results[0][0].transcript;                           
document.getElementById("textbox").innerHTML = content;
if(content=="take my selfie")
{
speak();
}
}
function speak (){ 
var synthesis=window.speechSynthesis;
speak_data="Taking your selfie in five seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synthesis.speak(utterThis);
Webcam.attach(camera);
setTimeout(function() {
take_snapshot();
save ();
}, 5000);

}
var camera=document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 function take_snapshot(){
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='<img id="selfie_image"  src="'+data_uri+'"/>';

});


}

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}