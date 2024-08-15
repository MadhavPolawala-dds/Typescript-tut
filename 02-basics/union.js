var score = 99;
var user1 = { username: "Madhav", id: 1372 };
user1 = { adminName: "MadhavPolawala", id: 1372 };
function getDataBaseId(id) {
    // id.toUpperCase();      // This is only usable with string, not usable with string and number combined
    if (typeof id == "string") {
        var newId = id.toUpperCase();
        return newId;
    }
    else {
        return id + 10;
    }
}
console.log(getDataBaseId(7));
console.log(getDataBaseId("Madhav"));
