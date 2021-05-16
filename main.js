function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560 , 150);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized");
}

function draw(){
    background("#D3D3D3");
}
function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
}