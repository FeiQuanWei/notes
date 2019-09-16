//初始化观察者队列
const uniqueObserveList = new Set();

//将监听回调加入队列
const observe = fn => uniqueObserveList.add(fn);

//设置Proxy代理,拦截赋值操作
const observable =  obj => new Proxy(obj, {set});

//用来拦截属性的赋值操作
function set(target, key, value, receiver){
	//内部调用对应的 Reflect 方法
	const result = Reflect.set(target, key, value, receiver);
	//额外执行观察者队列
	uniqueObserveList.forEach( item => item() );
	return result;
}

let data = {
	name:'hello',
	age:30
};

//对data属性进行监听
const person = observable(data);

function print(){
	console.log( `${person.name}, ${person.age}` );
}

//print作为监听触发的回调函数
observe(print);

person.name = 'world';