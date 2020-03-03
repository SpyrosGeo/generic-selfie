var constraints = { video: { facingMode: "user" }, audio: false };

const cameraView = document.querySelector('#camera--view');
const cameraOutput = document.querySelector('#camera--output');
const cameraSensor = document.querySelector('#camera--sensor');
const cameraTrigger = document.querySelector('#camera--trigger');

//Camera init
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(err => {
            console.log('err:', err)
        })
}


//Take the picture when the camera is tapped
cameraTrigger.onClick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext('2d').drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL('image/webp');
    cameraOutput.classList.add('taken');
    console.log('picture taken!')

}


window.addEventListener("load", cameraStart, false);
