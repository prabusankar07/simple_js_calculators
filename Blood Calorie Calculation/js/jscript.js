$(document).ready(function(){

	window.onload=getValues();

	function getValues(){
		height=parseInt($("#height").val());
        weight=parseInt($("#weight").val());
        age=parseInt($("#age").val());
        gender=$("input[name=gender]:checked").val();
        activity=parseFloat($("input[name=activity]:checked").val());
        calorieCalculation(height,weight,age,gender,activity);
	}

	function calorieCalculation(height,weight,age,gender,activity){
		if(gender=="male"){
		totalCalorie=[(10*weight)+(6.25*height)-(5*age)+5]*activity; 
		}else if(gender=="female"){
		totalCalorie=[(10*weight)+(6.25 * height)-(5*age)-161]*activity;
		}
		calorieOutput(totalCalorie);
	}

	function calorieOutput(totalCalorie){
		$("#totalCalorie").html("Total Calorie "+Math.round(totalCalorie));
		$("#losingOneKg").html("If you want to loose 5kg maintain calorie intake by  "+Math.round(totalCalorie-500)+" for three months");
		$("#losingTwoKg").html("If you want to loose 10kg maintain calorie intake by  "+Math.round(totalCalorie-1000)+" for three months");
		$("#sameWeight").html("If you want to have the same weight maintain calorie intake by  "+Math.round(totalCalorie));
		$("#gainOneKg").html("If you want to gain 5kg maintain calorie intake by  "+Math.round(totalCalorie+500)+" for three months");
		$("#gainTwoKg").html("If you want to gain 10kg maintain calorie intake by  "+Math.round(totalCalorie+1000)+" for three months");
	}

	$("#height").change(function() {
		getValues();
	});

	$("#weight").change(function() {
		getValues();
	});

	$("#age").change(function() {
	getValues();
	});

	$('input[type=radio][name=gender]').on('change', function() {
     getValues();
	});

	$('input[type=radio][name=activity]').on('change', function() {
     getValues();
	});
});
