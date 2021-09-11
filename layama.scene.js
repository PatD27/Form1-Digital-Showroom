// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "36020000", a: "1", p: new BABYLON.Vector3(-315.087, 195, -1063.4), l: new BABYLON.Vector3(-314.087, 195, -1063.4)});
   layamaCameras.push({n: "36020001", a: "2", p: new BABYLON.Vector3(-614.966, 160, -1000.67), l: new BABYLON.Vector3(-614.966, 160, -1001.67)});
   layamaCameras.push({n: "36020002", a: "3", p: new BABYLON.Vector3(-132.701, 195, -1239.1), l: new BABYLON.Vector3(-132.701, 195, -1240.1)});
   layamaCameras.push({n: "36020003", a: "4", p: new BABYLON.Vector3(-855.995, 160, -996.988), l: new BABYLON.Vector3(-855.995, 160, -997.988)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getLayamaHotspots()
{
   var layamaHotspots = new BABYLON.SmartArray(0);
   layamaHotspots.push({n: "Fünftürer", m: 3, u: "https://formeins.de/", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(-824.774, 145.704, -1179.92), d: 350});
   layamaHotspots.push({n: "Kommode", m: 3, u: "https://formeins.de/", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(-29.2358, 96.2758, -1438.47), d: 350});
   return layamaHotspots;
}

