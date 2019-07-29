var workmate3={
  name:'MinJie',
  age:18,
  sex:1,
  job:'UI设计',
  skill:{
      skillOne:'PhotoShop',
      SkillTwo:'UI',
      SkillThree:'Word+Excel+PPT'
  },
  regeditTime:new Date()
}
var db = connect('test1')
db.test.update({name:"MinJie"},workmate3)
print("success")