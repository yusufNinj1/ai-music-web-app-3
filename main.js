song = "";
song2 = "";
leftWristX = "";
leftWristY = "";
RightWristX = "";
RightWristY = "";


function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWristX;
        leftWristY = results[0].pose.leftWristY;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        RightWristX = results[0].pose.RightWristX;
        RightWristY = results[0].pose.RightWristY;
        console.log("RightWristX = " + RightWristX +"RightWristY = "+ RightWristY);
        
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song2.play();
}