song = "";

function preload()
{
	song = loadSound("mikellino.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
poseNet=ml5.poseNet(video,crack);
poseNet.on("pose",creck)
}


function draw() {
	image(video, 0, 0, 600, 500);
  
}

function reloi()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
function crack (){
console.log("crack")
}

function creck (panku) {
if(panku.length>0) {
scoreRightWrite=panku[0].pose.keypoints[10].score;
scoreLeftWrite=panku[0].pose.keypoints[10].score;
rightWristX=panku[0].rightWrist.x;
rightWristY=panku[0].rightWrist.y;
leftWristX=panku[0].rightWrist.x;
leftWristY=panku[0].rightWrist.y;
}
}