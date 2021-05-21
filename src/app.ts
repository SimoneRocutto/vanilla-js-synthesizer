import keysInfo from './modules/keysInfo.js';
import { octave } from './modules/octaveController.js';
import { oscConfig } from './modules/oscControls.js';
import { playNote, pressPianoKey, releasePianoKey, calcFrequency } from './modules/functions/index.js';

const AudioContext = window.AudioContext
 || (window as any).webkitAudioContext; // as any used to resolve webkitAudioContext problem
const audioContext: AudioContext = new AudioContext();

// keyboard player

// remembers which keys are currently pressed
let pressedKeys: string[] = [];

document.addEventListener('keydown', (downEvent): void => {
    // prevents triggering the same note more than once while holding the key
    if (pressedKeys.includes(downEvent.code)) return;
    pressedKeys.push(downEvent.code);

    if (keysInfo[downEvent.code]) {
        const key: HTMLDivElement = document.getElementById(keysInfo[downEvent.code].note) as HTMLDivElement;
        pressPianoKey(key);
        const frequency: number = calcFrequency(keysInfo[downEvent.code].frequency, octave);
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