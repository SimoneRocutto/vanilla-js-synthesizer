export function removeKeysSelection() {
    var pianoRollKeys = document.querySelectorAll('.roll-white, .roll-black');
    for (var _i = 0, pianoRollKeys_1 = pianoRollKeys; _i < pianoRollKeys_1.length; _i++) {
        var key = pianoRollKeys_1[_i];
        key.classList.remove('selected-roll-white');
        key.classList.remove('selected-roll-black');
    }
}
export function assignSelectedKeys(octave) {
    var octaveKeys = Array.from(document.querySelectorAll("[octave=\"" + octave + "\"]"));
    var nextKeys = Array.from(document.querySelectorAll("[octave=\"" + (octave + 1) + "\"]"));
    var selectedKeys = octaveKeys.concat(nextKeys.slice(0, 8));
    for (var _i = 0, selectedKeys_1 = selectedKeys; _i < selectedKeys_1.length; _i++) {
        var key = selectedKeys_1[_i];
        if (key.classList.contains('white')) {
            key.classList.add('selected-roll-white');
        }
        if (key.classList.contains('black')) {
            key.classList.add('selected-roll-black');
        }
    }
}
