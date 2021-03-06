import { Accelerometer } from "accelerometer";
import { Barometer } from "barometer";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import document from "document";
import { today } from "user-activity";
console.log((today.local.steps || 0) + " steps")

let accelData = document.getElementById("accel-data");
let barData = document.getElementById("bar-data");
let hrmData = document.getElementById("hrm-data");

let accel = new Accelerometer();
let bar = new Barometer();
let hrm = new HeartRateSensor();

var myRect = document.getElementById("myRect");
var img = document.getElementById("image");
var imgArray = ["figs_screen01alt.jpg", "figs_screen02alt.jpg", "figs_screen03alt.jpg","figs_screen04alt.jpg", "figs_screen05alt.jpg"];

// myRect.onclick = function(e) {
//   console.log("click");
// }
var count = 1;
document.onkeypress = function(e) {
  console.log("Key pressed: " + e.key);
  var ref = imgArray[count % 5];
  img.href = ref;
  count++;
}

accel.start();
bar.start();
hrm.start();

function refreshData() {
  let data = {
    accel: {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    },
    bar: {
      pressure: bar.pressure ? parseInt(bar.pressure) : 0
    },
    hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  };

  accelData.text = JSON.stringify(data.accel);
  barData.text = JSON.stringify(data.bar);
  hrmData.text = JSON.stringify(data.hrm);
}

refreshData();
setInterval(refreshData, 1000);
