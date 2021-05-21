import { removeKeysSelection, assignSelectedKeys } from './functions/index.js';
export { octave };
var octave = 4;
var shownOctave = document.getElementById('octave');
assignSelectedKeys(octave);
document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case ('KeyZ'):
            if (octave <= -1)
                return;
            octave -= 1;
            break;
        case ('KeyX'):
            if (octave >= 8)
                return;
            octave += 1;
            break;
    }
    removeKeysSelection();
    assignSelectedKeys(octave);
    shownOctave.innerText = octave;
});
