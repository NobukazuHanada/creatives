function main(window) {
    return play(window);
};
function play(window) {
    var AudioCxt = at(window, AudioContext);
    var audioContext = new(AudioCxt());
    var oscNode = chain(audioContext, createOscillator());
    at(oscNode, type) = 'square';
    at(oscNode, frequency, value) = 2000;
    return chain(oscNode, connect(at(audioContext, destination)));
};
