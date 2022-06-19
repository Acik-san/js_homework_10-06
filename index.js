// concat
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr = [1, 2, 3];
const arr1 = [4, 5, 6];
const arrConcat = arr.concat(arr1);

// reverse
// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrReverse = [1, 2, 3];
arrReverse.reverse();

// push
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);

// unshift
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrUnshift = [1, 2, 3];
arrUnshift.unshift(4, 5, 6);

// shift
// 5. Дан массив ['js','css','html']. Выведите на экран первый элемент и удалите его.
const arrShift = ["js", "css", "html"];
console.log(arrShift.shift());

//pop
// 6. Дан массив ['js','css','html']. Выведите на экран последний элемент и удалите его.
const arrPop = ["js", "css", "html"];
console.log(arrPop.pop());

//slice
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr2 = [1, 2, 3, 4, 5];
const arrSlice = arr2.slice(0, 3);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arrSlice1 = arr2.slice(-2);

// splice
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr4 = [1, 2, 3, 4, 5];
const arrSplice = arr4.splice(1, 3);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c',4, 5].
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(3, 0, "a", "b", "c");

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 0, "a", "b");
arr6.splice(6, 0, "c");
arr6.splice(8, 0, "e");

// sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr7 = [3, 4, 1, 2, 7];
arr7.sort();

// Object.keys
// 14. Дан объект {js:'test', jq:'hello', css:'world'}. Получите массив его ключей.
const object = {
  js: "test",
  jq: "hello",
  css: "world",
};
Object.keys(object);

//===================================================================
//===================================================================
//===================================================================

//1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

/**
 * Determines if an array contains a string
 * @param {array} arr
 * @param {string} str
 * @returns {boolean}
 */
function hasElem(arr, str) {
  if (typeof str !== "string") {
    throw new TypeError("Str must be a string!");
  }
  return arr.includes(str);
}

// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

/**
 * Determines if an array contains a number
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */
function hasNumber(arr, num) {
  if (num !== Number(num)) {
    throw new TypeError("Num must be a number!");
  }
  return arr.includes(num);
}

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - вернуть true [2,2,1], а если нет - вернуть false [1,2,1].

/**
 * Check array on same elements successively
 * @param {array} arr
 * @returns {boolean}
 */
function checkOnSameElemSuccessively(arr) {
  return arr.some((element, i, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i - 1]) {
        return true;
      }
    }
  });
}

//4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()

/**
 * Create array with random numbers in the given amount and range(num1-num2)
 * @param {number} amount
 * @param {number} num1
 * @param {number} num2
 * @returns {array}
 */
function createArrayWithRandomNumbers(amount, num1, num2) {
  if (
    amount !== Number(amount) ||
    num1 !== Number(num1) ||
    num2 !== Number(num2)
  ) {
    throw new TypeError("Must be a number!");
  }
  const newArr = [];
  for (let i = 0; i < amount; i++) {
    newArr.push(Math.round(Math.random() * (num1 - num2) + num2));
  }
  return newArr;
}

//5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

/**
 * Finds the arithmetic mean of given array
 * @param {array} arr
 * @returns {number}
 */
function findsTheArithmeticMean(arr) {
  if (arr.length === 0) {
    throw new Error("Array must be filled!");
  }
  if (arr.some((element) => element !== Number(element))) {
    throw new Error("Element must be a number!");
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const arr8 = [12, 15, 20, 25, 59, 79];
console.log(findsTheArithmeticMean(arr8));
