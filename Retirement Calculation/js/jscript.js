$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		yearsRemaining=parseInt($("#yearsRemaining").val());
        income=parseInt($("#income").val());
        loan=parseInt($("#loan").val());
        mortgageBalance=parseInt($("#mortgageBalance").val());
        childrenEducation=parseInt($("#childrenEducation").val());
        funeralCost=parseInt($("#funeralCost").val());
        otherDebts=parseInt($("#otherDebts").val());
        insurance=parseInt($("#insurance").val());
        savings=parseInt($("#savings").val());
        otherFunds=parseInt($("#otherFunds").val());
        otherAssests=parseInt($("#otherAssests").val());
        expenseCalculation(income,yearsRemaining,loan,mortgageBalance,childrenEducation,funeralCost,otherDebts);
        savingsCalculation(insurance,savings,otherFunds,otherAssests);
        retirementCalculation(totalExpense,totalSavings);
	}

	function expenseCalculation(income,yearsRemaining,loan,mortgageBalance,childrenEducation,funeralCost,otherDebts){
		totalExpense=(income*yearsRemaining)+loan+mortgageBalance+childrenEducation+funeralCost+otherDebts;
		expenseOutput(totalExpense);
	}
	function savingsCalculation(insurance,savings,otherFunds,otherAssests){
		totalSavings=insurance+savings+otherFunds+otherAssests;
		savingsOutput(totalSavings);
	}
	function retirementCalculation(totalExpense,totalSavings){
		retirementRequired=totalExpense-totalSavings;
		retirementOutput(retirementRequired);
	}
	
	function expenseOutput(totalExpense){
		 $("#totalExpense").html("Total Expense would be "+totalExpense);
	}

	function savingsOutput(totalSavings){
		 $("#totalSavings").html("Total Savings at present is "+totalSavings);
	}
	function retirementOutput(retirementRequired){
		 $("#retirementRequired").html("Total Retirement required "+retirementRequired);
	}

	$("#income").change(function() {
		getValues();
	});

	$("#yearsRemaining").change(function() {
		getValues();
	});

	$("#loan").change(function() {
	getValues();
	});

	$("#mortgageBalance").change(function() {
		getValues();
	});

	$("#childrenEducation").change(function() {
		getValues();
	});

	$("#funeralCost").change(function() {
	getValues();
	});

	$("#otherDebts").change(function() {
	getValues();
	});

	$("#insurance").change(function() {
		getValues();
	});

	$("#savings").change(function() {
		getValues();
	});

	$("#otherFunds").change(function() {
	getValues();
	});

	$("#otherAssests").change(function() {
	getValues();
	});
});
