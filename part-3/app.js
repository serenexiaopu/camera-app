//drag
$(function () {
    $("#draggable1").draggable();
    $("#draggable2").draggable();
    $("#draggable4").draggable();
    $('#draggable3').draggable();
    $('#draggable5').draggable();
    $('#draggable6').draggable();
    $('#draggable7').draggable();
    $("#draggable8").draggable();
    $("#draggable9").draggable();
    $("#draggable10").draggable();
    $('#draggable11').draggable();
    $('#draggable12').draggable();
    $('#draggable13').draggable();


    // ({

    //     // enable multiple draggable
    //     multiple: true,
      
    //     // shows clone helper
    //     cloneHelper: false,
      
    //     // selected element
    //     selected: '.selected',
      
    //     // snaps to .selector
    //     snap: '.selector',
      
    //     // before start
    //     beforeStart: function(){}
        
    //   });
});




// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");
    commentSubmit = document.querySelector("#comment--button");


// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
}

commentSubmit.onclick = function() {
    var x = document.getElementById("comment--input").value;
    var element = document.createElement("button");
    element.innerHTML = x;
    document.getElementById("bullets").appendChild(element);
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

