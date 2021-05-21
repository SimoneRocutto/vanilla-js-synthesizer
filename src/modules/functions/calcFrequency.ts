export function calcFrequency(keyBaseFrequency: number, octave: number): number {
    const octaveMultiplier: number = Math.pow(2, octave - 4);
    return keyBaseFrequency * octaveMultiplier;
}