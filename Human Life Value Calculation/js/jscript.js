$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		currentAge=parseInt($("#currentAge").val());
        currentIncome=parseInt($("#currentIncome").val());
        yearsRemaining=parseInt($("#yearsRemaining").val());
        increaseSalary=parseFloat($("#increaseSalary").val());
        discountInterest=parseFloat($("#discountInterest").val());
        humanLifeValueCalculation(currentAge,currentIncome,yearsRemaining,increaseSalary,discountInterest);
	}

	function humanLifeValueCalculation(currentAge,currentIncome,yearsRemaining,increaseSalary,discountInterest){
		percentIncreaseSalary=increaseSalary/100;
		percentDiscountInterest=discountInterest/100;
		ratioIncreaseSalary=(1/(1+percentIncreaseSalary));
		ratioCalculatedInterest=(1/(1+percentDiscountInterest));
		actualCalculatedInterest=ratioCalculatedInterest;
		for(initialValue=1;initialValue<=yearsRemaining;initialValue++){
			if(initialValue==1){				
				totalAmount=currentIncome*ratioCalculatedInterest;
			}else{
				currentIncome=currentIncome+(currentIncome*percentIncreaseSalary);
				actualCalculatedInterest=actualCalculatedInterest*ratioCalculatedInterest;
				actualAmount=currentIncome*actualCalculatedInterest;
				totalAmount+=actualAmount;
			}
		}
		finalOutput(Math.round(totalAmount));
	}

	function finalOutput(totalAmount){
		 $("#result").html("Insurance Needed is "+totalAmount);
	}

	$("#currentAge").change(function() {
		getValues();
	});

	$("#currentIncome").change(function() {
		getValues();
	});

	$("#yearsRemaining").change(function() {
		getValues();
	});

	$("#increaseSalary").change(function() {
		getValues();
	});

	$("#discountInterest").change(function() {
		getValues();
	});


});
