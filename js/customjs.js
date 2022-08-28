$(document).ready(function(){
	// Load more Trick
		$(".content").slice(0, 7).show();
		  $("#loadMore").on("click", function(e){
			e.preventDefault();
			$(".content:hidden").slice(0, 3).slideDown();
			if($(".content:hidden").length == 0) {
			  $("#loadMore").text("Still not convinced ?").addClass("noContent");
			$(".want-to-see-more").css("display", "flex");

			}
		 });
	// Load more Trick END
  
	// Years of Work Calculator
		var DateDiff = {
			inDays: function(d1, d2) {
				var t2 = d2.getTime();
				var t1 = d1.getTime();

				return parseInt((t2-t1)/(24*3600*1000));
			},

			inWeeks: function(d1, d2) {
				var t2 = d2.getTime();
				var t1 = d1.getTime();

				return parseInt((t2-t1)/(24*3600*1000*7));
			},

			inMonths: function(d1, d2) {
				var d1Y = d1.getFullYear();
				var d2Y = d2.getFullYear();
				var d1M = d1.getMonth();
				var d2M = d2.getMonth();

				return (d2M+12*d2Y)-(d1M+12*d1Y);
			},

			inYears: function(d1, d2) {
				return d2.getFullYear()-d1.getFullYear();
			}
		}
		var dString = "Feb, 01, 2014";
		var d1 = new Date(dString);
		var d2 = new Date();
		$("#yearsOfWork").html(DateDiff.inYears(d1, d2));
	// Years of Work Calculator END 
})