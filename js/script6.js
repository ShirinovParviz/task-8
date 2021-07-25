let arr = ["Табуретка", "Стол", "Стул", "Люстра", "Диван", "Кровать", "Плед"];

function hasTwins(array){
    return array.length !== new Set(array).size;
}