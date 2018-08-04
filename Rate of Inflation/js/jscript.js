var initialCPI,finalCPI,rateOFInflation,changeOfDifference,rateOfDifference;

$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		initialCPI=parseInt($("#initialValue").val());
        finalCPI=parseInt($("#finalValue").val());
        if (initialCPI==finalCPI){
        	$("#result").html("rateOFInflation is 0%");
        }else inflationCalculation(initialCPI,finalCPI);
	}

	function inflationCalculation(initialCPI,finalCPI){
		changeOfDifference=finalCPI-initialCPI;
		rateOfDifference=changeOfDifference/initialCPI;
		rateOFInflation=rateOfDifference*100;
		finalOutput(rateOFInflation);

	}

	function finalOutput(rateOFInflation){
		 $("#result").html(rateOFInflation+"%");
	}

	$("#initialValue").change(function() {
		getValues();
	});

	$("#finalValue").change(function() {
		getValues();
	});


});
