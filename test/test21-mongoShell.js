// var name = "天蓬元帅"
// var date = Date.parse(new Date())
// var jsonStr = {"username":name,"time":date}
// var db = connect('log')
// db.login.insert(jsonStr)
// print("success");

//性能测试
// var startTime = new Date().getTime()
// var db = connect('test')
// for(var i = 0;i<1000;i++){
//   db.test.insert({"_id":i});
// }
// var endTime = new Date().getTime()
// print( endTime - startTime)

var startTime = new Date().getTime()
var db = connect('test');
var dataArray = []
for(var i = 0;i<1000;i++){
  var _sdObj = {
    "_id":i
  }
  dataArray.push(_sdObj)
}
db.test.insert(dataArray);
var endTime = new Date().getTime()
print( endTime - startTime)