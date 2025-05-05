let isAudioPlaying = true;
let clickSoundInitialized = false;
let proceedIsInitializedOnce = false;

function proceed() {
  document.querySelector('.popup').style.display = 'none';
  document.getElementById('calculator').style.display = 'block';

  document.body.classList.remove('sadmode');
  document.documentElement.classList.remove('sadmode');

  document.body.classList.add('calc-mode');
  document.documentElement.classList.add('calc-mode');
document.getElementById('display').value = localStorage.getItem('value') ?? '';
  const audio = document.getElementById('calcsound');
  audio.volume = 0.05;
  audio.play();

  if (!clickSoundInitialized) {
    [...document.querySelectorAll('.calcbutton'), ...document.querySelectorAll('.calculatebutton')].forEach(button => {
      button.addEventListener('click', () => {
        const clickSound = document.getElementById('click-sound');
        clickSound.currentTime = 0;
        clickSound.volume = 0.05;
        clickSound.play();
      });
    });
    clickSoundInitialized = true;

 
  }


  if(!proceedIsInitializedOnce){
    const toggleBtn = document.getElementById('toggle-audio');
    toggleBtn.addEventListener('click', () => {
        if (isAudioPlaying) {
        audio.pause();
        toggleBtn.innerHTML = '<img src="yesmusic.png" class="yesmusic">Зловити вайб';
        } else {
        audio.play();
        toggleBtn.innerHTML = '<img src="nohear.png" class="nomusic">Не заважати';
        }
        isAudioPlaying = !isAudioPlaying;
    }); 
        
    }
      
document.getElementById('calcCharacter').style.display = 'block';

}
const expressions = ['shocked', 'sassy'];
let index = 0;

function changeExpression(expression, duration = 3000) {
  const characterImage = document.getElementById('characterImage');
  characterImage.src = `${expression}.png`;

  if (expression !== 'standard') {
    setTimeout(() => {
      characterImage.src = 'standard.png';
    }, duration); 
  }
}

changeExpression('standard');

setInterval(() => {
  changeExpression(expressions[index], 3000); 
  index = (index + 1) % expressions.length;
}, 300000);

function returnpop() {
    document.getElementById('calculator').style.display = 'none';
    document.getElementById('popup').style.display = 'block';
  
    document.body.classList.remove('calc-mode');
    document.documentElement.classList.remove('calc-mode');
  
    const calcsound = document.getElementById('calcsound');
    calcsound.pause();
    calcsound.currentTime = 0;
  }

function notProceed() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.notproceedmessage').style.display = 'block';
    document.body.classList.add('sadmode');
  document.documentElement.classList.add('sadmode');

  const audio = document.getElementById('rain-sound');
  audio.volume = 0.2;
  audio.play();
}

function goBack() {
    document.querySelector('.notproceedmessage').style.display = 'none';
    document.querySelector('.popup').style.display = 'block';
  
    document.body.classList.remove('sadmode');
    document.documentElement.classList.remove('sadmode');

    const audio = document.getElementById('rain-sound');
  audio.pause();
  audio.currentTime = 0;
  }

  function appendValue(val) {
    const display = document.getElementById('display');
  if(val === '.' && display.value === '') {
    val = '0.';
  }

if(display.value.endsWith('.') && val === '.'){
    return;
}

    if (display.value === 'Упсікі, щось не так!') {
      display.value = '';
      display.style.fontSize = '24px';
      display.style.color = '#db1515';
    }
  
    display.value += val;
    localStorage.setItem('value', display.value ?? '');
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.style.fontSize = '24px';
    display.style.color = '#db1515';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    if (display.value === ''){
        return;
    }
    try {   
      const result = eval(display.value);
      display.value = result;
      display.style.fontSize = '24px';
      display.style.color = '#db1515'; 
      display.style.fontWeight = 'normal';
      display.style.textShadow = 'none';
    } catch {
      display.value = 'Упсікі, щось не так!';
      display.style.fontSize = '14px';
      display.style.color = '#a71010'; 
      display.style.fontWeight = 'bold';
      display.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.2)';
    }
  }

  function backspace() {
    const display = document.getElementById('display');
    if (display.value === 'Упсікі, щось не так!') {
      clearDisplay();
      return;
    }
    display.value = display.value.slice(0, -1);
  }
