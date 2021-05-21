/**
 * Generates an oscillator with the specified configs, starts it and returns it.
 * @param {*} audioContext
 * @param {number} frequency
 * @param {object} oscConfig
 * @returns The oscillator.
 */
export function playNote(audioContext, frequency, oscConfig) {
    // oscillator creation & setup
    const osc = audioContext.createOscillator();
    osc.type = oscConfig.waveType;
    osc.frequency.value = frequency;
    // envelope creation
    let envelope = audioContext.createGain();
    envelope.gain.cancelScheduledValues(audioContext.currentTime);
    // the wave initial value is set to 0
    envelope.gain.setValueAtTime(0, audioContext.currentTime);
    // setting attack & decay
    envelope.gain.linearRampToValueAtTime(1, audioContext.currentTime + oscConfig.attackTime);
    envelope.gain.linearRampToValueAtTime(0, audioContext.currentTime + oscConfig.attackTime + oscConfig.decayTime);
    // LFO & connecting parts
    if (oscConfig.lfo) {
        // the amp controls the volume
        const amp = audioContext.createGain();
        amp.gain.setValueAtTime(1, audioContext.currentTime);
        // LFO creation & setup
        const lfo = audioContext.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = oscConfig.lfoFrequency;
        // the LFO is mapped to the amp
        lfo.connect(amp.gain);
        osc.connect(envelope).connect(amp).connect(audioContext.destination);
        lfo.start();
    }
    else {
        osc.connect(envelope).connect(audioContext.destination);
    }
    osc.start(audioContext.currentTime);
    return osc;
}
