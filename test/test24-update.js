var db = connect('test1');
// db.test.update({name:"MinJie"},{$set:{name:"MinJie1",sex:2}})
// db.test.update({name:"MinJie1"},{$set:{"skill.SkillThree":"word"}})
// db.test.update({name:"MinJie1"},{$unset:{"age":""}})
db.test.update({name:"ShengLei"},{$inc:{"age":-10}})
print('success')