function main(window) {
    return play(window);
};
function play(window) {
    var AudioCxt = window.AudioContext;
    var audioContext = new AudioCxt();
    var oscNode = audioContext.createOscillator();
    oscNode.type = 'square';
    oscNode.frequency.value = 2000;
    oscNode.start(0);
    return oscNode.connect(audioContext.destination);
};
main(window);
