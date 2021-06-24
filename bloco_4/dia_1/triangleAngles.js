let angle1 = -20;
let angle2 = 60;
let angle3 = 90;

if (!(angle1 > 0 && angle2 > 0 && angle3 > 0)) { console.log("erro");}
else {
    if (angle1+angle2+angle3 === 180) { console.log("true");}
    else { console.log("false");}
}