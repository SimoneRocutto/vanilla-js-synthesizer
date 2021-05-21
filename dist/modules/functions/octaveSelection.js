export function removeKeysSelection() {
    const pianoRollKeys = document.querySelectorAll('.roll-white, .roll-black');
    for (const key of pianoRollKeys) {
        key.classList.remove('selected-roll-white');
        key.classList.remove('selected-roll-black');
    }
}
export function assignSelectedKeys(octave) {
    const octaveKeys = Array.from(document.querySelectorAll(`[octave="${octave}"]`));
    const nextKeys = Array.from(document.querySelectorAll(`[octave="${octave + 1}"]`));
    const selectedKeys = octaveKeys.concat(nextKeys.slice(0, 8));
    for (const key of selectedKeys) {
        if (key.classList.contains('white')) {
            key.classList.add('selected-roll-white');
        }
        if (key.classList.contains('black')) {
            key.classList.add('selected-roll-black');
        }
    }
}
