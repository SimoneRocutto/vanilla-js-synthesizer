# Vanilla Javascript Synthesizer project

This project is my first attempt at working with javascript audio context and oscillators.

This single page web app allows you to play a synth using your keyboard (**a** to **ù** keys).

There are several oscillator parameters you can tweak to modify the synth sound (see below). You can also change the octave of the selected notes using **z** and **x** keys (default is octave = 4).

## Oscillator parameters

### Soundwave

Controls the shape of the oscillator soundwave. You can choose one of these four basic shape types:
- sine
- square
- saw
- triangle

### Attack

Controls the time required by the sound to reach its peak volume. The higher the attack time, the slower the sound will fade in.

- Default attack time: 0.2s
- Min attack time: 0s
- Max attack time: 1s

### Decay

Controls the time required by the sound to go to 0 volume after reaching its peak volume.

- Default decay time: 2s
- Min decay time: 0.1s
- Max decay time: 60s

### LFO (Low Frequency Oscillator)

The LFO is a second oscillator which can be used to control a parameter. In this case, the LFO controls the synth volume.

By activating the checkbox, you can turn the LFO on. The adjacent slider controls the LFO frequency.