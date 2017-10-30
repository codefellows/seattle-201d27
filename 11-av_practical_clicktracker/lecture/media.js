'use strict';

var audio = document.getElementById('lecture-audio');
var start = document.getElementById('audio-start');
var pause = document.getElementById('audio-pause');

function handleStartAudioClick() {
  audio.play();
}

function handlePauseAudioClick() {
  audio.pause();
}

start.addEventListener('click', handleStartAudioClick);
pause.addEventListener('click', handlePauseAudioClick);
