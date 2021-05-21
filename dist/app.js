import keysInfo from './modules/keysInfo.js';
import { octave } from './modules/octaveController.js';
import { oscConfig } from './modules/oscControls.js';
import { playNote, pressPianoKey, releasePianoKey, calcFrequency } from './modules/functions/index.js';
var AudioContext = window.AudioContext
    || window.webkitAudioContext; // as any used to resolve webkitAudioContext problem
var audioContext = new AudioContext();
// keyboard player
// remembers which keys are currently pressed
var pressedKeys = [];
document.addEventListener('keydown', function (downEvent) {
    // prevents triggering the same note more than once while holding the key
    if (pressedKeys[downEvent.code])
        return;
    pressedKeys[downEvent.code] = true;
    if (keysInfo[downEvent.code]) {
        var key_1 = document.getElementById(keysInfo[downEvent.code].note);
        pressPianoKey(key_1);
        var frequency = calcFrequency(keysInfo[downEvent.code].frequency, octave);
        var osc_1 = playNote(audioContext, frequency, oscConfig);
        document.addEventListener('keyup', function (upEvent) {
            if (upEvent.code === downEvent.code) {
                osc_1.stop();
                releasePianoKey(key_1);
                pressedKeys[downEvent.code] = false;
            }
        });
    }
});
document.addEventListener('keydown', function (e) {
    console.log("ayy");
});
