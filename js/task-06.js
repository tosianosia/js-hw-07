/*
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
 * на правильное количество символов.
 *
 * - Сколько символов должно быть в инпуте указывается в его атрибуте
 *   `data-length`.
 * - Если введено подходящее количество, то `border` инпута становится зеленым,
 *   если неправильное - красным.
 *
 * Для добавления стилей используй CSS-классы `valid` и `invalid`.
 */

const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === dataLength) {
    input.classList.replace('invalid', 'valid');
    input.classList.add('valid');
  } else {
    input.classList.replace('valid', 'invalid');
    input.classList.add('invalid');
  }
}
