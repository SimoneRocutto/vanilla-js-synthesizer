export function removeKeysSelection(): void {
    const pianoRollKeys: NodeListOf<HTMLDivElement> = document.querySelectorAll('div.roll-white, div.roll-black');
    for (const key of pianoRollKeys) {
        key.classList.remove('selected-roll-white');
        key.classList.remove('selected-roll-black');
    }
}
export function assignSelectedKeys(octave: number): void {
    const octaveKeys: HTMLDivElement[] = Array.from(document.querySelectorAll(`div[octave="${octave}"]`));
    const nextKeys: HTMLDivElement[] = Array.from(document.querySelectorAll(`div[octave="${octave + 1}"]`));
    const selectedKeys: HTMLDivElement[] = octaveKeys.concat(nextKeys.slice(0, 8));
    for (const key of selectedKeys) {
        if (key.classList.contains('white')) {
            key.classList.add('selected-roll-white');
        }
        if (key.classList.contains('black')) {
            key.classList.add('selected-roll-black');
        }
    }
}