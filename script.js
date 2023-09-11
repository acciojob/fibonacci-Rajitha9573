function fibonacci(num) {
// your code here
	if(num==0){
		return 0;
	}
	else if(num==1){
		return 1;
	}
	return fibonacci(n-1)+fibonacci(n-2);
}

module.exports = fibonacci;
