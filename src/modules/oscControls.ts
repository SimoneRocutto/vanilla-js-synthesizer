export { oscConfig };

const oscConfig = {
    waveType: 'sine',
    attackTime: 0.2,
    decayTime: 1,
    lfo: false,
    lfoFrequency: 8
};
// attack
const attackControl = document.getElementById('attack') as HTMLInputElement;
attackControl.addEventListener('input', function () {
    oscConfig.attackTime = Number(this.value);
}, false);

// decay
const decayControl = document.getElementById('decay') as HTMLInputElement;
decayControl.addEventListener('input', function () {
    oscConfig.decayTime = Number(this.value);
}, false);

const soundwaveSelect = document.getElementById('soundwave') as HTMLInputElement;
soundwaveSelect.addEventListener('click', function (event) {
    oscConfig.waveType = this.value;
});

// lfo freq
const lfoControl = document.getElementById('lfo') as HTMLInputElement;
lfoControl.addEventListener('input', function () {
    oscConfig.lfoFrequency = Number(this.value);
}, false);

// lfo freq
const lfoCheckbox = document.getElementById('lfo-checkbox') as HTMLInputElement;
lfoCheckbox.addEventListener('input', function () {
    oscConfig.lfo = this.checked;
}, false);
