"use strict";
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(`Door locked: ${isDoorLocked}, window closed: ${isWindowClosed}, alarm: ${isAlarmOn}, owner inside: ${isOwnerInside} => ${isSecure ? "Secure" : "Unsafe"}`);
}

// These calls test both a secure and an unsafe condition.
checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
