export function calcFrequency(keyBaseFrequency, octave) {
    var octaveMultiplier = Math.pow(2, octave - 4);
    return keyBaseFrequency * octaveMultiplier;
}
