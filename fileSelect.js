function newCatalog(){
	var catalog=prompt("请输入目录名","目录");
  return catalog;
}

 function fileSelect(){
  var input = $("<input type='file' id='file' multiple name='file' style='visibility: hidden;'/>")
  $("#root").append(input);
  $('#file').click();
  document.getElementById('file').addEventListener("change",()=>{
    var files = document.getElementById('file').files;
    console.log(files);
    $("#file").remove()
    return files;
  })
}
