/*
 * В HTML есть список категорий `ul#categories`.
 * Напиши скрипт, который выполнит следующие операции.
 *
 * Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
 * элементов `li.item`. Получится `'В списке 3 категории.'`.
 *
 * Для каждого элемента `li.item` в списке `ul#categories` найдет и выведет в
 * консоль текст заголовка элемента (тега h2) и количество элементов в категории
 * (всех вложенных в него элементов `li`).
 *
 * Например, для первой категории получится:
 *
 * - Категория: Животные
 * - Количество элементов: 4
 */

const categoriesEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesEl.querySelectorAll('.item');
const categoriesQuantity = categoriesItemsEl.length;

console.log(`В списке ${categoriesQuantity} категории.`);

categoriesItemsEl.forEach(item => {
  const categoryTitleEl = item.firstElementChild;
  const categoryListEl = item.lastElementChild;
  const categoryListElementsEl = categoryListEl.children;

  console.log(`Категория: `, categoryTitleEl.textContent);
  console.log('Количество элементов: ', categoryListElementsEl.length);
});
