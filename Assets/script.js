$(document).ready(function(){
  var now = dayjs().format("dddd, MMMM DD")
  $("#currentDay").text(now)
// console.log(now)
var currentHour = dayjs().hour()
$(".time-block").each(function(){
 var rowHour = $(this).attr("id")
 if(currentHour >rowHour){
  $(this).addClass("past")
 } else if(currentHour == rowHour){
  $(this).addClass("present")
 }else{
  $(this).addClass("future")
 }
})
})

$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).siblings(".description").attr("id");
 localStorage.setItem(time, value);
});

for(var i = 9; i < 18; i++){
  $("#hour-" + i).val(localStorage.getItem("hour-" + i))
}









