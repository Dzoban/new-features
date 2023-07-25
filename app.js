document.getElementById('vibrateBtn').addEventListener('click', function() {
  if ('vibrate' in navigator) {
    navigator.vibrate(100);
  } else {
    console.log('Vibration not supported.');
  }
}); 