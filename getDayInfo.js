const getDayInfo = (date) => {
    /*
    Массив дней недели (для метода getDay(), который возвращает целое число, соответствующее дню недели:
    0 — воскресенье ... 6 — суббота) и массив месяцев (для метода getMonth(), который возвращает целое число, соответствующее
    месяцу года: 0 — январь ... 11 — декабрь)
     */
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    // Создание массива из аргумента date
    const arrData = date.split('.');
    // Создание объекта Date для переданной даты
    const checkDate = new Date(`${arrData[2]}-${arrData[1]}-${arrData[0]}`);
    // Возвращает строку по шаблону [<день недели>, <номер недели> неделя <месяц> <год> года]
    return `${days[checkDate.getDay()]}, ${getWeekOfMonth(checkDate)} неделя ${months[checkDate.getMonth()]} ${arrData[2]} года`;
}

//Вспомогательная функция для определения номер недели в месяце
function getWeekOfMonth(data) {
    const firstDay = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
    const checkDate = new Date(data)
    return Math.ceil((checkDate.getDate() + (firstDay - 1)) / 7);

}

export {getDayInfo}