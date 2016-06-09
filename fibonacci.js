function sum(){
	
            var total = 0;
            var numToTest = 0;
            var largeNum = 1;
            var smallNum = 1;
            var upperLimit = prompt("How high would you like to go?", "Enter the number here.");

            while(numToTest < upperLimit){
                numToTest = smallNum + largeNum;
                smallNum = largeNum;
                largeNum = numToTest;
                if(numToTest % 2 === 0){
                    total += numToTest;
                }
            }
            document.write(total);
}