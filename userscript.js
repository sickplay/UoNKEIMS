// ==UserScript==
// @name       My Fancy New Userscript
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://222.30.32.10/*
// @copyright  2012+, You
// ==/UserScript==


if (document.getElementById("MFX0")) {
    document.getElementById("MFX0").style.visibility = "visible";
    document.getElementById("MFX2").style.visibility = "visible";
    document.getElementById("MFX4").style.visibility = "visible";
    document.getElementById("MFX6").style.visibility = "visible";
    document.getElementById("MFX8").style.visibility = "visible";
    document.getElementById("MFX10").style.visibility = "visible";
    document.getElementById("MFX12").style.visibility = "visible";
    document.getElementById("MFX14").style.visibility = "visible";
    document.getElementById("MFX16").style.visibility = "visible";
    document.getElementById("MFX18").style.visibility = "visible";
    document.getElementById("MFX20").style.visibility = "visible";
    document.getElementById("MFX0").style.top = "114";
    document.getElementById("MFX2").style.top = "138";
    document.getElementById("MFX4").style.top = "162";
    document.getElementById("MFX6").style.top = "186";
    document.getElementById("MFX8").style.top = "210";
    document.getElementById("MFX10").style.top = "234";
    document.getElementById("MFX12").style.top = "258";
    document.getElementById("MFX14").style.top = "282";
    document.getElementById("MFX16").style.top = "306";
    document.getElementById("MFX18").style.top = "330";
    document.getElementById("MFX20").style.top = "354";
}

if (document.getElementsByName("array[0]")) {
    document.forms["queryTargetActionForm"]["operation"].value='Store';
	for (var i = 0; i < 50; i++) {
    	var sName = "array[" + i + "]";
    	document.getElementsByName(sName)[0].selectedIndex = 1;
	}
}
