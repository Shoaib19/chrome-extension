$(function () {
  console.log("hello")

  $("#btnTest").click(function () {
      var v = $("#txtValue").val();
      alert("you have entered: " + v);
  });

});