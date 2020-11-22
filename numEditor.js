

function buildNumEditor(contentType)
{
  if(contentType ===6)
  {
    var numElement = document.getElementById("listElement");
    var numEditor  = [];
    numEditor = window.mirror.numDesc;
    numElement.innerHTML  = '';
    numElement.innerHTML += "<form>"
    + "<div class =\"numEditor\" id=\"numeditor\">"
    + "<input type=\"text\" contenteditable=\"true\"  class =\"numEditor1\" id=\"numValue\" oninput=\"numEditor_func(value)\"></input>"
    + "<label type=\"text\" contenteditable=\"false\" class =\"numEditor1\" id=\"Ilabel\" style=\"text-align:left;font-size:24px;color:blue;\"></label>"
    + "</div>"
    + "<label id = \"numText\" class =\"numLabel\" style=\"float:middle;\"></label>"
    + "<button class=\"Okbutton\" onclick=\"acceptNumber()\">Save</button>"
    + "</form>"  ;

    document.getElementById("numValue").value     = numEditor[0];
    document.getElementById("Ilabel").innerText   = numEditor[1];
    document.getElementById("numText").innerText  = numEditor[2];
    document.getElementById("numValue").maxLength = numEditor[3];
    if(document.getElementById("Ilabel").innerText === "")
    {
      console.log("loop")
      document.getElementById("numeditor").innerHTML =
      "<input type=\"text\" contenteditable=\"true\" class =\"numEditor1\" id=\"numValue\" oninput=\"numEditor_func(value)\" style=\"text-align:center;width:420px;\"></input>";

      document.getElementById("numValue").value     = numEditor[0];
    }
  }
  window.mirror.numDescChanged.connect(function(numData)
  {
    if (window.mirror.contentType === 6)
    {
      var numElement = document.getElementById("listElement");
      var numEditor  = [];
      numEditor = window.mirror.numDesc;
      numElement.innerHTML  = '';
      numElement.innerHTML += "<form>"
      + "<div class =\"numEditor\" id=\"numeditor\">"
      + "<input type=\"text\" contenteditable=\"true\"  class =\"numEditor1\" id=\"numValue\" oninput=\"numEditor_func(value)\"></input>"
      + "<label type=\"text\" contenteditable=\"false\" class =\"numEditor1\" id=\"Ilabel\" style=\"text-align:left;font-size:24px;color:blue;\"></label>"
      + "</div>"
      + "<label  class=\"numLabel\" id = \"numText\" style=\"float:middle;\"></label>"
      + "<button class=\"Okbutton\" onclick=\"acceptNumber()\">Save</button>"
      + "</form>"  ;
      document.getElementById("numValue").value     = numData[0];
      document.getElementById("Ilabel").innerText   = numData[1];
      document.getElementById("numText").innerText  = numData[2];
      document.getElementById("numValue").maxLength = numData[3];
      if(document.getElementById("Ilabel").innerText === "")
      {
        console.log("loop")
        document.getElementById("numeditor").innerHTML =
        "<input type=\"text\" contenteditable=\"true\" class =\"numEditor1\" id=\"numValue\" oninput=\"numEditor_func(value)\" style=\"text-align:center;width:420px;\"></input>";

        document.getElementById("numValue").value     = numEditor[0];
      }
    }
  });


}
