/*
 * Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
 * количество элементов в `input` и нажимает кнопку `Создать`, после чего
 * рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
 * очищается.
 *
 * Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
 * число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
 * в `div#boxes`.
 *
 * Каждый созданный div:
 *
 * - Имеет случайный rgb цвет фона
 * - Размеры самого первого div - 30px на 30px
 * - Каждый следующий div после первого должен быть шире и выше предыдущего на 10px
 *
 * Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.
 */

const refs = {
  numericInputEl: document.querySelector('#controls > input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainerEl: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = `rgb(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}
    )`;
    boxEl.style.width = `${i * 10 + size}px`;
    boxEl.style.height = `${i * 10 + size}px`;

    boxes.push(boxEl);
  }

  refs.boxesContainerEl.append(...boxes);
}

function onRenderBtnClick() {
  const amount = Number(refs.numericInputEl.value);
  createBoxes(amount);
}

function onDestroyBtnClick() {
  refs.numericInputEl.value = '';
  refs.boxesContainerEl.innerHTML = '';
}
