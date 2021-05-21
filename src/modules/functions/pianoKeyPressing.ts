export { pressPianoKey, releasePianoKey };

function pressPianoKey(key: HTMLDivElement): void {
    if (key.classList.contains('white')) {
        key.classList.add('pressed-white');
    }
    if (key.classList.contains('black')) {
        key.classList.add('pressed-black');
    }
}

function releasePianoKey(key: HTMLDivElement): void {
    key.classList.remove('pressed-white');
    key.classList.remove('pressed-black');
}