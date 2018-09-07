/* 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
 callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
 Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции */
function loop(times = 0, callback = null) {
  if (!callback) {
    return;
  }
  for (let i = 0; i < times; i++) {
    callback();
  }
}
function forFirstTask(ElementID) {
  let task1 = document.getElementById(ElementID);
  let temp = document.createElement("p");
  temp.innerText = "Вызов функции forFirstTask";
  task1.appendChild(temp);
}
document.getElementById("btn-submit_task1").onclick = function () {
  let times_form = document.getElementById("number").value;
  loop(times_form, () => { forFirstTask("task1") });
}

/* 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади
 (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
  выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать
  объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры,
  для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление. */

 function calculateArea(a = 0, b = 0) {
  return {
    area: a * b,
    figure: "Прямоугольник",
    input: `Длина прямоугольника - ${a}, ширина - ${b}`
  }
}
document.getElementById("btn-submit_task2").onclick = function() {
  let length = +document.getElementById("length").value;
  let width = +document.getElementById("width").value;
  let temp = calculateArea(length, width);
  let result = `Входные данные: ${temp.input}, фигура - ${temp.figure}, площадь - ${temp.area}`;
  document.getElementById("task2").innerText = result;
};

/* 3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a. */

class Human {
  constructor(name = "", age = -1, dateOfBirth = -1) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  displayInfo() {
    return `Имя: ${this.name}\nВозраст: ${this.age}\nДата рождения: ${this.dateOfBirth}\n`;
  }
}
class Employee extends Human {
  /**
   * @param {Human} human 
   * @param {number} salary 
   * @param {string} department 
   */
  constructor({name, age, dateOfBirth}, salary = 0, department = "") {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }
  displayInfo() {
    return super.displayInfo() + `Зарплата: ${this.salary}\nОтдел: ${this.department}`;
  }
}
class Developer extends Employee {
  /**
   * @param {Employee} param0 
   * @param {string} link_manager 
   */
  constructor({name, age, dateOfBirth, salary, department}, manager = "") {
    super({name, age, dateOfBirth}, salary, department);
    this.manager = manager;
  }
  get curentManager() {
    return this.manager;
  }
  set curentManager(link) {
    this.manager = link;
  }
  set diferentMethodForChangeManager(link) {
    this.manager = link;
  }
}
class Manager extends Employee {
   /**
   * @param {Employee} param0 
   * @param {Array<Developer>} arrayOfDevelopers 
   */
  constructor({name, age, dateOfBirth, salary, department}, arrayOfDevelopers = []) {
    super({name, age, dateOfBirth}, salary, department);
    this.developers = arrayOfDevelopers;
  }
  addDeveloper(developer) {
    if(developer instanceof Array) {
      developer.forEach(el => {
        this.developers.push(el);
      });
      return;
    }
    if(developer instanceof Developer) {
      this.developers.push(developer);
      return;
    }
    console.error("Ошибка! неверный тип данных");    
  }
  removeDeveloper(developer) {
    let index = this.developers.indexOf(developer);
    let last_index = this.developers.length - 1;
    /* удаляю выбранного разработчика из массива и заполняю "дырку" последним раз-ом в массиве */
    this.developers.splice(index, 1, this.developers.pop());
  }
}

let human1 = new Human("Jack", 20, 22);
let human2 = new Human("Nik", 30, 25);
let human3 = new Human("Lily", 23, 12);
let human4 = new Human("VOVA", 20, 20);
let employee1 = new Employee(human1, 3000, "Opp");
let employee2 = new Employee(human2, 2000, "Opp1");
let employee3 = new Employee(human3, 2000, "Opp2");
let manager = new Manager(employee3);
let dev1 = new Developer(employee1, "Lili");
let dev2 = new Developer(employee2, "Lili");
manager.addDeveloper([dev1, dev2]);
manager.removeDeveloper(dev1);
console.log("Задание 3: ", manager);

/* 4*. При помощи генератора написать функцию - анкету, которая запрашивает у
пользователя на ввод параметры и передаёт их в генератор. В конце, когда генератор
завершается, он должен вернуть все введённые входные параметры в виде объекта.
Этот объект нужно вывести в консоли.*/

function function4() {
  function* generate() {
    let result = {};
    result.name = yield;
    result.secondName =  yield;
    result.email = yield;
    return result;
  }

  let generator = generate();
  generator.next();
  generator.next(prompt("Введите ваше имя", ""));
  generator.next(prompt("Введите вашу фамилию", ""));
  let a = generator.next(prompt("Введите ваш email", "")).value;
  console.log("Задание 4:\n", a);
}
document.getElementById("task4").addEventListener("click", function4);

/* 5*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.'  */

let arrayPromises = [];
let baseURL = "https://jsonplaceholder.typicode.com/users/";
for(let i = 1; i <= 9; i++) {
  let temp = new Promise(function(resolve, reject) {
    resolve(fetch(`${baseURL}${i}`));
  });
  arrayPromises.push(temp);
}
let arrayResults = [];
let check = 0;
for(let i = 0 ; i < 9; i++) {
  arrayPromises[i]
  .then(res => { return res; })
  .then(response => response.json())
  .then(json => {
    arrayResults.push(json);
    check++;
  });
}

let interval = setInterval(function() {
  if(check == 9) {
    console.log("Задание 5:\n", arrayResults);
    clearInterval(interval);
  }
}, 500);