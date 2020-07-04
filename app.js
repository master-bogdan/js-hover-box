// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// Вот массив (список) рандомных цветов

// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

// function setRandomColor(el) {
//     const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//     // Выбираем произвольный цвет из массива
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     el.style.background = randomColor;
//   }

//   function resetColor(el) {
//     el.style.background = '';
//   }

//   function onBoxHover(e) {
//     // Создаем массив элементов которые будут менять фон.
//     let elements = [e.currentTarget];
//     let currentEl = e.currentTarget;
//     // Проходимся циклом по всем дочерним элементам до самого последнего
//     while (currentEl) {
//       elements = [...elements, ...currentEl.children];
//       currentEl = currentEl.children[currentEl.children.length - 1];
//     }
//     // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//     elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
//   }

//   function onMouseLeave(e) {
//     resetColor(e.currentTarget);
//   }

//   document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
//   document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));

const boxes = document.querySelectorAll('.box');

function setRandomColor() {
    const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function setItemColor(e) {
    for (let i = 0; i < boxes.length; i++) {
        setTimeout(() => {
            boxes[i].style.background = setRandomColor();
        }, 200 * (i + 1));
    }
}

function resetColor() {
    boxes.forEach(item => {
        item.style.background = '';
    });
}

boxes.forEach(item => {
    item.addEventListener('mouseenter', setItemColor, true);
    item.addEventListener('mouseleave', resetColor, true);
});