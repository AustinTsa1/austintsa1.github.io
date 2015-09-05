
function speak(){
meSpeak.loadConfig("mespeak_config.json");
meSpeak.loadVoice("voices/en/en-us.json");
meSpeak.speak(this.speech, {speed: rate});
}