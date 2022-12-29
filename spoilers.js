let version = 'v4.8';

//let spoilersAnimating = false;
//let spoilersArmClick = "NotArmed";

let leftThrottlesAnimatingCount = 21;
let rightThrottlesAnimatingCount = 21;
let spoilersUp = true;
let spoilerAnimationInProgress = false;
let spoilersLastCommand = "up";
let spoilersAnimatingCount = 0;
let alertCount = 0;

let topX = 10;
let topY = 0;

let _POWER = false;
let _IDLE = true;
let _ARMED = true;
let _NOTARMED = false;
let _TEST = true;
let _NOTEST = false;
let _OPENED = true;
let _CLOSED = false;
let _YES = true;
let _NO = false;

let flashRedCounter = 1000;

let flashingRedCASmessages = false;
let previousSpoilerState = 'up';
let currentSpoilerState = 'down';

let mouse_pressed_flag = false;
let topValveOpen = _CLOSED;
let botValveOpen = _CLOSED;
let mouseReleaseFlag = false;
let playSoundFlag = false;

let topContactsBaseLineX = 300;
let topContactsBaseLineY = 100;
let botContactsBaseLineX = topContactsBaseLineX;
let botContactsBaseLineY = 450;

let leftNutcrackerTextX1 = topContactsBaseLineX-224;
let leftNutcrackerTextY1 = topContactsBaseLineY+30;
let rightNutcrackerTextX1 = leftNutcrackerTextX1-8;
let rightNutcrackerTextY1 = botContactsBaseLineY+30;

let leftNutcrackerGrnModeTextX2 = topContactsBaseLineX-150;
let leftNutcrackerGrnModeTextY2 = topContactsBaseLineY-16;
let rightNutcrackerGrnModeTextX2 = botContactsBaseLineX-150;
let rightNutcrackerGrnModeTextY2 = botContactsBaseLineY-16;

let leftThrottleIdleContactsTextX = topContactsBaseLineX+86;
let leftThrottleIdleContactsTextY = topContactsBaseLineY-16;
let rightThrottleIdleContactsTextX = botContactsBaseLineX+86;
let rightThrottleIdleContactsTextY = botContactsBaseLineY-16;

let leftThrottleIdleX1 = topContactsBaseLineX;
let leftThrottleIdleY1 = 280;
let leftThrottlePowerX1 = topContactsBaseLineX;
let leftThrottlePowerY1 = 180;

let spoilerPanelLocationX = 350;
let spoilerPanelLocationY = 218;

let rightThrottleIdleX1 = leftThrottleIdleX1 + 100;
let rightThrottleIdleY1 = leftThrottleIdleY1;
let rightThrottlePowerX1 = leftThrottlePowerX1 + 100;
let rightThrottlePowerY1 = leftThrottlePowerY1;
// aaaa
//
let throttleWidth = 80;
let throttleHeight = 50;
let contactsOpenHeight = 40;
let leftThrottleIdleFlag = _IDLE;
let rightThrottleIdleFlag = _IDLE;
let groundSpoilerArmSwitchFlag = _NOTARMED;
let groundSpoilerTestSwitchFlag = _NOTEST;
let primaryHydraulicValveX = topContactsBaseLineX + 450;
let secondaryHydraulicValveX = primaryHydraulicValveX;
let primaryHydraulicValveY = 100;
let secondaryHydraulicValveY = 450;

let groundSpoilerArmSwitchX = topContactsBaseLineX+280;
let groundSpoilerArmSwitchY = 280;
let groundSpoilerArmSwitchWidth = 50;
let groundSpoilerArmSwitchHeight = 50;
let groundSpoilerArmSwitchTextX = groundSpoilerArmSwitchX-30;
let groundSpoilerArmSwitchTextY = 280;

let groundSpoilerArmSwitchToggleX = primaryHydraulicValveX+196;
let groundSpoilerArmSwitchToggleY = 350;
let groundSpoilerArmSwitchToggleWidth = 50;
let groundSpoilerArmSwitchToggleHeight = 50;
let groundSpoilerArmSwitchTextToggleX = secondaryHydraulicValveX+38;
let groundSpoilerArmSwitchTextToggleY = secondaryHydraulicValveY-68;

let groundSpoilerCBToggleX = 34;
let groundSpoilerCBToggleY = 246;
let groundSpoilerCBToggleWidth = 70;
let groundSpoilerCBToggleHeight = 80;
let groundSpoilerCBFlag = _CLOSED;

let groundSpoilerTestSwitchX = primaryHydraulicValveX+196;
let groundSpoilerTestSwitchY = 260;
let groundSpoilerTestSwitchWidth = 50;
let groundSpoilerTestSwitchHeight = 50;
let groundSpoilerTestSwitchTextX = groundSpoilerTestSwitchX-160;
let groundSpoilerTestSwitchTextY = groundSpoilerTestSwitchY+30;

let leftThrottleToggleButtonX = primaryHydraulicValveX + 60;
let leftThrottleToggleButtonY = 570;
let leftThrottleToggleButtonWidth = 80;
let leftThrottleToggleButtonHeight = 50;
let leftThrottleToggleButtonTextX = leftThrottleToggleButtonX - 20;
let leftThrottleToggleButtonTextY = 640;

let rightThrottleToggleButtonX = leftThrottleToggleButtonX + 120;
let rightThrottleToggleButtonY = 570;
let rightThrottleToggleButtonWidth = 80;
let rightThrottleToggleButtonHeight = 50;
let rightThrottleToggleButtonTextX = leftThrottleToggleButtonX + 104;
let rightThrottleToggleButtonTextY = 640;

let resetToggleButtonX = rightThrottleToggleButtonX + 120;
let resetToggleButtonY = 570;
let resetToggleButtonWidth = 80;
let resetToggleButtonHeight = 50;
let resetToggleButtonTextX = rightThrottleToggleButtonX + 108;
let resetToggleButtonTextY = 640;

let soundToggleButtonX = rightThrottleToggleButtonX;
let soundToggleButtonY = 670;
let soundToggleButtonWidth = 118;
let soundToggleButtonHeight = 50;
let soundToggleButtonTextX = rightThrottleToggleButtonX -16;
let soundToggleButtonTextY = 720;

let combinedUtilityAuxTextX = primaryHydraulicValveX - 12;
let combinedUtilityAuxTextY = 30;

let primaryValveIDTextX = primaryHydraulicValveX+40;
//let primaryValveIDTextY = 100;
let secondaryValveIDTextX = primaryValveIDTextX;
//let secondaryValveIDTextY = 456;

let RED_NO_GND_SPOILERS_GlareshieldLightX = primaryValveIDTextX;
let RED_NO_GND_SPOILERS_GlareshieldLightY = 150;
let RED_GRN_SPOILER_CAS_X = RED_NO_GND_SPOILERS_GlareshieldLightX;
let RED_GRN_SPOILER_CAS_Y= 190;
let BLUE_GRN_SPOILER_UNARM_CAS_X = RED_NO_GND_SPOILERS_GlareshieldLightX;
let BLUE_GRN_SPOILER_UNARM_CAS_Y = 215;
let contactsSpacing = 100;
let nutcrackerContactsSpacing = 60;

let leftNutcrackerContactCircle1 = [topX+topContactsBaseLineX-180,topY+topContactsBaseLineY,12];
let leftNutcrackerContactCircle2 = [topX+topContactsBaseLineX-180+nutcrackerContactsSpacing,topY+topContactsBaseLineY,12];
let rightNutcrackerContactCircle1 = [topX+botContactsBaseLineX-180,topY+botContactsBaseLineY,12];
let rightNutcrackerContactCircle2 = [topX+botContactsBaseLineX-180+nutcrackerContactsSpacing,topY+botContactsBaseLineY,12];

let leftThrottleContactCircle1 = [topX+topContactsBaseLineX-10,topY+topContactsBaseLineY,12];
let leftThrottleContactCircle2 = [topX+topContactsBaseLineX+contactsSpacing,topY+topContactsBaseLineY,12];
let rightThrottleContactCircle1 = [topX+botContactsBaseLineX-10,topY+botContactsBaseLineY,12];
let rightThrottleContactCircle2 = [topX+botContactsBaseLineX+contactsSpacing,topY+botContactsBaseLineY,12];

let topGroundSpoilerArmContactCircle1 = [topX+groundSpoilerArmSwitchX-18,topY+topContactsBaseLineY,12];
let topGroundSpoilerArmContactCircle2 = [topX+groundSpoilerArmSwitchX-18+contactsSpacing,topY+topContactsBaseLineY,12];
let topGroundSpoilerArmContactCircle3 = [topX+groundSpoilerArmSwitchX-18,topY+topContactsBaseLineY,12];
let topGroundSpoilerArmContactCircle4 = [topX+groundSpoilerArmSwitchX-18+contactsSpacing,topY+topContactsBaseLineY,12];

let botGroundSpoilerArmContactCircle1 = [topX+groundSpoilerArmSwitchX-18,topY+botContactsBaseLineY,12];
let botGroundSpoilerArmContactCircle2 = [topX+groundSpoilerArmSwitchX-18+contactsSpacing,topY+botContactsBaseLineY,12];
let botGroundSpoilerArmContactCircle3 = [topX+groundSpoilerArmSwitchX-18,topY+botContactsBaseLineY,12];
let botGroundSpoilerArmContactCircle4 = [topX+groundSpoilerArmSwitchX-18+contactsSpacing,topY+botContactsBaseLineY,12];

let pipeWidth = 10;
let pipeLength = 0;

//let topLeftValveOpen = 0;
//let topRightValveOpen = 0;
//let botLeftValveOpen = 0;
//let botRightValveOpen = 0;
let pipeSegment50 = 50;
//let pipeSegment110 = 110;
let pipeSegment400 = 400;
let pipeSegment630 = 630;
//let debug1 = 0;
//let debug2 = 0;
//let debug3 = 0;
let debugging = true;
//let debugCounter = 0;
//let sound;
//let first_event = 0;
let ctx;

let zoomMinusButtonX = 10;//soundToggleButtonX - 650;
let zoomMinusButtonY = leftThrottlePowerY1;
let zoomMinusButtonWidth = 80;
let zoomMinusButtonHeight = 50;
let zoomMinusButtonTextX = zoomMinusButtonX + 12;
let zoomMinusButtonTextY = zoomMinusButtonY + (zoomMinusButtonHeight/2) + 6;

let zoomPlusButtonX = 10;//zoomMinusButtonX + zoomMinusButtonWidth + 20;
let zoomPlusButtonY = leftThrottleIdleY1;
let zoomPlusButtonWidth = zoomMinusButtonWidth;
let zoomPlusButtonHeight = zoomMinusButtonHeight;
let zoomPlusButtonTextX = zoomPlusButtonX + 16;
let zoomPlusButtonTextY = zoomPlusButtonY + (zoomPlusButtonHeight/2) + 6;

let xx = 1190;
let yy = 760;
let sxx = 1.0;
let syy = 1.0;
let sxxChange = 0.05;
let syyChange = 0.05;
let fps = 10;

let leftMainDCBusX = -17;
let leftMainDCBusY = 70;
let leftMainDCBusTextX = 12;
let leftMainDCBusTextY = 330;

function preload() {

}

function setup() {
  //frameRate(32);
  //scale(2,2)
  //ctx = createCanvas(1190, 760);
  //frameRate(fps);
  //console.log(getFrameRate());
}

//--------------------------------------------------------------------------------------------
function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()
}

//let myAudio = new Audio("spoilers5.wav");// (FF OK) (iOS not OK) (Edge OK)
//let myAudio = new Audio("spoilers5.mp3");// (FF OK) (iOS not OK) (Edge OK)
//let myAudio = new Audio("spoilers5.ogg");// (FF OK) (iOS not OK) (Edge OK)

