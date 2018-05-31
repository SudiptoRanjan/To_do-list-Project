// //Check off Specefic Todos By Clicking
// $("li").click(function(){

// 	//if li is gray

// 		if($(this).css("color")==="rgb(128, 128, 128)"){
// 			//turn it black
// 			$(this).css({
// 		color:"black",
// 		textDecoration:"none"
// 		});

// 		}
// 	//else
// 	else{
// 	//turn it gray
// 		$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});

// 	}	
// 	// $(this).css("color","gray");
// 	// $(this).css("text-decoration","line-through");

// });

$("ul").on("click","li",function(){

// we have to add listeners when elements that exists while the page loaded. we didnt have all li when page loaded
// so if we add clickListeners to li that will add to those 3. So we add listeners to entire ul
//so we added a listener to an element which exists while page loads 
//but we are listening only to li that are clicked

	$(this).toggleClass("completed");
});

//Click on x to delete todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); 
	//stop the event from bubbling up to other elements

});

$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		//grabbing new toDo text from input
		var todoText=$(this).val();
		$(this).val("");
		//empty string works as setter .It clears the input 

		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");


	}
});

$(".fa-plus").click(function(){

	$("input[type='text']").fadeToggle();
});



