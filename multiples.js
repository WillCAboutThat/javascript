function multiples(){
var sum = 0;

for (i=0; i <=1000; i++){
	if (i % 3 === 0){
		sum += i;
	}
	if (i % 5 === 0){
		sum += i;
	}
}

document.write(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}