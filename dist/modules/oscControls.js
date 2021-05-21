export { oscConfig };
var oscConfig = {
    waveType: 'sine',
    attackTime: 0.2,
    decayTime: 1,
    lfo: false,
    lfoFrequency: 8
};
// attack
var attackControl = document.getElementById('attack');
attackControl.addEventListener('input', function () {
    oscConfig.attackTime = Number(this.value);
}, false);
// decay
var decayControl = document.getElementById('decay');
decayControl.addEventListener('input', function () {
    oscConfig.decayTime = Number(this.value);
}, false);
var soundwaveSelect = document.getElementById('soundwave');
soundwaveSelect.addEventListener('click', function (event) {
    oscConfig.waveType = this.value;
});
// lfo freq
var lfoControl = document.getElementById('lfo');
lfoControl.addEventListener('input', function () {
    oscConfig.lfoFrequency = Number(this.value);
}, false);
// lfo freq
var lfoCheckbox = document.getElementById('lfo-checkbox');
lfoCheckbox.addEventListener('input', function () {
    oscConfig.lfo = this.checked;
}, false);
