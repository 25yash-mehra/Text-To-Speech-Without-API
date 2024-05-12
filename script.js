let speech = new SpeechSynthesisUtterance();
let button = document.getElementById("button");
let textArea = document.getElementById("textArea");
let voiceselect = document.getElementById("select");
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceselect.options[i] = new Option(voice.name, i))
  );
};

button.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
