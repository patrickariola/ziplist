function zipList(list1, list2) {
    var result = [];
    for (var i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    var result = [];
    list1.forEach(function (item, index) {
        result.push(item);
        result.push(list2[index]);
    });
    return result;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
