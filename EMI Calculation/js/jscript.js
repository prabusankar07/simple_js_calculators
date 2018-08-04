var principal,interest,rateOfInterest,noOfInstallments,formulaNumerator,rateOfDifference;

$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		principal=parseInt($("#principal").val());
        interest=parseInt($("#interest").val());
        noOfInstallments=parseInt($("#noOfInstallments").val());
        emiCalculation(principal,interest,noOfInstallments);
	}

	function emiCalculation(principal,interest,noOfInstallments){
		rateOfInterest=interest/1200;
		formulaNumerator=(principal*rateOfInterest*(Math.pow(1+rateOfInterest,noOfInstallments)));
		formulaDenominator=(Math.pow(1+rateOfInterest,noOfInstallments-1));
		emi=Math.round(formulaNumerator/formulaDenominator);
		totalAmount=principal+emi;
		finalOutput(emi,totalAmount);

	}

	function finalOutput(emi,totalAmount){
		 $("#result").html("emi is"+emi);
		 $("#result1").html("totalAmount is"+totalAmount);
	}

	$("#principal").change(function() {
		getValues();
	});

	$("#interest").change(function() {
		getValues();
	});

	$("#noOfInstallments").change(function() {
	getValues();
	});

});
