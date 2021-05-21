import keysInfo from './modules/keysInfo.js';
import { octave } from './modules/octaveController.js';
import { oscConfig } from './modules/oscControls.js';
import { playNote, pressPianoKey, releasePianoKey, calcFrequency } from './modules/functions/index.js';
const AudioContext = window.AudioContext
    || window.webkitAudioContext; // as any used to resolve webkitAudioContext problem
const audioContext = new AudioContext();
// keyboard player
// remembers which keys are currently pressed
let pressedKeys = [];
document.addEventListener('keydown', (downEvent) => {
    // prevents triggering the same note more than once while holding the key
    if (pressedKeys.includes(downEvent.code))
        return;
    pressedKeys.push(downEvent.code);
    if (keysInfo[downEvent.code]) {
        const key = document.getElementById(keysInfo[downEvent.code].note);
        pressPianoKey(key);
        const frequency = calcFrequency(keysInfo[downEvent.code].frequency, octave);
        const osc = playNote(audioContext, frequency, oscConfig);
        document.addEventListener('keyup', upEvent => {
            if (upEvent.code === downEvent.code) {
                osc.stop();
                releasePianoKey(key);
                pressedKeys = pressedKeys.filter(keyCode => keyCode !== downEvent.code);
            }
        });
    }
});
