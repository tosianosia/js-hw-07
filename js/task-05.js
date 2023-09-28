/*
 * Напиши скрипт, который при наборе текста в инпуте `input#name-input` (событие
 * input), подставляет его текущее значение в `span#name-output`. Если инпут
 * пустой, в спане должна отображаться строка `'незнакомец'`.
 */

const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputName);

function onInputName(event) {
  const name = event.currentTarget.value;

  name === ''
    ? (nameLabel.textContent = 'незнакомец')
    : (nameLabel.textContent = name);
}
