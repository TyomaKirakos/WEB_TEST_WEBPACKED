let fillTasksInLS = () => {
    if (!localStorage.tasks){
        let tasks = [
            {
                id: 0,
                question: "Какой тег позволяет создавать заголовки?",
                options: ["<h2>", "<p>", "<heading>", "<strong>"],
                rightAnswers: ["<h2>"]
            },
            {
                id: 1,
                question: "Как должен начинаться HTML файл?",
                options: ["<link type='html'>", "<html>", "<!DOCTYPE html>", "<!DOCTYPE>"],
                rightAnswers: ["<!DOCTYPE html>"]
            },
            {
                id: 2,
                question: "Как объявляются функции в JavaScript?",
                options: ["def", "void", "fun", "function"],
                rightAnswers: ["function"]
            },
            {
                id: 3,
                question: "Есть такой HTML-код: <p><span class='blue'>Синий</span> не синий</p>. Какой CSS-код внутри тега <span> сделает синий цвет:",
                options: ["Все представленные варианты подойдут", "p span {color: blue;}", "span {color: blue;}", ".blue {color: blue;}"],
                rightAnswers: ["Все представленные варианты подойдут"]
            },
            {
                id: 4,
                question: "Как правильно вставляются комментарии в CSS-код?",
                options: ["# Мой комментарий", "/* Мой комментарий */", "# Мой комментарий #", "// Мой комментарий"],
                rightAnswers: ["/* Мой комментарий */"]
            },
            {
                id: 5,
                question: "Где можно использовать JavaScript?",
                options: ["Веб-приложения", "Мобильные приложения", "Серверные приложения", "Во всех перечисленных"],
                rightAnswers: ["Во всех перечисленных"]
            },
            {
                id: 6,
                question: "Как можно объявить переменную в JavaScript?",
                options: ["let a;", "const a;", "var a;", "$a"],
                rightAnswers: ["let a;", "var a;"]
            },
        ];

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

export default fillTasksInLS;

