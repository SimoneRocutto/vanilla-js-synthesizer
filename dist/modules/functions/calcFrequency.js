export function calcFrequency(keyBaseFrequency, octave) {
    const octaveMultiplier = Math.pow(2, octave - 4);
    return keyBaseFrequency * octaveMultiplier;
}
