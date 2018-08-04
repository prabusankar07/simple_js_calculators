$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		loan=parseInt($("#loan").val());
        mortgageBalance=parseInt($("#mortgageBalance").val());
        childrenEducation=parseInt($("#childrenEducation").val());
        funeralCost=parseInt($("#funeralCost").val());
        otherDebts=parseInt($("#otherDebts").val());
        childrenPolicies=parseInt($("#childrenPolicies").val());
        insurance=parseInt($("#insurance").val());
        savings=parseInt($("#savings").val());
        otherFunds=parseInt($("#otherFunds").val());
        otherAssests=parseInt($("#otherAssests").val());
        income=parseInt($("#income").val());
        percentageSpent=parseInt($("#percentageSpent").val());
        surviourincome=parseInt($("#surviourincome").val());
        childrenNumber=parseInt($("#childrenNumber").val());
        protectionYears=parseInt($("#protectionYears").val());
        emergency=parseInt($("#emergency").val());
        futureSalary=parseInt($("#futureSalary").val());
        debtCalculation(loan,mortgageBalance,funeralCost,otherDebts,childrenPolicies);
        futureIncomeCalclation(income,percentageSpent,surviourincome,childrenNumber,childrenEducation,protectionYears,futureSalary,emergency);
        savingsCalculation(insurance,savings,otherFunds,otherAssests);
        insuranceCalculation(totalExpense,totalSavings,totalFutureNeeds);
	}

	function debtCalculation(loan,mortgageBalance,funeralCost,otherDebts,childrenPolicies){
		totalExpense=loan+mortgageBalance+funeralCost+otherDebts+childrenPolicies;
		debtOutput(totalExpense);
	}

	function futureIncomeCalclation(income,percentageSpent,surviourincome,childrenNumber,childrenEducation,protectionYears,futureSalary,emergency){
		amountSpent=(income*percentageSpent)/100;
		amountNeeded=futureSalary*protectionYears;
		amountEducation=childrenNumber*childrenEducation;
		amountTotal=(amountSpent+income)-surviourincome;
		totalFutureNeeds=amountTotal+amountNeeded+amountEducation;
		futureOutput(totalFutureNeeds);
	}

	function savingsCalculation(insurance,savings,otherFunds,otherAssests){
		totalSavings=insurance+savings+otherFunds+otherAssests;
		savingsOutput(totalSavings);
	}
	
	function insuranceCalculation(totalExpense,totalSavings,totalFutureNeeds){
		insuranceNeeded=totalExpense+totalFutureNeeds-totalSavings;
		insuranceutput(insuranceNeeded);
	}

	function debtOutput(totalExpense){
		 $("#totalExpense").html("Expense "+totalExpense);
	}

	function savingsOutput(totalSavings){
		 $("#totalSavings").html("Total Savings at present is "+totalSavings);
	}

	function futureOutput(totalFutureNeeds){
		 $("#totalFutureNeeds").html("Total future needs "+totalFutureNeeds);
	}

	function insuranceutput(insuranceNeeded){
		 $("#insuranceNeeded").html("Total Insurance needs "+insuranceNeeded);
	}

	$("#childrenEducation").change(function() {
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

	$("#income").change(function() {
	getValues();
	});

	$("#percentageSpent").change(function() {
	getValues();
	});

	$("#surviourincome").change(function() {
		getValues();
	});

	$("#emergency").change(function() {
		getValues();
	});

	$("#childrenNumber").change(function() {
	getValues();
	});

	$("#protectionYears").change(function() {
	getValues();
	});

	$("#futureSalary").change(function() {
	getValues();
	});
});
