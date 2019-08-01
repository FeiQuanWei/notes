var startTime = new Date().getTime();
var db = connect('company')
var result = db.randomInfo.find({username:"tfruhjy8k"}); 
var endTime = new Date().getTime();
print(endTime - startTime)