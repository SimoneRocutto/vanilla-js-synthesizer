import { removeKeysSelection, assignSelectedKeys } from './functions/index.js';
export { octave };
let octave: number = 4;
const shownOctave: HTMLSpanElement = document.getElementById('octave');
assignSelectedKeys(octave);

document.addEventListener('keydown', (event): void => {
    switch (event.code) {
        case ('KeyZ'):
            if (octave <= -1) return;
            octave -= 1;
            break;
        case ('KeyX'):
            if (octave >= 8) return;
            octave += 1;
            break;
    }
    removeKeysSelection();
    assignSelectedKeys(octave);
    shownOctave.innerText = (octave as unknown) as string;
});