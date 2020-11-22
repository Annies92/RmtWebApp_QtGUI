

function buildTextEditor(contentType)
{
  if(contentType === 5)
  {
    var textElement = document.getElementById("listElement");
    var textEditor  = [];
    textEditor = window.mirror.textDesc;
    textElement.innerHTML  = '';
    textElement.innerHTML +=
      "<div>" + "<textarea type=\"text\" class=\"textEditor\" contenteditable=\"true\" id=\"textValue\" oninput=\"textEditor_func(value)\"></textarea>"
    + "<div style=\"margin-top:5px;\">"
        + "<button class=\"Okbutton\"  style=\"margin:0px 0px 0px 25px;\" onclick=\"acceptText()\">Save</button>"
        + "<label  class=\"textLabel\" for =\"limit\" id=\"textlimit\"> </label>"
    + "</div>"
    + "</div>" ;

    document.getElementById("textValue").value     = textEditor[0];
    document.getElementById("textlimit").innerText = textEditor[1];
    document.getElementById("textValue").maxLength = textEditor[2];
  }
  window.mirror.textDescChanged.connect(function(textData)
  {
    document.getElementById("textValue").value     = textData[0];
    document.getElementById("textlimit").innerText = textData[1];
    document.getElementById("textValue").maxLength = textData[2];
  });
}
