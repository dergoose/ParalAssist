import document from "document";
import { HeartRateSensor } from "heart-rate";
import { vibration } from "haptics";

const hrm = new HeartRateSensor();

const hrmData = document.getElementById("hrm-data");

let landing1 = document.getElementById("landing1");
let landing2 = document.getElementById("landing2");
let screen1 = document.getElementById("sceen1");
let landingHelp = document.getElementById("landingHelp");
let beforeBPM = document.getElementById("beforeBPM");
let setBPM = document.getElementById("setBPM");
let main = document.getElementById("main");
let mainData = document.getElementById("mainData");
let settings = document.getElementById("settings");
let vibrate = document.getElementById("changeVibe");
let how = document.getElementById("how");
let health = document.getElementById("health");
let about = document.getElementById("about");
let vibrateSetting = "ring";


let toLanding2 = document.getElementById("toLanding2");
let toHelp = document.getElementById("toHelp");
let toBeforeBPM = document.getElementById("toBeforeBPM");
let toBeforeBPM2 = document.getElementById("toBeforeBPM2");
let toSetBPM = document.getElementById("toSetBPM");
let toMain = document.getElementById("toMain");
let on = document.getElementById("on");
let off = document.getElementById("off");
let toSettings = document.getElementById("toSettings");
let toBack = document.getElementById("toBack");
let toVibrate = document.getElementById("toVibrate");
let toChangeBPM = document.getElementById("toChangeBPM");
let toBackSetting = document.getElementById("toBackSetting");
let toHow = document.getElementById("toHow");
let toHealth = document.getElementById("toHealth");
let toAbout = document.getElementById("toAbout");
let toBackSettings2 = document.getElementById("toBackSettings2");
let toBackSettings3 = document.getElementById("toBackSettings3");
let toBackSettings4 = document.getElementById("toBackSettings4");

let confirmationM  = document.getElementById("confirmation");
let ring = document.getElementById("ring");
let ping = document.getElementById("ping");
let nudgeM = document.getElementById("nudge");
let bump = document.getElementById("bump");

let refresh = "";
let vibrator = "";
let intv1 = "";
let intv2 = "";
let intv3 = "";


let bpmH = 0;
let bpmT = 0;
let bpmO = 0;
let bpm = -1;


let tumbler1 = document.getElementById("tumbler1");
let tumbler2 = document.getElementById("tumbler2");
let tumbler3 = document.getElementById("tumbler3");


let appStart = false;




function showLanding2() {
  landing2.style.display = "inline";
  landing1.style.display = "none";
}


function showLandingHelp() {
  landing2.style.display = "none";
  landingHelp.style.display = "inline";
  runApp();
  
}

function showBeforeBPM() {
  clearInterval(refresh);
    landing2.style.display = "none";
  landingHelp.style.display = "none";
  beforeBPM.style.display = "inline";

}

function showBPM() {
  
  landingHelp.style.display = "none";
  beforeBPM.style.display = "none";
  settings.style.display = "none";
  setBPM.style.display = "inline";

}

function showMain() {
  changeBPM();
  clearInterval(intv1);
    clearInterval(intv2);
  clearInterval(intv3);

   mainData.text = 0;
  setBPM.style.display = "none";
  main.style.display = "inline";

}

function showSettings() {
  
  main.style.display = "none";
  settings.style.display = "inline";
    vibrate.style.display = "none";
  how.style.display = "none";
  health.style.display = "none";
  about.style.display = "none";

}

function back(){
  settings.style.display = "none";
    main.style.display = "inline";

}

function showVibrate(){
  settings.style.display = "none";
  vibrate.style.display = "inline";
}

function showHow(){
    settings.style.display = "none";
    how.style.display = "inline";
}

function showHealth(){
  settings.style.display = "none";
    health.style.display = "inline";
}

function showAbout(){
  settings.style.display = "none";
    about.style.display = "inline";
}


toLanding2.onclick = function() {
  showLanding2();
}

toHelp.onclick = function() {
  showLandingHelp();
}

toBeforeBPM.onclick = function(){
  showBeforeBPM();
}

toBeforeBPM2.onclick = function(){

  showBeforeBPM();
}

toSetBPM.onclick = function(){
  showBPM();
}

toBack.onclick = function(){
  back();
}

toChangeBPM.onclick = function(){
    showBPM();
}

toBackSetting.onclick = function(){
  showSettings();
}

tumbler1.onmousemove = function(evt) {
   setInterval(function() {
  bpmH= tumbler1.value; 
  }, 500)
}

tumbler2.onmousemove = function(evt) {
   setInterval(function() {
  bpmT= tumbler2.value; 
  }, 500)
}

tumbler3.onmousemove = function(evt) {
   setInterval(function() {
  bpmO= tumbler3.value; 
  }, 500)
}


on.onclick = function(evt) {
  console.log("on")
    runApp();
  appStart = true;
  runVibrator();
  

}

off.onclick = function(evt) {
   mainData.text = 0;
  console.log("off!");
  appStart = false;
  clearInterval(refresh);
    clearInterval(vibrator);

}

toMain.onclick = function(){
  showMain();
}

toSettings.onclick = function(){
  showSettings();
}

toVibrate.onclick = function(){
  showVibrate();
}

confirmationM.onclick = function(){
  vibration.start("confirmation-max");  
  vibrateSetting = "confirmation-max";
     vibration.stop();


}
ring.onclick = function(){
    vibration.start("ring");  
  vibrateSetting = "ring";
     vibration.stop();


}
ping.onclick = function(){
    vibration.start("ping");  
   vibrateSetting = "ping";
   vibration.stop();

}
nudgeM.onclick = function(){
    vibrate.start("nudge-max");  
   vibrateSetting = "nudge-max";
     vibration.stop();


}
bump.onclick = function(){
    vibration.start("bump");  
   vibrateSetting = "bump";
     vibration.stop();


}

toHow.onclick = function(){
  showHow();
}

toHealth.onclick = function(){
  showHealth();
}

toAbout.onclick = function(){
  showAbout();
}

toBackSettings2.onclick = function(){
  showSettings();
}

toBackSettings3.onclick = function(){
  showSettings();
}

toBackSettings4.onclick = function(){
  showSettings();
}


function runApp(){

 hrmData.text = 0;
  hrm.start();
 refresh = setInterval(refreshData, 1000);
  
}





function changeBPM(){
   bpm =  parseInt(bpmH + "" + bpmT + "" + bpmO, 10);
}

function refreshData() {
  
    if(landingHelp.style.display === "inline"){
      hrmData.text = hrm.heartRate;
      
    }
  else if(appStart === true){
     mainData.text = hrm.heartRate;
  }
}

function runVibrator(){
  vibrator = setInterval(vibrate, 1000);
}

function vibrate(){
 
  if(hrm.heartRate >= bpm){
    vibration.start(vibrationSetting);

  }
  
  
}

