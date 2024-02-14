// INVESTIGATION STUDY
// 'var' creates problems becasue it's scope is completely global, that's why 'let' was introduced. Don't use 'var' unless you want problems
// 'let' allows you to update the value
// 'const' don't allows you to update the value

const accountId = 144553
let accountEmail = "uzair@google.com"
var accounfPassword = "12345"
accountCity = "Jaiput"
let accountState

//accountId = 2
accountEmail = "hc@hc.com"
accounfPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);
console.table([accountId, accountEmail, accounfPassword, accountCity, accountState])