//const myEvent = new Event('firstEvent')
//document.addEventListener('firstEvent', e => {
//console.log(e);
//first_event = 0;
//  mouse_touch();
//})
//document.dispatchEvent(myEvent)

//document.getElementById("clunk").play();

let _BG_COLOR = '#ffdfbf'; //

function draw() {
  //let c = document.getElementById("idcanvas");
  //ctx = c.getContext("2d");
  ctx = createCanvas(xx*sxx, yy*syy);
  ctx.scale(sxx,syy);
  background(_BG_COLOR);
  //background('#bfdfff'); // light Doger blue
  //background('#ffbbff'); // light magenta
  fill('#000000');//all shapes/text drawn after fill() will be that color
  strokeWeight(0);//must come before line()/text()
  textSize(20);
  text('GIV Ground Spoilers Test Trainer -- ' + version, 10, 24);
  text("Main Menu", 464, 24);
  strokeWeight(2);
  stroke('purple');//color
  line(464,29,560,29);
  
  // debug
  // fill('blue');
  // circle(soundToggleButtonX, soundToggleButtonY,10);
  // circle(soundToggleButtonX+soundToggleButtonWidth, soundToggleButtonY+soundToggleButtonHeight,10);

//text(window.navigator.userAgent, 10, 24);
// Firefox
// Edg
// Safari (both Safari and FF on iPad)
  //console.log('test');
  strokeWeight(0);
  textSize(20);
  fill('red');
  //text(flashRedCounter, 100, 300); // debug
  
  strokeWeight(0);
  stroke('red');//color
  if (mouseReleaseFlag == true) {
    groundSpoilerTestSwitchFlag = _NOTEST;
    mouseReleaseFlag = false;
  }
  // Text upper left corner ---------------------------------------------
  textSize(16);
  text('Schematic not affiliated with GAC or FSI.', 10, 620);
  text('Programming by ralphfreshour@gmail.com.', 10, 645);
  text('For Training Purposes Only.', 10, 670);
  text('(Formatted for iPad screens only)', 10, 695);
  //text('(This web page is undergoing modifications at this time!)', 10, 720);
  
  //fill('red');
  //circle(groundSpoilerArmSwitchToggleX,groundSpoilerArmSwitchToggleY,10);
  //circle(groundSpoilerArmSwitchToggleX + groundSpoilerArmSwitchToggleWidth,groundSpoilerArmSwitchToggleY + groundSpoilerArmSwitchToggleHeight,10);
  
  stroke('lightgray');//color
  strokeWeight(0);
  fill('white');
  pipeLength = pipeSegment630;
//    X                                        Y                              W           H
  rect((topX+primaryHydraulicValveX)-pipeWidth,topY+primaryHydraulicValveY-60,pipeWidth*2,pipeLength-pipeWidth*2);

//electrical contact circles ****************************************************************************************
// SET TOP CONTACT STATES  ------------------------------------------------
  if (leftThrottleIdleFlag == _POWER) {
    topValveOpen = _CLOSED;
  }
  else {
    if (leftThrottleIdleFlag == _IDLE) {
      if (groundSpoilerArmSwitchFlag == _ARMED) {
        if (groundSpoilerCBFlag == _CLOSED) {
          topValveOpen = _OPENED;
        }
      }
      else {
        topValveOpen = _CLOSED;
      }
    }
  }
// SET BOTTOM CONTACT STATES  ---------------------------------------------
  if (rightThrottleIdleFlag == _POWER) {
    botValveOpen = _CLOSED;
    //text('botValveOpen closed',10,80);
  }
  else {
    if (rightThrottleIdleFlag == _IDLE) {
      if (groundSpoilerArmSwitchFlag == _ARMED) {
        botValveOpen = _OPENED;
        //text('botValveOpen open',10,80);
      }
      else {
        botValveOpen = _CLOSED;
        //text('botValveOpen closed',10,80);
      }
    }
  }

  if (groundSpoilerCBFlag == _CLOSED) fill('red');
  if (groundSpoilerCBFlag == _OPENED) fill('black');
  circle(leftNutcrackerContactCircle1[0],leftNutcrackerContactCircle1[1],leftNutcrackerContactCircle1[2]);
  circle(leftNutcrackerContactCircle2[0],leftNutcrackerContactCircle2[1],leftNutcrackerContactCircle2[2]);
  circle(rightNutcrackerContactCircle1[0],rightNutcrackerContactCircle1[1],rightNutcrackerContactCircle1[2]);
  circle(rightNutcrackerContactCircle2[0],rightNutcrackerContactCircle2[1],rightNutcrackerContactCircle2[2]);
  
  if (groundSpoilerCBFlag == _CLOSED) fill('red');
  if (groundSpoilerCBFlag == _OPENED) fill('black');
  circle(leftThrottleContactCircle1[0],leftThrottleContactCircle1[1],leftThrottleContactCircle1[2]);//left throttle circle contact
  if (leftThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(leftThrottleContactCircle2[0],leftThrottleContactCircle2[1],leftThrottleContactCircle2[2]);//right throttle circle contact
  
  if (groundSpoilerCBFlag == _CLOSED) fill('red');
  if (groundSpoilerCBFlag == _OPENED) fill('black');
  circle(rightThrottleContactCircle1[0],rightThrottleContactCircle1[1],rightThrottleContactCircle1[2]);// right throttle left circle contact
  if (rightThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(rightThrottleContactCircle2[0],rightThrottleContactCircle2[1],rightThrottleContactCircle2[2]);// right throttle right circle contact
  
  if (topValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(topGroundSpoilerArmContactCircle1[0],topGroundSpoilerArmContactCircle1[1],topGroundSpoilerArmContactCircle1[2]);
  if (topValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(topGroundSpoilerArmContactCircle2[0],topGroundSpoilerArmContactCircle2[1],topGroundSpoilerArmContactCircle2[2]);
  if (leftThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(topGroundSpoilerArmContactCircle3[0],topGroundSpoilerArmContactCircle3[1],topGroundSpoilerArmContactCircle3[2]);
  if (topValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(topGroundSpoilerArmContactCircle4[0]+0,topGroundSpoilerArmContactCircle4[1],topGroundSpoilerArmContactCircle4[2]);
// ---------------------------------------------------------------------------------------------------------------------
  if (botValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(botGroundSpoilerArmContactCircle1[0],botGroundSpoilerArmContactCircle1[1],botGroundSpoilerArmContactCircle1[2]);
  if (rightThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(botGroundSpoilerArmContactCircle2[0],botGroundSpoilerArmContactCircle2[1],botGroundSpoilerArmContactCircle2[2]);
  if (rightThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(botGroundSpoilerArmContactCircle3[0],botGroundSpoilerArmContactCircle3[1],botGroundSpoilerArmContactCircle3[2]);
  if (botValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) fill('red');
    if (groundSpoilerCBFlag == _OPENED) fill('black');
  }
  else {
    fill('black');//color
  }
  circle(botGroundSpoilerArmContactCircle4[0],botGroundSpoilerArmContactCircle4[1],botGroundSpoilerArmContactCircle4[2]);
  
  //primary hydraulic valve electrical lines ***************************************************************************
  strokeWeight(2);
  if (groundSpoilerCBFlag == _CLOSED) stroke('red');
  if (groundSpoilerCBFlag == _OPENED) stroke('black');
  line(90,topY+topContactsBaseLineY,leftThrottleContactCircle1[0],leftThrottleContactCircle1[1]);//line before left throttle contacts
  if (leftThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
  }
  else {
    stroke('black');//color
  }
  strokeWeight(2);
  line(leftThrottleContactCircle2[0]+6,topY+primaryHydraulicValveY,topGroundSpoilerArmContactCircle1[0]-6,topY+primaryHydraulicValveY);//line after left throttle contact
  if (groundSpoilerArmSwitchFlag == _ARMED) {
    if (topValveOpen) {
      if (groundSpoilerCBFlag == _CLOSED) stroke('red');
      if (groundSpoilerCBFlag == _OPENED) stroke('black');
    }
    else {
      stroke('black');//color
    }
    strokeWeight(3);
    line(topGroundSpoilerArmContactCircle1[0]+6,topY+primaryHydraulicValveY,topGroundSpoilerArmContactCircle2[0]-6,topY+primaryHydraulicValveY);//primary hydraulic valve contact
  }
  else {
    if (leftThrottleIdleFlag == _IDLE) {
      if (groundSpoilerCBFlag == _CLOSED) stroke('red');
      if (groundSpoilerCBFlag == _OPENED) stroke('black');
    }
    else {
      stroke('black');//color
    }
    strokeWeight(3);
    line(topGroundSpoilerArmContactCircle1[0]+6,topY+primaryHydraulicValveY,topGroundSpoilerArmContactCircle2[0]-6,topY+primaryHydraulicValveY-contactsOpenHeight);//primary hydraulic valve contact
  }
  if (topValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
  }
  else {
    stroke('black');//color
  }
  strokeWeight(2);
  line(topGroundSpoilerArmContactCircle4[0]+6,topY+primaryHydraulicValveY,topX+primaryHydraulicValveX,topY+primaryHydraulicValveY);//line after ground spoiler contact to primary hydraulic valve
  
  //secondary hydraulic valve electrical lines *************************************************************************
  strokeWeight(2);
  if (groundSpoilerCBFlag == _CLOSED) stroke('red');
  if (groundSpoilerCBFlag == _OPENED) stroke('black');
  line(90,topY+botContactsBaseLineY,rightThrottleContactCircle1[0],rightThrottleContactCircle1[1]);//line before right throttle contacts
  if (rightThrottleIdleFlag == _IDLE) {
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
  }
  else {
    stroke('black');//color
  }
  strokeWeight(2);
  line(rightThrottleContactCircle2[0]+6,topY+secondaryHydraulicValveY,botGroundSpoilerArmContactCircle1[0]-6,topY+secondaryHydraulicValveY);//line after right throttle contact
  if (groundSpoilerArmSwitchFlag == _ARMED) {
    if (rightThrottleIdleFlag == _IDLE) {
      if (groundSpoilerCBFlag == _CLOSED) stroke('red');
      if (groundSpoilerCBFlag == _OPENED) stroke('black');
    }
    else {
      stroke('black');//color
    }
    strokeWeight(3);
    line(botGroundSpoilerArmContactCircle1[0]+6,topY+secondaryHydraulicValveY,botGroundSpoilerArmContactCircle2[0]-6,topY+secondaryHydraulicValveY);//secondary hydraulic valve contact
  }
  else {
    if (rightThrottleIdleFlag == _IDLE) {
      if (groundSpoilerCBFlag == _CLOSED) stroke('red');
      if (groundSpoilerCBFlag == _OPENED) stroke('black');
    }
    else {
      stroke('black');//color
    }
    strokeWeight(3);
    line(botGroundSpoilerArmContactCircle1[0]+6,topY+secondaryHydraulicValveY,botGroundSpoilerArmContactCircle2[0]-6,topY+secondaryHydraulicValveY-contactsOpenHeight);//secondary hydraulic valve contact
  }
  if (botValveOpen) {
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
  }
  else {
    stroke('black');//color
  }
  strokeWeight(2);
  line(botGroundSpoilerArmContactCircle4[0]+6,topY+secondaryHydraulicValveY,topX+secondaryHydraulicValveX,topY+secondaryHydraulicValveY);//line after ground spoiler contact to secondary hydraulic valve
  
  // draw Ground Spoiler circuit breaker *******************************************************************************
  strokeWeight(1);
  stroke('red');//color
  fill(_BG_COLOR);
  //       x       y   w  h          start        stop
  if (groundSpoilerCBFlag == _CLOSED) {
    stroke('red');//color
    fill(_BG_COLOR);
    arc(topX+50,topY+276,20,20,radians(180),radians(360),OPEN);
    fill('red');
    line(topX+45,topY+256,topX+55,256);// top horizontal CB line
    line(topX+50,topY+256,topX+50,264);// top vertical CB line
    line(topX+80,topY+450,topX+80,100);// top vertical CB wire coming out of CB circle
    line(topX+60,topY+276,topX+80,276);//line coming out of CB
  }
  else {
    stroke('black');//color
    fill('black');
    fill(_BG_COLOR);
    arc(topX+50,topY+276,20,20,radians(180),radians(360),OPEN);
    line(topX+45,topY+246,topX+55,246);// top horizontal CB line
    line(topX+50,topY+246,topX+50,264);// top vertical CB line
    line(topX+60,topY+276,topX+80,276);//line coming out of CB
    stroke('black');//color
    fill('black');
    line(topX+80,topY+450,topX+80,100);// top vertical CB wire coming out of CB circle
  }

  fill('red');
  stroke('red');//color
  line(topX+20,topY+276,topX+40,276);// line coming out of bus

  if (groundSpoilerCBFlag == _CLOSED) {
    fill('red');
    stroke('red');//color
    circle(topX+80,topY+275,12);
  }
  if (groundSpoilerCBFlag == _OPENED) {
    fill('black');
    stroke('black');//color
    circle(topX+80,topY+275,12);
  }

  strokeWeight(0);
  fill('black');
  stroke('black');//color
  text('Gnd', topX+groundSpoilerCBToggleX,topY+groundSpoilerCBToggleY-10);
  text('Spoiler', topX+26,topY+298);
  
  //  fill('black');
  strokeWeight(0);
  textSize(16);
  text('Left Nutcracker', topX+leftNutcrackerTextX1+20, topY+leftNutcrackerTextY1);
  text('Right Nutcracker', topX+rightNutcrackerTextX1+24, topY+rightNutcrackerTextY1);
  text('Grn Mode', topX+leftNutcrackerGrnModeTextX2, topY+leftNutcrackerGrnModeTextY2);
  text('Grn Mode', topX+rightNutcrackerGrnModeTextX2, topY+rightNutcrackerGrnModeTextY2);
  //fill('blue');
  text('Idle', topX+leftThrottleIdleContactsTextX, topY+leftThrottleIdleContactsTextY);
  text('Idle', topX+rightThrottleIdleContactsTextX, topY+rightThrottleIdleContactsTextY);
  
  fill('black');
  text('Power', topX+leftThrottlePowerX1-52, topY+leftThrottlePowerY1+30);
  text('Power', topX+rightThrottlePowerX1+86, topY+leftThrottlePowerY1+30);
  text('Idle', topX+leftThrottleIdleX1-30, topY+leftThrottleIdleY1+30);
  text('Idle', topX+rightThrottleIdleX1+86, topY+leftThrottleIdleY1+30);
  text('Combined/Utility/Auxiliary', topX+combinedUtilityAuxTextX, topY+combinedUtilityAuxTextY);
  text('Primary Valve', topX+primaryValveIDTextX, topY+primaryHydraulicValveY+8);
  text('Secondary Valve', topX+secondaryValveIDTextX, topY+secondaryHydraulicValveY+8);
  if (groundSpoilerCBFlag == _CLOSED) stroke('red');
  if (groundSpoilerCBFlag == _OPENED) stroke('black');

//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
  drawLeftMainDCBus();
  
  drawLeftThrottle();
  
  drawRightThrottle();
  
  drawLeftThrottleIdleVerticalContactLines();
  
  drawRightThrottleIdleVerticalContactLines();
  
  drawGroundSpoilerArmSwitch();
  
  drawGroundSpoilerArmSwitchToggle();
  
  drawLeftThrottleToggle();
  
  drawRightThrottleToggle();
  
  drawResetToggle();
  
  //drawZoomMinusToggle(); // not using at this time
  //drawZoomPlusToggle();
  
  drawSoundToggle();
  
  drawGroundSpoilerTestSwitch();
  
  previousSpoilerState = drawHydraulicPipingLogic();
  
  // fill('lightgray');
  // stroke('blue');//color
  // strokeWeight(3);
  // rect(topX+groundSpoilerCBToggleX-12, topY+groundSpoilerCBToggleY-16,groundSpoilerCBToggleWidth, groundSpoilerCBToggleHeight);

//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
  
  //fill('blue');
  //stroke('blue');//color
//circle(topX+leftThrottlePowerX1,topY+leftThrottlePowerY1,20);
  //fill('red');
  //stroke('red');//color
//circle(topX+rightThrottlePowerX1,topY+leftThrottlePowerY1,20);

fill('red');
textSize(20);
let y9 = 120;
text('spoilersUp ' +                                 spoilersUp, 50, y9+45);
text('spoilerAnimationInProgress ' + spoilerAnimationInProgress, 50, y9+65);
text('spoilersAnimatingCount ' +          spoilersAnimatingCount,50,y9+85);
text('spoilersLastCommand ' +               spoilersLastCommand, 50, y9+105);
text('groundSpoilerCBFlag ' +                groundSpoilerCBFlag,50,y9+140);

}

function drawLeftMainDCBus() {
  fill(_BG_COLOR);
  stroke('red');
  strokeWeight(2);
  rect(topX+leftMainDCBusX+8, topY+leftMainDCBusY+0, 30, 410, 0);//0 radiu
  fill('black');
  strokeWeight(0);
  push();
  translate(topX+leftMainDCBusTextX,topY+leftMainDCBusTextY);
  rotate(radians(270));
  text('Left Main DC Bus', 0, 0)
  pop();
}
function drawZoomMinusToggle() {
  // fill('lightgray');
  // stroke('blue');//color
  // strokeWeight(3);
  // rect(topX+zoomMinusButtonX, topY+zoomMinusButtonY,zoomMinusButtonWidth,zoomMinusButtonHeight, 5);//5 radius
  // fill('black');
  // strokeWeight(0);
  // text('Smaller', topX+zoomMinusButtonTextX,topY+zoomMinusButtonTextY);
  // debug
  // fill('red');
  // circle(zoomMinusButtonX, zoomMinusButtonY,10);
  // circle(zoomMinusButtonX+zoomMinusButtonWidth, zoomMinusButtonY+zoomMinusButtonHeight,10);
}

function drawZoomPlusToggle() {
  // fill('lightgray');
  // stroke('blue');//color
  // strokeWeight(3);
  // rect(topX+zoomPlusButtonX, topY+zoomPlusButtonY,zoomPlusButtonWidth,zoomPlusButtonHeight, 5);//5 radius
  // fill('black');
  // strokeWeight(0);
  // text('Bigger', topX+zoomPlusButtonTextX,topY+zoomPlusButtonTextY);
  
  // debug
  // fill('blue');
  // circle(zoomPlusButtonX, zoomPlusButtonY,10);
  // circle(zoomPlusButtonX+zoomPlusButtonWidth, zoomPlusButtonY+zoomPlusButtonHeight,10);
}

function paintCASscreen() {
  clearCASScreen();
  
  strokeWeight(0);
  textSize(20);
  fill('gray');
  text('GRN SPOILER', topX+RED_GRN_SPOILER_CAS_X+20, topY+RED_GRN_SPOILER_CAS_Y+10);
  text('NO GND SPOILERS',topX + RED_NO_GND_SPOILERS_GlareshieldLightX + 20,topY + RED_NO_GND_SPOILERS_GlareshieldLightY + 10);
  text('GRN SPOILER UNARM', topX+BLUE_GRN_SPOILER_UNARM_CAS_X+20, topY+BLUE_GRN_SPOILER_UNARM_CAS_Y+10);
  
  strokeWeight(1);
  stroke('gray'); // light gray
  line(topX+primaryHydraulicValveX+60,topY+primaryHydraulicValveY+73,topX+primaryHydraulicValveX+280,topY+primaryHydraulicValveY+73);
  //line dividing glareshield/CAS messages
}

function clearCASScreen() {
  fill('black');
  stroke('black');
  strokeWeight(1);
  rect(topX+RED_GRN_SPOILER_CAS_X+8, topY+RED_GRN_SPOILER_CAS_Y-60, 240, 110, 5);//5 radius
}

function drawSpoiler_CAS_Messages() {
  paintCASscreen();
  
  strokeWeight(0);
  textSize(20);
  
  if (groundSpoilerArmSwitchFlag == _NOTARMED && leftThrottleIdleFlag == _IDLE && rightThrottleIdleFlag == _IDLE ) {
    fill('gray'); // gray
    text('GRN SPOILER', topX+RED_GRN_SPOILER_CAS_X+20, topY+RED_GRN_SPOILER_CAS_Y+10);
  }
  if (groundSpoilerArmSwitchFlag == _ARMED && leftThrottleIdleFlag == _IDLE && rightThrottleIdleFlag == _IDLE ) {
    fill('gray'); // gray
    text('GRN SPOILER', topX+RED_GRN_SPOILER_CAS_X+20, topY+RED_GRN_SPOILER_CAS_Y+10);
  }
  if (flashingRedCASmessages == false) {
    if (groundSpoilerArmSwitchFlag == _NOTARMED) {
      fill('cyan');
      text('GRN SPOILER UNARM', topX+BLUE_GRN_SPOILER_UNARM_CAS_X+20, topY+BLUE_GRN_SPOILER_UNARM_CAS_Y+10);
    }
  }
  else {
    //if (flashRedCounter == 0) {
    strokeWeight(0);
    textSize(20);
    fill('red');
    text('NO GND SPOILERS',topX + RED_NO_GND_SPOILERS_GlareshieldLightX + 20,topY + RED_NO_GND_SPOILERS_GlareshieldLightY + 10);
    //console.log('NO GND SPOILERS red');
    //}
  }
  if ((groundSpoilerArmSwitchFlag == _ARMED && topValveOpen && botValveOpen) ||
    (groundSpoilerArmSwitchFlag == _ARMED && !topValveOpen && botValveOpen) ||
    (groundSpoilerArmSwitchFlag == _ARMED && topValveOpen && !botValveOpen)) {
  }
  if (groundSpoilerTestSwitchFlag == _TEST) {
    fill('red');
    text('GRN SPOILER', topX+RED_GRN_SPOILER_CAS_X+20, topY+RED_GRN_SPOILER_CAS_Y+10);
    text('NO GND SPOILERS', topX+RED_NO_GND_SPOILERS_GlareshieldLightX+20, topY+RED_NO_GND_SPOILERS_GlareshieldLightY+10);
    fill('cyan');
    text('GRN SPOILER UNARM', topX+BLUE_GRN_SPOILER_UNARM_CAS_X+20, topY+BLUE_GRN_SPOILER_UNARM_CAS_Y+10);
  }
  
  
  
  
  if (flashingRedCASmessages == false) {
  
  }
  else {
    if (flashRedCounter == 0) {
      strokeWeight(0);
      textSize(20);
      fill('red');
      text('NO GND SPOILERS',topX + RED_NO_GND_SPOILERS_GlareshieldLightX + 20,topY + RED_NO_GND_SPOILERS_GlareshieldLightY + 10);
      //console.log('NO GND SPOILERS red');
    }
    if (flashRedCounter > 100) {
      strokeWeight(0);
      textSize(20);
      fill('gray');
      text('NO GND SPOILERS',topX + RED_NO_GND_SPOILERS_GlareshieldLightX + 20,topY + RED_NO_GND_SPOILERS_GlareshieldLightY + 10);
      //console.log('NO GND SPOILERS gray');
      flashRedCounter = 999;
      flashingRedCASmessages = false;
    }
    flashRedCounter++;
    //console.log('--------------------------');
  }
  textSize(12);
} // end

function flash_NO_GND_SPOILERS() {
  // if (flashingRedCASmessages == false) {
  //   return;
  // }
  // if (flashRedCounter == 0) {
  //   strokeWeight(0);
  //   textSize(20);
  //   fill('red');
  //   text('NO GND SPOILERS', topX+RED_NO_GND_SPOILERS_GlareshieldLightX+20, topY+RED_NO_GND_SPOILERS_GlareshieldLightY+10);
  //   console.log('NO GND SPOILERS red');
  // }
  // if (flashRedCounter > 100) {
  //   strokeWeight(0);
  //   textSize(20);
  //   fill('gray');
  //   text('NO GND SPOILERS', topX+RED_NO_GND_SPOILERS_GlareshieldLightX+20, topY+RED_NO_GND_SPOILERS_GlareshieldLightY+10);
  //   console.log('NO GND SPOILERS gray');
  //   flashRedCounter = 999;
  //   flashingRedCASmessages = false;
  // }
  // flashRedCounter++;
  // console.log('--------------------------');
}
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}
function drawSpoilerPanels() {
  //console.log("drawSpoilerPanels() -------------------------------------");
  spoilersUp = _YES;
  if (leftThrottleIdleFlag == _POWER) spoilersUp = _NO;
  if (rightThrottleIdleFlag == _POWER) spoilersUp = _NO;
  if (topValveOpen == _CLOSED) spoilersUp = _NO;
  if (botValveOpen == _CLOSED) spoilersUp = _NO;
  // spoilers going UP *************************************************************************************************
  // spoilers going UP *************************************************************************************************
  // spoilers going UP *************************************************************************************************
  // spoilers going UP *************************************************************************************************
  if (spoilersUp == _YES && spoilerAnimationInProgress == false && spoilersAnimatingCount == 0 && spoilersLastCommand == "down") {
    console.log(20);
    spoilersLastCommand = "up";
    spoilerAnimationInProgress = true;
  }
  if (spoilersUp == _YES && spoilerAnimationInProgress == true && spoilersAnimatingCount == 0 && spoilersLastCommand == "up") {
    console.log(21);
    spoilersAnimatingCount = 0;
    spoilersLastCommand = "up";
  }
  if (spoilersUp == _YES && spoilerAnimationInProgress == true && spoilersLastCommand == "up") {
    spoilersAnimatingCount++;
    if (spoilersAnimatingCount >= 0 && spoilersAnimatingCount <= 15) {
      console.log(22);
      spoilerPanels25();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 16 && spoilersAnimatingCount <= 40) {
      spoilerPanelsHalf();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 41 && spoilersAnimatingCount <= 65) {
      spoilerPanels75();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 66 && spoilersAnimatingCount <= 90) {
      spoilerPanelsUp();
      drawGroundSpoilerPanelsText();
      spoilersLastCommand = "up";
      spoilersAnimatingCount = 912;
      spoilerAnimationInProgress = false;
      console.log(23);
    }
    return;
  }
  if (spoilersUp == _YES && spoilerAnimationInProgress == false && spoilersAnimatingCount == 912 && spoilersLastCommand == "up") {
    console.log(24);
    spoilerPanelsUp();
    spoilersLastCommand = "up";
  }
  // spoilers coming DOWN **********************************************************************************************
  // spoilers coming DOWN **********************************************************************************************
  // spoilers coming DOWN **********************************************************************************************
  // spoilers coming DOWN **********************************************************************************************
  if (spoilersUp == _NO && spoilerAnimationInProgress == false && (spoilersAnimatingCount == 0 || spoilersAnimatingCount == 913) && spoilersLastCommand == "up") {
    console.log(10);
    spoilersLastCommand = "down";
    spoilerAnimationInProgress = true;
  }
  if (spoilersUp == _NO && spoilerAnimationInProgress == true && (spoilersAnimatingCount == 0 || spoilersAnimatingCount == 913) && spoilersLastCommand == "down") {
    console.log(11);
    spoilersAnimatingCount = 0;
    spoilersLastCommand = "down";
  }
  if (spoilersUp == _NO && spoilerAnimationInProgress == true && spoilersLastCommand == "down") {
    spoilersAnimatingCount++;
    if (spoilersAnimatingCount >= 0 && spoilersAnimatingCount <= 15) {
      console.log(12);
      spoilerPanels75();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 16 && spoilersAnimatingCount <= 40) {
      spoilerPanelsHalf();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 41 && spoilersAnimatingCount <= 65) {
      spoilerPanels25();
      drawGroundSpoilerPanelsText();
    }
    if (spoilersAnimatingCount >= 66 && spoilersAnimatingCount <= 90) {
      console.log(13);
      spoilerPanelsDown();
      drawGroundSpoilerPanelsText();
      spoilersLastCommand = "down";
      spoilersUp = _NO;
      spoilersAnimatingCount = 911;
      spoilerAnimationInProgress = false;
    }
    return;
  }
  if (spoilersUp == _NO && spoilerAnimationInProgress == false && (spoilersAnimatingCount == 911 || spoilersAnimatingCount == 0) && spoilersLastCommand == "down") {
    console.log(14);
    spoilerPanelsDown();
    spoilersLastCommand = "down";
  }
  if (spoilersAnimatingCount == 914) {
    console.log(15);
    spoilerPanelsDown();
    spoilersLastCommand = "down";
  }

  if (alertCount == 0) {
    // alert(
    //   'spoilersUp ' +spoilersUp +
    //   '\nspoilerAnimationInProgress ' + spoilerAnimationInProgress +
    //   '\nspoilersAnimatingCount '     + spoilersAnimatingCount +
    //   '\nspoilersLastCommand '        + spoilersLastCommand
    // );
    alertCount++;
  }
  //console.log("9999 spoilers down");
  //console.log(".... spoilersUp " + spoilersUp);
  //console.log(".... spoilersAnimatingCount " + spoilersAnimatingCount);
  //console.log(".... spoilersLastCommand " + spoilersLastCommand);
  //console.log("----------------------------------------------");

  drawGroundSpoilerPanelsText();
}

function drawGroundSpoilerPanelsText() {
  fill('black');
  stroke('black');//color
  strokeWeight(0);
  text('Spoiler Panels', topX+spoilerPanelLocationX+260,topY+spoilerPanelLocationY+454);
}

function playSound() {
  if (playSoundFlag == true) {
    document.getElementById('mySound').play();
  }
}

// function OPEN() {

// }
// function radians(number) {
//   return undefined;
// }
// function PIE() {

// }


function spoilerPanelsUp() {
  fill('gray');
  stroke('gray');//color
  //fill('red');
  //stroke('red');
  var i = 0;
  var x = 226; //283;
  var y = 435; //294;
  //noLoop();
  //frameRate(fps);
  // for (i=0;i<150;i++) {
  //   //circle(topX+spoilerPanelLocationX+226,topY+spoilerPanelLocationY+435,10);
  //   circle(topX + spoilerPanelLocationX + x,topY + spoilerPanelLocationY - y,10);
  circle(topX + spoilerPanelLocationX + 283,topY + spoilerPanelLocationY + 294,10);
  //   x = x + 0.25;
  //   y = y - 1.5;
  //   //redraw(100);
  //   //for (ii=0.0;ii<2000000;ii++) {
  //     //ii++;
  //   //}
  //   //wait(30);
  // }
  //frameRate(fps);
  //loop();
  //return;
  beginShape();// spoiler panel up
  vertex(topX + spoilerPanelLocationX + 285,topY + spoilerPanelLocationY + 289);
  vertex(topX + spoilerPanelLocationX + 410,topY + spoilerPanelLocationY + 416);
  vertex(topX + spoilerPanelLocationX + 393,topY + spoilerPanelLocationY + 438);
  vertex(topX + spoilerPanelLocationX + 280,topY + spoilerPanelLocationY + 297);
  endShape();
  
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //stroke('cyan');//color
  //fill('cyan');
  //  x                                   y                        w    h            start        stop
  arc(topX + spoilerPanelLocationX - 93,topY + spoilerPanelLocationY + 701,1100,1100,radians(310),radians(340),OPEN);
  
  fill('gray');
  stroke('black');//color
  strokeWeight(1);
  circle(topX + spoilerPanelLocationX + 400,topY + spoilerPanelLocationY + 426,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}

function spoilerPanelsHalf() {
  fill('gray');//gray end small circle
  stroke('gray');//gray end small circle
  //fill('red');
  //stroke('red');
  circle(topX+spoilerPanelLocationX+240,topY+spoilerPanelLocationY+360,10);
  
  fill('gray');//gray end small circle
  stroke('gray');//gray end small circle
  beginShape();// spoiler panel up
  vertex(topX+spoilerPanelLocationX+243,topY+spoilerPanelLocationY+355);
  vertex(topX+spoilerPanelLocationX+408,topY+spoilerPanelLocationY+413);
  vertex(topX+spoilerPanelLocationX+393,topY+spoilerPanelLocationY+440);
  vertex(topX+spoilerPanelLocationX+242,topY+spoilerPanelLocationY+363);
  endShape();
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //stroke('cyan');//bottom spoiler panel arc shape
  //fill('cyan');
  //  x                                   y                         w    h            start        stop
  arc(topX+spoilerPanelLocationX+76,topY+spoilerPanelLocationY+889,1100,1100,radians(280),radians(310),OPEN);
  
  fill('gray');//gray
  stroke('black');//black end large circle
  strokeWeight(1);
  circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+426,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}
function spoilerPanels_NewPanel() {
  fill('gray');
  stroke('gray');//color
  //fill('red');
  //stroke('red');
  circle(topX+spoilerPanelLocationX+228,topY+spoilerPanelLocationY+390,10);
  
  fill('red');//gray end small circle
  stroke('red');//gray end small circle
  beginShape();// spoiler panel up
  vertex(topX+spoilerPanelLocationX+226,topY+spoilerPanelLocationY+385);
  vertex(topX+spoilerPanelLocationX+408,topY+spoilerPanelLocationY+413);
  vertex(topX+spoilerPanelLocationX+393,topY+spoilerPanelLocationY+440);
  vertex(topX+spoilerPanelLocationX+226,topY+spoilerPanelLocationY+394);
  endShape();
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //stroke('red');//bottom spoiler panel arc shape
  //fill('red');
  //  x                                   y                         w    h            start        stop
  arc(topX+spoilerPanelLocationX+170,topY+spoilerPanelLocationY+942,1100,1100,radians(240),radians(320),OPEN);
  
  fill('blue');//gray
  stroke('blue');//gray end large circle
  strokeWeight(1);
  circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+426,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}

function spoilerPanels_paintLargeGrayArc() {
  stroke('#c0c0c0');//bottom spoiler panel arc shape
  fill(200,150);// 200==color(0-255), 40==transparency(0-255)
  //  x                                   y                         w    h          start      stop
  arc(topX+spoilerPanelLocationX+412,topY+spoilerPanelLocationY+430,382,382,radians(178),radians(228),PIE);
}
function spoilerPanels_clearLargeGrayArc() {
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //  x                                   y                         w    h          start      stop
  arc(topX+spoilerPanelLocationX+412,topY+spoilerPanelLocationY+430,382,382,radians(178),radians(228),PIE);
}

function spoilerPanelsDown() {
  fill('gray');
  stroke('gray');//color
  //fill('red');
  //stroke('red');
  circle(topX+spoilerPanelLocationX+226,topY+spoilerPanelLocationY+435,10);
  beginShape();// spoiler panel down
  vertex(topX+spoilerPanelLocationX+228,topY+spoilerPanelLocationY+430);
  vertex(topX+spoilerPanelLocationX+398,topY+spoilerPanelLocationY+411);
  vertex(topX+spoilerPanelLocationX+397,topY+spoilerPanelLocationY+439);
  vertex(topX+spoilerPanelLocationX+228,topY+spoilerPanelLocationY+440);
  endShape();
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //stroke('cyan');//bottom spoiler panel arc shape
  //fill('cyan');
  //  x                          y                                  w    h                 start        stop
  arc(topX+spoilerPanelLocationX+318,topY+spoilerPanelLocationY+981,1100,1100,radians(258),radians(284), OPEN);
  //fill('red');
  //circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+500,20);
  
  fill('gray');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+425,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}
function spoilerPanels25() {
  fill('gray');
  stroke('gray');//color
  circle(topX+spoilerPanelLocationX+231,topY+spoilerPanelLocationY+398,10);
  //return;
  beginShape();// spoiler panel down
  vertex(topX+spoilerPanelLocationX+234,topY+spoilerPanelLocationY+393);
  vertex(topX+spoilerPanelLocationX+408,topY+spoilerPanelLocationY+412);
  vertex(topX+spoilerPanelLocationX+401,topY+spoilerPanelLocationY+440);
  vertex(topX+spoilerPanelLocationX+234,topY+spoilerPanelLocationY+403);
  endShape();
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //  x                          y                                  w    h                 start        stop
  arc(topX+spoilerPanelLocationX+202,topY+spoilerPanelLocationY+951,1100,1100,radians(268),radians(296), OPEN);
  //fill('red');
  //circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+500,20);
  fill('gray');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+425,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}
function spoilerPanels75() {
  fill('gray');
  stroke('gray');//color
  //fill('red');
  //stroke('red');
  circle(topX+spoilerPanelLocationX+256,topY+spoilerPanelLocationY+320,10);
  //return;
  beginShape();// spoiler panel down
  vertex(topX+spoilerPanelLocationX+259,topY+spoilerPanelLocationY+315);
  vertex(topX+spoilerPanelLocationX+408,topY+spoilerPanelLocationY+413);
  vertex(topX+spoilerPanelLocationX+401,topY+spoilerPanelLocationY+441);
  vertex(topX+spoilerPanelLocationX+255,topY+spoilerPanelLocationY+325);
  endShape();
  fill(_BG_COLOR);
  stroke(_BG_COLOR);//color
  //stroke('cyan');//bottom spoiler panel arc shape
  //fill('cyan');
  //  x                          y                                  w    h                 start        stop
  arc(topX+spoilerPanelLocationX-20,topY+spoilerPanelLocationY+801,1100,1100,radians(295),radians(325), OPEN);
  //fill('red');
  //circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+500,20);
  
  fill('gray');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+spoilerPanelLocationX+400,topY+spoilerPanelLocationY+425,28);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
}

function drawPrimaryHydraulicValveOpen(centerX,centerY,diameter,topRightPoint,botRightPoint,topLeftPoint,botLeftPoint) {
  fill('white');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+centerX,topY+centerY,diameter);
  fill('white');
  //  x                      y        w                      h                      start                  stop
  arc(topX+centerX-diameter*0.40, topY+centerY, diameter+diameter*0.79,diameter+diameter*0.25,radians(topRightPoint),radians(botRightPoint),CHORD);
  arc(topX+centerX+diameter*0.40, topY+centerY, diameter+diameter*0.79,diameter+diameter*0.25,radians(topLeftPoint),radians(botLeftPoint),CHORD);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
  //line(topX+centerX-diameter*0.17,topY+242,centerX-diameter*0.17,topY+372);//top left line
  //line(topX+centerX+diameter*0.17,topY+242,centerX+diameter*0.17,topY+372);//top right line
  //line(topX+centerX-diameter*0.17,topY+428,centerX-diameter*0.17,topY+556);//bottom left line
  //line(topX+centerX+diameter*0.17,topY+426,centerX+diameter*0.17,topY+556);//bottom right line
  //fill('black');
  //stroke('black');//color
  // x, y, w, h
  //rect(topX+centerX-pipeWidth+1,topY+centerY-(diameter/2)-0,(pipeWidth*2)-2,diameter+0);
}

function drawSecondaryHydraulicValveOpen(centerX,centerY,diameter,topRightPoint,botRightPoint,topLeftPoint,botLeftPoint) {
  fill('white');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+centerX,topY+centerY,diameter);
  fill('white');
  //  x                      y        w                      h                      start                  stop
  arc(topX+centerX-diameter*0.40, topY+centerY, diameter+diameter*0.79,diameter+diameter*0.25,radians(topRightPoint),radians(botRightPoint), CHORD);
  arc(topX+centerX+diameter*0.40, topY+centerY, diameter+diameter*0.79,diameter+diameter*0.25,radians(topLeftPoint),radians(botLeftPoint),CHORD);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');
  //line(topX+centerX-diameter*0.17,topY+242,centerX-diameter*0.17,topY+372);//top left line
  //line(topX+centerX+diameter*0.17,topY+242,centerX+diameter*0.17,topY+372);//top right line
  //line(topX+centerX-diameter*0.17,topY+428,centerX-diameter*0.17,topY+556);//bottom left line
  //line(topX+centerX+diameter*0.17,topY+426,centerX+diameter*0.17,topY+556);//bottom right line
  // fill('black');
  // stroke('black');//color
  // if (pipeLength == 50) {
  //
  // }
  // else {
  //   // x, y, w, h
  //   //rect(topX+centerX-pipeWidth+1,topY+centerY-(diameter/2)-0,(pipeWidth*2)-2,diameter+0);
  // }
}

function drawPrimaryHydraulicValveClosed(centerX,centerY,diameter,botArcPoint1,botArcPoint2,topArcPoint1,topArcPoint2) {
  fill('white');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+centerX,topY+centerY,diameter);
  fill('white');
  //  x                    y                    w l/r ends            h arc up/dn           start                  stop
  arc(topX+centerX-diameter*0.0,topY+centerY-diameter*0.0,diameter+diameter*0.0,diameter+diameter*0.0,radians(botArcPoint1),radians(botArcPoint2),CHORD);
  arc(topX+centerX-diameter*0.0,topY+centerY-diameter*0.0,diameter+diameter*0.0,diameter+diameter*0.0,radians(topArcPoint1),radians(topArcPoint2),CHORD);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');

  //fill('red');
  //rect(topX+centerX-pipeWidth,topY+centerY-(pipeLength+pipeWidth),pipeWidth*2,pipeLength);
  //rect(topX+centerX-pipeWidth,topY+centerY+pipeWidth,pipeWidth*2,pipeLength);
  
  //line(topX+centerX-diameter*0.17,topY+340,topX+centerX-diameter*0.17,topY+372);//top left line
  //line(topX+centerX+diameter*0.17,topY+340,topX+centerX+diameter*0.17,topY+372);//top right line
  //line(topX+centerX-diameter*0.17,topY+428,topX+centerX-diameter*0.17,topY+556);//bottom left line
  //line(topX+centerX+diameter*0.17,topY+426,topX+centerX+diameter*0.17,topY+556);//bottom right line
  
  //line(topX+centerX-diameter*1.28,topY+centerY-diameter*0.17,topX+centerX-diameter*0.48,topY+centerY-diameter*0.17);//top left line
  //line(topX+centerX-diameter*1.28,topY+centerY+diameter*0.17,topX+centerX-diameter*0.48,topY+centerY+diameter*0.17);//bot left line
  //line(topX+centerX+diameter*1.58,topY+centerY-diameter*0.17,topX+centerX+diameter*0.46,topY+centerY-diameter*0.17);//top right line
  //line(topX+centerX+diameter*1.58,topY+centerY+diameter*0.17,topX+centerX+diameter*0.46,topY+centerY+diameter*0.17);//bot right line
}

function drawSecondaryHydraulicValveClosed(centerX,centerY,diameter,botArcPoint1,botArcPoint2,topArcPoint1,topArcPoint2) {
  fill('white');
  stroke('black');//color
  strokeWeight(1);
  circle(topX+centerX,topY+centerY,diameter);
  fill('white');
  //  x                    y                    w l/r ends            h arc up/dn           start                  stop
  arc(topX+centerX-diameter*0.0,topY+centerY-diameter*0.0,diameter+diameter*0.0,diameter+diameter*0.0,radians(botArcPoint1),radians(botArcPoint2),CHORD);
  arc(topX+centerX-diameter*0.0,topY+centerY-diameter*0.0,diameter+diameter*0.0,diameter+diameter*0.0,radians(topArcPoint1),radians(topArcPoint2),CHORD);
  //if (groundSpoilerCBFlag == _CLOSED) fill('red');
  //if (groundSpoilerCBFlag == _OPENED) fill('black');

  //fill('red');
  //rect(topX+centerX-pipeWidth,topY+centerY-(pipeLength+pipeWidth),pipeWidth*2,pipeLength);
  //rect(topX+centerX-pipeWidth,topY+centerY+pipeWidth,pipeWidth*2,pipeLength);
  
  //line(topX+centerX-diameter*0.17,topY+340,topX+centerX-diameter*0.17,topY+372);//top left line
  //line(topX+centerX+diameter*0.17,topY+340,topX+centerX+diameter*0.17,topY+372);//top right line
  //line(topX+centerX-diameter*0.17,topY+428,topX+centerX-diameter*0.17,topY+556);//bottom left line
  //line(topX+centerX+diameter*0.17,topY+426,topX+centerX+diameter*0.17,topY+556);//bottom right line
  
  //line(topX+centerX-diameter*1.28,topY+centerY-diameter*0.17,topX+centerX-diameter*0.48,topY+centerY-diameter*0.17);//top left line
  //line(topX+centerX-diameter*1.28,topY+centerY+diameter*0.17,topX+centerX-diameter*0.48,topY+centerY+diameter*0.17);//bot left line
  //line(topX+centerX+diameter*1.58,topY+centerY-diameter*0.17,topX+centerX+diameter*0.46,topY+centerY-diameter*0.17);//top right line
  //line(topX+centerX+diameter*1.58,topY+centerY+diameter*0.17,topX+centerX+diameter*0.46,topY+centerY+diameter*0.17);//bot right line
}

function drawGroundSpoilerTestSwitch() {
  fill('lightgray');
  stroke('blue');//color
  strokeWeight(3);
  rect(topX+groundSpoilerTestSwitchX, topY+groundSpoilerTestSwitchY, groundSpoilerTestSwitchWidth, groundSpoilerTestSwitchHeight, 5);//5 radius
  strokeWeight(0);
  fill('black');
  stroke('black');//color
  text('Ground Spoilers Test', topX+groundSpoilerTestSwitchTextX, topY+groundSpoilerTestSwitchTextY); // label
  if (groundSpoilerTestSwitchFlag == _TEST) {
    fill('black');
    stroke('black');//color
    strokeWeight(0);
    text('TEST', topX+groundSpoilerTestSwitchTextX+164, topY+groundSpoilerTestSwitchY+30);
    previousSpoilerState = drawHydraulicPipingLogic();
  }
  else {
    fill('gray');
    stroke('gray');//color
    strokeWeight(0);
    text('TEST', topX+groundSpoilerTestSwitchTextX+164, topY+groundSpoilerTestSwitchY+30);
    previousSpoilerState =  drawHydraulicPipingLogic();
  }
}

function drawHydraulicPipingLogic() {
  textSize(12);
  strokeWeight(0);
  fill('red');
  stroke('red');//color
  
  debugging = false;
  currentSpoilerState = previousSpoilerState;
  
  // SET TOP AND BOTTOM VALVE POSITIONS -------------------------------------
  drawPrimaryHydraulicValveClosed(primaryHydraulicValveX,primaryHydraulicValveY,60,20,160,200,340);
  drawSecondaryHydraulicValveClosed(secondaryHydraulicValveX,secondaryHydraulicValveY,60,20,160,200,340);
  if (topValveOpen == _OPENED) {
    if (groundSpoilerCBFlag == _CLOSED) {
      drawPrimaryHydraulicValveOpen(primaryHydraulicValveX,primaryHydraulicValveY,60,320,40,140,220);
    }
  }
  if (botValveOpen == _OPENED) {
    if (groundSpoilerCBFlag == _CLOSED) {
      drawSecondaryHydraulicValveOpen(secondaryHydraulicValveX,secondaryHydraulicValveY,60,320,40,140,220);
    }
  }
  if (groundSpoilerTestSwitchFlag == _TEST) {
    if (topValveOpen == _CLOSED) {
      drawPrimaryHydraulicValveOpen(primaryHydraulicValveX,primaryHydraulicValveY,60,320,40,140,220);
      topValveOpen = _OPENED;
    }
  }
  
  // SET PIPE LENGTH --------------------------------------------------------
  // pipeSegment50 = 50;
  // pipeSegment110 = 110;
  // pipeSegment400 = 400;
  // pipeSegment630 = 630;
  if (topValveOpen == _OPENED && botValveOpen == _CLOSED) {
    pipeLength = pipeSegment400;
    currentSpoilerState = 'down';
  }
  if (topValveOpen == _OPENED && botValveOpen == _OPENED) {
    pipeLength = pipeSegment630;
    currentSpoilerState = 'up';
  }
  if (topValveOpen == _CLOSED) {
    pipeLength = pipeSegment50;
    currentSpoilerState = 'down';
  }
  if (groundSpoilerCBFlag == _OPENED) {
    topValveOpen = _CLOSED;
    botValveOpen = _CLOSED;
    pipeLength = pipeSegment50;
    currentSpoilerState = 'down';
  }
  if (currentSpoilerState == previousSpoilerState) {
  
  }
  else {
    playSound();
    flashingRedCASmessages = true;
    flashRedCounter = 0;
    previousSpoilerState = currentSpoilerState;
  }
  
  // ************************************************************************
  textSize(14);
  strokeWeight(0);
  fill('red');
  stroke('red');//color
  
  //text(timer,10,500);
  //text(groundSpoilerArmSwitchFlag,10,530);
  // if (debugging) text('topLeftValveOpen ' + topLeftValveOpen,10,620);
  // if (debugging) text('topRightValveOpen ' + topRightValveOpen,10,640);
  // if (debugging) text('botLeftValveOpen ' + botLeftValveOpen,10,660);
  // if (debugging) text('botRightValveOpen ' + botRightValveOpen,10,680);
  // if (debugging) text('topValveOpen ' + topValveOpen,200,660);
  // if (debugging) text('botValveOpen ' + botValveOpen,200,680);
  stroke('lightgray');//color
  strokeWeight(0);
  fill('red');
  //    X                                      Y                              W           H
  rect((topX+primaryHydraulicValveX)-pipeWidth,topY+primaryHydraulicValveY-60,pipeWidth*2,pipeLength-pipeWidth*2);// draw hydraulic pressure in red

  drawSpoilerPanels();
  
  drawSpoiler_CAS_Messages();
  
  return currentSpoilerState;
} // drawHydraulicPipingLogic()

function drawGroundSpoilerArmSwitch() {
  fill('lightgray');
  stroke('lightgray');//color
  //rect(topX+groundSpoilerArmSwitchX+4, topY+groundSpoilerArmSwitchY, groundSpoilerArmSwitchWidth, groundSpoilerArmSwitchHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  //text('Arm', topX+groundSpoilerArmSwitchTextX+42, topY+groundSpoilerArmSwitchTextY+30);
  //text('Off', topX+groundSpoilerArmSwitchTextX+44, topY+groundSpoilerArmSwitchTextY+30);
  text('Ground Spoiler Contacts', topX+groundSpoilerArmSwitchTextX+0, topY+groundSpoilerArmSwitchTextY+30);
  strokeWeight(1);
  stroke('black');//color
  drawingContext.setLineDash([5, 5]);//turn on dashed lines ***************************************************
  if (groundSpoilerArmSwitchFlag == _ARMED) {
    //contacts closed
    line(topX+groundSpoilerArmSwitchX+28,topY+topContactsBaseLineY+0,topX+groundSpoilerArmSwitchX+28,topY+topContactsBaseLineY+180);
    line(topX+groundSpoilerArmSwitchX+28,topY+groundSpoilerArmSwitchY+groundSpoilerArmSwitchHeight+0,topX+groundSpoilerArmSwitchX+28,topY+groundSpoilerArmSwitchY+170);
    //drawPrimaryHydraulicValveClosed(primaryHydraulicValveX,primaryHydraulicValveY,60,20,160,200,340);
    //drawSecondaryHydraulicValveClosed(secondaryHydraulicValveX,secondaryHydraulicValveY,60,20,160,200,340);
  }
  else {
    //contacts open
    line(topX+groundSpoilerArmSwitchX+28,topY+topContactsBaseLineY-16,topX+groundSpoilerArmSwitchX+28,topY+topContactsBaseLineY+180);
    line(topX+groundSpoilerArmSwitchX+28,topY+groundSpoilerArmSwitchY+groundSpoilerArmSwitchHeight+0,topX+groundSpoilerArmSwitchX+28,topY+groundSpoilerArmSwitchY+150);
    //drawPrimaryHydraulicValveOpen(primaryHydraulicValveX,primaryHydraulicValveY,60,320,40,140,220);
    //drawSecondaryHydraulicValveOpen(secondaryHydraulicValveX,secondaryHydraulicValveY,60,320,40,140,220);
  }
  drawingContext.setLineDash([]);//turn off dashed lines ******************************************************
}

function drawGroundSpoilerArmSwitchToggle() {
  stroke('blue');//color
  strokeWeight(3);
  fill('lightgray');
  rect(topX+groundSpoilerArmSwitchToggleX, topY+groundSpoilerArmSwitchToggleY, groundSpoilerArmSwitchToggleWidth, groundSpoilerArmSwitchToggleHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  if (groundSpoilerArmSwitchFlag == _ARMED) {
    strokeWeight(0);
    stroke('black');//color
    fill('red');
    //textStyle(BOLD);
    text('Arm', topX+groundSpoilerArmSwitchTextToggleX+168, topY+groundSpoilerArmSwitchTextToggleY-2);
  }
  else {
    text('Off', topX+groundSpoilerArmSwitchTextToggleX+172, topY+groundSpoilerArmSwitchTextToggleY+0);
  }
  if (groundSpoilerArmSwitchFlag == _ARMED) {
    strokeWeight(0);
    stroke('black');//color
    fill('red');
    //textStyle(BOLD);
    text('Ground Spoilers Arm', topX+groundSpoilerArmSwitchTextToggleX-0, topY+groundSpoilerArmSwitchTextToggleY+0);
  }
  else {
    strokeWeight(0);
    stroke('black');//color
    fill('black');
    textStyle(NORMAL);
    //textStyle(BOLD);
    text('Ground Spoilers Arm', topX+groundSpoilerArmSwitchTextToggleX-0, topY+groundSpoilerArmSwitchTextToggleY+0);
  }
  textStyle(NORMAL);
  strokeWeight(0);
}

function drawLeftThrottleToggle() {
  fill('lightgray');
  stroke('blue');//color
  strokeWeight(3);
  rect(topX+leftThrottleToggleButtonX, topY+leftThrottleToggleButtonY, leftThrottleToggleButtonWidth, leftThrottleToggleButtonHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  text('Throttle', topX+leftThrottleToggleButtonTextX+31, topY+leftThrottleToggleButtonTextY-40);
  text('Toggle', topX+leftThrottleToggleButtonTextX+34, topY+leftThrottleToggleButtonTextY+0);
}

function drawRightThrottleToggle() {
  fill('lightgray');
  stroke('blue');//color
  strokeWeight(3);
  rect(topX+rightThrottleToggleButtonX, topY+rightThrottleToggleButtonY, rightThrottleToggleButtonWidth, rightThrottleToggleButtonHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  text('Throttle', topX+rightThrottleToggleButtonTextX+31, topY+rightThrottleToggleButtonTextY-40);
  text('Toggle', topX+rightThrottleToggleButtonTextX+34, topY+rightThrottleToggleButtonTextY+0);
}

function drawResetToggle() {
  fill('lightgray');
  stroke('blue');//color
  strokeWeight(3);
  rect(topX+resetToggleButtonX, topY+resetToggleButtonY,resetToggleButtonWidth,resetToggleButtonHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  text('Reset', topX+resetToggleButtonTextX+31,topY+resetToggleButtonTextY-40);
}

function drawSoundToggle() {
  fill('lightgray');
  stroke('blue');//color
  strokeWeight(3);
  rect(topX+soundToggleButtonX, topY+soundToggleButtonY,soundToggleButtonWidth,soundToggleButtonHeight, 5);//5 radius
  fill('black');
  strokeWeight(0);
  if (playSoundFlag == true) {
    text('sound: ON', topX+soundToggleButtonTextX+31,topY+soundToggleButtonTextY-20);
  }
  else {
    text('sound: OFF', topX+soundToggleButtonTextX+31,topY+soundToggleButtonTextY-20);
  }
}

function drawLeftThrottle() {
  strokeWeight(1);
  if (leftThrottleIdleFlag == _IDLE) {
    // left throttle at idle
    if (leftThrottlesAnimatingCount == 21) {
      fill('black');
      stroke('black');//color
      //stroke('red');//color
      rect(topX+leftThrottleIdleX1, topY+leftThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    else {
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+leftThrottleIdleX1, topY+leftThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
      
      fill('black');
      stroke('black');//color
      //stroke('red');//color
      leftThrottlesAnimatingCount++;
      if (leftThrottlesAnimatingCount >= 0 && leftThrottlesAnimatingCount <= 5) {
        rect(topX + leftThrottlePowerX1,topY + leftThrottlePowerY1 + 22,throttleWidth,throttleHeight,5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 6 && leftThrottlesAnimatingCount <= 10) {
        rect(topX + leftThrottlePowerX1,topY + leftThrottlePowerY1 + 42,throttleWidth,throttleHeight,5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 11 && leftThrottlesAnimatingCount <= 15) {
        rect(topX + leftThrottlePowerX1,topY + leftThrottlePowerY1 + 62,throttleWidth,throttleHeight,5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 16 && leftThrottlesAnimatingCount <= 20) {
        rect(topX + leftThrottlePowerX1,topY + leftThrottlePowerY1 + 82,throttleWidth,throttleHeight,5);//5 radius
      }
    }
    // left throttle idle contact made
    strokeWeight(3);
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
    line(leftThrottleContactCircle1[0]+6,leftThrottleContactCircle1[1],leftThrottleContactCircle2[0]-6,leftThrottleContactCircle2[1]);// left throttle contacts
  }
  else {
    // left throttle at power up
    if (leftThrottlesAnimatingCount == 21) {
      fill('black');
      stroke('black');//color
      rect(topX+leftThrottlePowerX1, topY+leftThrottlePowerY1, throttleWidth, throttleHeight, 5);//5 radius
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+leftThrottleIdleX1, topY+leftThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    else {
      fill('black');
      stroke('black');//color
      leftThrottlesAnimatingCount++;
      if (leftThrottlesAnimatingCount >= 0 && leftThrottlesAnimatingCount <= 5) {
        rect(topX+leftThrottlePowerX1, topY+leftThrottlePowerY1+82, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 6 && leftThrottlesAnimatingCount <= 10) {
        rect(topX+leftThrottlePowerX1, topY+leftThrottlePowerY1+62, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 11 && leftThrottlesAnimatingCount <= 15) {
        rect(topX+leftThrottlePowerX1, topY+leftThrottlePowerY1+42, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (leftThrottlesAnimatingCount >= 16 && leftThrottlesAnimatingCount <= 20) {
        rect(topX+leftThrottlePowerX1, topY+leftThrottlePowerY1+22, throttleWidth, throttleHeight, 5);//5 radius
      }
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+leftThrottleIdleX1, topY+leftThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    // left throttle power contact broken
    strokeWeight(3);
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
    line(leftThrottleContactCircle1[0]+6,leftThrottleContactCircle1[1],leftThrottleContactCircle2[0]-6,leftThrottleContactCircle2[1]-contactsOpenHeight);// left throttle contacts
    strokeWeight(2);
  }
}

function drawRightThrottle() {
  strokeWeight(1);
  if (rightThrottleIdleFlag == _IDLE) {
    // right throttle at idle
    if (rightThrottlesAnimatingCount == 21) {
      fill('black');
      stroke('black');//color
      //stroke('red');//color
      rect(topX+rightThrottleIdleX1, topY+rightThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    else {
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+rightThrottleIdleX1, topY+rightThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius

      fill('black');
      stroke('black');//color
      //stroke('red');//color
      rightThrottlesAnimatingCount++;
      if (rightThrottlesAnimatingCount >= 0 && rightThrottlesAnimatingCount <= 5) {
        rect(topX + rightThrottlePowerX1,topY + rightThrottlePowerY1 + 22,throttleWidth,throttleHeight,5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 6 && rightThrottlesAnimatingCount <= 10) {
        rect(topX + rightThrottlePowerX1,topY + rightThrottlePowerY1 + 42,throttleWidth,throttleHeight,5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 11 && rightThrottlesAnimatingCount <= 15) {
        rect(topX + rightThrottlePowerX1,topY + rightThrottlePowerY1 + 62,throttleWidth,throttleHeight,5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 16 && rightThrottlesAnimatingCount <= 20) {
        rect(topX + rightThrottlePowerX1,topY + rightThrottlePowerY1 + 82,throttleWidth,throttleHeight,5);//5 radius
      }
    }
    // right throttle idle contact made
    strokeWeight(3);
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
    line(rightThrottleContactCircle1[0]+6,rightThrottleContactCircle1[1],rightThrottleContactCircle2[0]-6,rightThrottleContactCircle2[1]);// right throttle contacts
  }
  else {
    // right throttle at power up
    if (rightThrottlesAnimatingCount == 21) {
      fill('black');
      stroke('black');//color
      rect(topX+rightThrottlePowerX1, topY+rightThrottlePowerY1, throttleWidth, throttleHeight, 5);//5 radius
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+rightThrottleIdleX1, topY+rightThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    else {
      fill('black');
      stroke('black');//color
        rightThrottlesAnimatingCount++;
      if (rightThrottlesAnimatingCount >= 0 && rightThrottlesAnimatingCount <= 5) {
          rect(topX+rightThrottlePowerX1, topY+rightThrottlePowerY1+82, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 6 && rightThrottlesAnimatingCount <= 10) {
          rect(topX+rightThrottlePowerX1, topY+rightThrottlePowerY1+62, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 11 && rightThrottlesAnimatingCount <= 15) {
          rect(topX+rightThrottlePowerX1, topY+rightThrottlePowerY1+42, throttleWidth, throttleHeight, 5);//5 radius
      }
      if (rightThrottlesAnimatingCount >= 16 && rightThrottlesAnimatingCount <= 20) {
          rect(topX+rightThrottlePowerX1, topY+rightThrottlePowerY1+22, throttleWidth, throttleHeight, 5);//5 radius
      }
      // paint throttle outline
      fill(_BG_COLOR);
      stroke('gray');//color
      //stroke('red');//color
      rect(topX+rightThrottleIdleX1, topY+rightThrottleIdleY1, throttleWidth, throttleHeight, 5);//5 radius
    }
    // right throttle power contact broken
    strokeWeight(3);
    if (groundSpoilerCBFlag == _CLOSED) stroke('red');
    if (groundSpoilerCBFlag == _OPENED) stroke('black');
    line(rightThrottleContactCircle1[0]+6,rightThrottleContactCircle1[1],rightThrottleContactCircle2[0]-6,rightThrottleContactCircle2[1]-contactsOpenHeight);// right throttle contacts
    strokeWeight(2);
  }
}

function drawLeftThrottleIdleVerticalContactLines() {
  strokeWeight(1);
  stroke('black');//color
  drawingContext.setLineDash([5, 5]);//turn on dashed lines
  if (leftThrottleIdleFlag == _IDLE) {
    //idle
    //stroke('red');//color
    line(topX+leftThrottlePowerX1+40,topY+leftThrottlePowerY1+100,topX+leftThrottlePowerX1+40,topY+leftThrottlePowerY1-81);
  }
  else {
    //power
    //stroke('cyan');//color
    line(topX+leftThrottlePowerX1+40,topY+leftThrottlePowerY1+100,topX+leftThrottlePowerX1+40,topY+leftThrottlePowerY1-98);
  }
  drawingContext.setLineDash([]);//turn off dashed lines
}

function drawRightThrottleIdleVerticalContactLines() {
  strokeWeight(1);
  stroke('black');//color
  //stroke('red');//color
  drawingContext.setLineDash([5, 5]);//turn on dashed lines ***************************************************
  line(topX+rightThrottlePowerX1+40,topY+rightThrottlePowerY1+100,topX+rightThrottlePowerX1+40,topY+rightThrottlePowerY1+100); // right throttle vertical line above throttle handle
  stroke('black');//vertical line just below right throttle
  if (rightThrottleIdleFlag) {
    //idle
    stroke('black');//color
    //stroke('cyan');//lower right throttle lines
    line(topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+50,topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+100);
    //stroke('orange');//lower right throttle lines
    line(topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+0,topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1-100);
  }
  else {
    //power
    stroke('black');//color
    //stroke('cyan');//lower right throttle lines
    line(topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+50,topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+100);
    //stroke('orange');//lower right throttle lines
    line(topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+0,topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1-100);
  }
  stroke('black');//vertical line just below right throttle
  //stroke('cyan');//lower right throttle lines
  line(topX+rightThrottleIdleX1-60,topY+rightThrottleIdleY1+100,topX+rightThrottleIdleX1+40,topY+rightThrottleIdleY1+100);
  //stroke('red');//color
  if (rightThrottleIdleFlag) {
    //idle
    line(topX+rightThrottleIdleX1-60,topY+rightThrottleIdleY1+100,topX+rightThrottleIdleX1-60,topY+rightThrottleIdleY1+170); // vertical coming out of the contact
  }
  else {
    //power
    line(topX+rightThrottleIdleX1-60,topY+rightThrottleIdleY1+100,topX+rightThrottleIdleX1-60,topY+rightThrottleIdleY1+152);
  }
  drawingContext.setLineDash([]);//turn off dashed lines ******************************************************
}

// touches here ***********************
function mouse_touch() { // touches here ***********************
  if (mouseX > topX+leftThrottleToggleButtonX && mouseX < topX+leftThrottleToggleButtonX + throttleWidth) {
    if (mouseY > topY+leftThrottleToggleButtonY && mouseY < topY+leftThrottleToggleButtonY + leftThrottleToggleButtonHeight) {
      leftThrottlesAnimatingCount = 0;
      if (leftThrottleIdleFlag) {
        //going to power up
        leftThrottleIdleFlag = _POWER;
      }
      else {
        //going to idle
        leftThrottleIdleFlag = _IDLE;
      }
    }
  }
// touches here ***********************
  if (mouseX > topX+rightThrottleToggleButtonX && mouseX < topX+rightThrottleToggleButtonX + rightThrottleToggleButtonWidth) {
    if (mouseY > topY+rightThrottleToggleButtonY && mouseY < topY+rightThrottleToggleButtonY + rightThrottleToggleButtonHeight) {
      rightThrottlesAnimatingCount = 0;
      if (rightThrottleIdleFlag) {
        //going to power up
        rightThrottleIdleFlag = _POWER;
      }
      else {
        //going to idle
        rightThrottleIdleFlag = _IDLE;
      }
    }
  }
// touches here ***********************
//   if (mouseX > topX+zoomMinusButtonX*sxx && mouseX < topX+zoomMinusButtonX*sxx + zoomMinusButtonWidth*sxx) {
//     if (mouseY > topY + zoomMinusButtonY*syy && mouseY < topY+zoomMinusButtonY*syy + zoomMinusButtonHeight*syy) {
//       sxx = sxx - sxxChange;
//       syy = syy - syyChange;
//       //console.log('Minus');
//     }
//   }
// touches here ***********************
//   if (mouseX > topX+zoomPlusButtonX*sxx && mouseX < topX+zoomPlusButtonX*sxx + zoomPlusButtonWidth*sxx) {
//     if (mouseY > topY + zoomPlusButtonY*syy && mouseY < topY + zoomPlusButtonY*syy + zoomPlusButtonHeight*syy) {
//       sxx = sxx + sxxChange;
//       syy = syy + syyChange;
//       //console.log('Plus');
//     }
//   }
// touches here ***********************
  if (mouseX > topX+resetToggleButtonX && mouseX < topX+resetToggleButtonX + throttleWidth) {
    if (mouseY > topY+resetToggleButtonY && mouseY < topY+resetToggleButtonY + resetToggleButtonHeight) {
      leftThrottleIdleFlag = _IDLE;
      rightThrottleIdleFlag = _IDLE;
      groundSpoilerArmSwitchFlag = _NOTARMED;
    }
  }
  if (mouseX > 460 && mouseX < 570) {
    if (mouseY > 0 && mouseY < 30) {
      document.body.style.cursor = "pointer";
      window.location = "https://tinyjetpro.com/g4.html";
    }
  }
// touches here ***********************
  if (mouseX > topX+soundToggleButtonX && mouseX < topX+soundToggleButtonX + soundToggleButtonWidth) {
    if (mouseY > topY+soundToggleButtonY && mouseY < topY+soundToggleButtonY + soundToggleButtonHeight) {
      if (playSoundFlag == true) {
        playSoundFlag = false;
      }
      else {
        playSoundFlag = true;
      }
      if (playSoundFlag == true) {
        playSound();
      }
      else {

      }
      drawSoundToggle();
    }
  }
  // touches here ***********************
  if (mouseX > topX+groundSpoilerArmSwitchToggleX && mouseX < topX+groundSpoilerArmSwitchToggleX + groundSpoilerArmSwitchToggleWidth) {
    if (mouseY > topY+groundSpoilerArmSwitchToggleY && mouseY < topY+groundSpoilerArmSwitchToggleY + groundSpoilerArmSwitchToggleHeight) {
      spoilersAnimatingCount = 0;
      if (groundSpoilerArmSwitchFlag == _ARMED) {
        groundSpoilerArmSwitchFlag = _NOTARMED; //going to OFF
      }
      else {
        groundSpoilerArmSwitchFlag = _ARMED; //going to ON
      }
    }
  }
// touches here ***********************
  if (mouseX > topX+(groundSpoilerCBToggleX-12)*sxx && mouseX < topX+(groundSpoilerCBToggleX-12)*sxx + groundSpoilerCBToggleWidth*sxx) {
    if (mouseY > topY+(groundSpoilerCBToggleY-16)*syy && mouseY < topY+(groundSpoilerCBToggleY-16)*syy + groundSpoilerCBToggleHeight*syy) {
      if (groundSpoilerCBFlag == _OPENED) {
        groundSpoilerCBFlag = _CLOSED;
      }
      else {
        groundSpoilerCBFlag = _OPENED;
      }
    }
  }
// touches here ***********************
  if (mouseX > topX+groundSpoilerTestSwitchX && mouseX < topX+groundSpoilerTestSwitchX + groundSpoilerTestSwitchWidth) {
    if (mouseY > topY+groundSpoilerTestSwitchY && mouseY < topY+groundSpoilerTestSwitchY + groundSpoilerTestSwitchHeight) {
      groundSpoilerTestSwitchFlag = _TEST;
    }
  }
  
  //prevent default
  return false;
}



// mouse clicks here ************************************************************************************
function mousePressed() { // mouse clicks here ***********************
  mouse_pressed_flag = true;
  if (mouseX > topX+resetToggleButtonX*sxx && mouseX < topX+resetToggleButtonX*sxx + throttleWidth*sxx) {
    if (mouseY > topY+resetToggleButtonY*syy && mouseY < topY+resetToggleButtonY*syy + resetToggleButtonHeight*syy) {
      leftThrottleIdleFlag = _IDLE;
      rightThrottleIdleFlag = _IDLE;
      groundSpoilerArmSwitchFlag = _NOTARMED;
      //console.log(topX+resetToggleButtonX);
      //console.log(topX+resetToggleButtonX + throttleWidth);
      //console.log(topY+resetToggleButtonY);
      //console.log(topY+resetToggleButtonY + resetToggleButtonHeight);
    }
  }
  // mouse clicks here ***********************
  if (mouseX > 460 && mouseX < 570) {
    if (mouseY > 0 && mouseY < 30) {
      window.location = "https://tinyjetpro.com/g4.html";
    }
  }
// mouse clicks here ***********************
  if (mouseX > topX+leftThrottleToggleButtonX*sxx && mouseX < topX+leftThrottleToggleButtonX*sxx + throttleWidth*sxx) {
    if (mouseY > topY+leftThrottleToggleButtonY*syy && mouseY < topY+leftThrottleToggleButtonY*syy + leftThrottleToggleButtonHeight*syy) {
      leftThrottlesAnimatingCount = 0;
      spoilersAnimatingCount = 0;
      if (leftThrottleIdleFlag == _IDLE) {
        //going to power up
        leftThrottleIdleFlag = _POWER;
      }
      else {
        //going to idle
        leftThrottleIdleFlag = _IDLE;
      }
    }
  }
// mouse clicks here ***********************
  if (mouseX > topX+rightThrottleToggleButtonX*sxx && mouseX < topX+rightThrottleToggleButtonX*sxx + throttleWidth*sxx) {
    if (mouseY > topY+rightThrottleToggleButtonY*syy && mouseY < topY+rightThrottleToggleButtonY*syy + rightThrottleToggleButtonHeight*syy) {
      rightThrottlesAnimatingCount = 0;
      spoilersAnimatingCount = 0;
      if (rightThrottleIdleFlag == _IDLE) {
        //going to power up
        rightThrottleIdleFlag = _POWER;
      }
      else {
        //going to idle
        rightThrottleIdleFlag = _IDLE;
      }
    }
  }
  // mouse clicks here ***********************
  // if (mouseX > topX+zoomMinusButtonX*sxx && mouseX < topX+zoomMinusButtonX*sxx + zoomMinusButtonWidth*sxx) {
  //   if (mouseY > topY + zoomMinusButtonY*syy && mouseY < topY+zoomMinusButtonY*syy + zoomMinusButtonHeight*syy) {
  //     sxx = sxx - sxxChange;
  //     syy = syy - syyChange;
  //     //console.log('Minus');
  //   }
  // }
  // mouse clicks here ***********************
  // if (mouseX > topX+zoomPlusButtonX*sxx && mouseX < topX+zoomPlusButtonX*sxx + zoomPlusButtonWidth*sxx) {
  //   if (mouseY > topY + zoomPlusButtonY*syy && mouseY < topY + zoomPlusButtonY*syy + zoomPlusButtonHeight*syy) {
  //     sxx = sxx + sxxChange;
  //     syy = syy + syyChange;
  //     //console.log('Plus');
  //   }
  // }
// mouse clicks here ***********************
  if (mouseX > topX+groundSpoilerTestSwitchX*sxx && mouseX < topX+groundSpoilerTestSwitchX*sxx + groundSpoilerTestSwitchWidth*sxx) {
    if (mouseY > topY+groundSpoilerTestSwitchY*syy && mouseY < topY+groundSpoilerTestSwitchY*syy + groundSpoilerTestSwitchHeight*syy) {
      groundSpoilerTestSwitchFlag = _TEST;
    }
  }
// mouse clicks here ***********************
  // toggle ARM switch
  if (mouseX > topX+groundSpoilerArmSwitchToggleX*sxx && mouseX < topX+groundSpoilerArmSwitchToggleX*sxx + groundSpoilerArmSwitchToggleWidth*sxx) {
    if (mouseY > topY+groundSpoilerArmSwitchToggleY*syy && mouseY < topY+groundSpoilerArmSwitchToggleY*syy + groundSpoilerArmSwitchToggleHeight*syy) {
      spoilersAnimatingCount = 0;
      alertCount = 0;
      if (groundSpoilerArmSwitchFlag == _ARMED) {
        groundSpoilerArmSwitchFlag = _NOTARMED; //going to OFF
      }
      else {
        groundSpoilerArmSwitchFlag = _ARMED; //going to ON
      }
    }
  }
  //mouse clicks here ***********************
  if (mouseX > topX+(groundSpoilerCBToggleX-12)*sxx && mouseX < topX+(groundSpoilerCBToggleX-12)*sxx + groundSpoilerCBToggleWidth*sxx) {
    if (mouseY > topY+(groundSpoilerCBToggleY-16)*syy && mouseY < topY+(groundSpoilerCBToggleY-16)*syy + groundSpoilerCBToggleHeight*syy) {
      if (groundSpoilerCBFlag == _OPENED) {
        groundSpoilerCBFlag = _CLOSED;
        spoilersAnimatingCount = 914;// CB is closed
        spoilersLastCommand = "down";
      }
      else {
        groundSpoilerCBFlag = _OPENED;
        spoilersUp = true;
        spoilerAnimationInProgress = false;
        if (spoilersAnimatingCount == 911 || spoilersAnimatingCount == 914) { //911 and 914 spoilers stay down
          return;
        }
        else {
          //spoilersAnimatingCount = 912;// bring spoilers up with animation
          spoilersAnimatingCount = 913;//  bring spoilers down with animation
        }
        spoilersAnimatingCount = 0;
        spoilersLastCommand = "up";
        groundSpoilerArmSwitchFlag = _NOTARMED;
      }
    }
  }
  //mouse clicks here ***********************
  if (mouseX > topX+soundToggleButtonX*sxx && mouseX < topX+soundToggleButtonX*sxx + soundToggleButtonWidth*sxx) {
    if (mouseY > topY + soundToggleButtonY*syy && mouseY < topY + soundToggleButtonY*syy + soundToggleButtonHeight*syy) {
      if (playSoundFlag == true) {
        playSoundFlag = false;
      } else {
        playSoundFlag = true;
        playSound();
      }
      drawSoundToggle();
    }
  }
  //mouse clicks here ***********************
  // if (mouseX > topX+groundSpoilerArmSwitchX*sxx && mouseX < topX+groundSpoilerArmSwitchX*sxx + groundSpoilerArmSwitchWidth*sxx) {
  //   if (mouseY > topY+groundSpoilerArmSwitchY*syy && mouseY < topY+groundSpoilerArmSwitchY*syy + groundSpoilerArmSwitchHeight*syy) {
  //     if (groundSpoilerArmSwitchFlag == _ARMED) {
  //       groundSpoilerArmSwitchFlag = _NOTARMED; //going to unarmed/down
  //     }
  //     else {
  //       groundSpoilerArmSwitchFlag = _ARMED; //going to arm/up
  //     }
  //   }
  // }
  mouse_pressed_flag = false;
}



function mouse_is_pressed() {
  // mouse_pressed_flag = true;
  // if (mouseX > topX+groundSpoilerTestSwitchX && mouseX < topX+groundSpoilerTestSwitchX + groundSpoilerTestSwitchWidth) {
  //   if (mouseY > topY+groundSpoilerTestSwitchY && mouseY < topY+groundSpoilerTestSwitchY + groundSpoilerTestSwitchHeight) {
  //     strokeWeight(0);
  //     stroke('blue');//color
  //     text(groundSpoilerTestSwitchFlag, topX+0, topY+300);
  //     //if (groundSpoilerTestSwitchFlag == _NOTEST) {
  //       groundSpoilerTestSwitchFlag = _TEST;
  //       //drawGroundSpoilerTestSwitch();
  //     //}
  //     //else {
  //       //groundSpoilerTestSwitchFlag = _NOTEST;
  //       //drawGroundSpoilerTestSwitch();
  //     //}
  //   }
  // }
}


//ctx.addEventListener('mousemove', mouse_move_into_target, false);
//ctx.addEventListener('mouseout', mouse_out_of_target, false);

function mouseMoved(){
  if (mouseX > 460 && mouseX < 570) {
    if (mouseY > 0 && mouseY < 30) {
      document.body.style.cursor = "pointer";
    }
    else {
      document.body.style.cursor = "default";
    }
  }
}

// function mouse_out_of_target() {
//   if (mouseX > 450 && mouseX < 580) {
//     if (mouseY > 0 && mouseY < 40) {
//       document.body.style.cursor = "default";
//     }
//   }
// }

function mouseReleased() {
  groundSpoilerTestSwitchFlag = _NOTEST;
  mouseReleaseFlag = true;
  mouse_pressed_flag = false;
  return false;
}

function mouse_is_released() {
  // groundSpoilerTestSwitchFlag = _NOTEST;
  // strokeWeight(0);
  // stroke('blue');//color
  // //text(groundSpoilerTestSwitchFlag, topX+0, topY+400);
  // //text('xxxxxxxxxxxxxxxxxxx', topX+0, topY+500);
  mouse_pressed_flag = false;
  return false;
}

function touchStarted() {
  if (mouse_pressed_flag == false) {
    mouse_touch();
  }
  return false;
}

function touchMoved() {
  return false;
}

function touchEnded() {
  //if (mouse_pressed_flag == false) {
  groundSpoilerTestSwitchFlag = _NOTEST;
  //}
  return false;
}

// All P5 event handlers listed below ---------------------------------------

// function setup() {
//   createCanvas(400, 400);
//   fill(0);
// }
//
// function draw() {
//   background(220);
//   ellipse(width/2, height/2, 50,50);
// }
//
// function keyPressed(){
//   fill(250,200,30);
// }
//
// function keyReleased(){
//   fill(0);
// }
//
// function mouseMoved(){
//
// }
//
// function mouseDragged(){
//   print("what a drag");
// }
//
// function mousePressed(){
//
// }
//
// function mouseReleased(){
//
// }
//
// function mouseClicked(){
//
// }
//
// function doubleClicked(){
//
// }
