


$.ajax({
    method: "POST",
    url: "test.php",
    data: { name: "Ivan", location: "Ivanov" }
})
.done(function( data ) {
    alert(data);
});


function getField(arr, key) {
    arr.map(function(item, itemkey))
}


function getField(arr, key) {
    var result = [];
    arr.forEach(function(item, itemKey) {
        result.push(item[key]);
    })ж

    return result;
}