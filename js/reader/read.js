
function speak(speech, rate){
meSpeak.loadConfig("mespeak_config.json");
meSpeak.loadVoice("voices/en/en-us.json");
meSpeak.speak('speech', {speed: rate});
}