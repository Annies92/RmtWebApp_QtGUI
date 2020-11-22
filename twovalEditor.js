

function build2valueEditor(contentType)
{
  if(contentType === 7)
  {
    var twoValElement = document.getElementById("listElement");
    //console.log("data from argus :"+window.mirror.twoValData);
    var twoValueData = [];
    twoValueData = window.mirror.twoValData;
    twoValElement.innerHTML = '';
    twoValElement.innerHTML +=
      "<div class =\"twoValEditor\">"
    + "<div>" + "<label class =\"twoValLabel\" id=\"header\" style=\"justify-content:center; margin-left:100px;\"></label>"
    + "</div>"
    + "<div>" + "<label class =\"twoValLabel\" for=\"numValue1\" id=\"label1\"> </label>"
    + "<input  contenteditable=\"true\" class =\"twoValInput\" id=\"numValue1\" oninput=\"twoValInput1(value)\"></input>"
    + "</div>"
    + "<div>" + "<label class =\"twoValLabel\" for=\"numValue2\" id=\"label2\"></label>"
    + "<input  contenteditable=\"true\" class =\"twoValInput\" id=\"numValue2\" oninput=\"twoValInput2(value)\"></input>"
    + "</div>"
    + "<div>" + "<label class =\"twoValLabel\" id=\"footer\" style = \"justify-content:center;height : 80px; margin-left:15px;width:340px;\"></label>"
    + "</div>"
    + "<div>" + "<button class =\"Okbutton\" style=\"margin:0px 150px 80px;\" onclick=\"acceptTwoValData()\">Save</button>"
    + "</div>"
    + "</div>";
    document.getElementById("header").innerText = twoValueData[0];
    document.getElementById("label1").innerText = twoValueData[1];
    document.getElementById("numValue1").value  = twoValueData[2];
    document.getElementById("label2").innerText = twoValueData[3];
    document.getElementById("numValue2").value  = twoValueData[4];
    document.getElementById("footer").innerText = twoValueData[5];
    document.getElementById("numValue1").maxLength  = twoValueData[6];
    document.getElementById("numValue2").maxLength  = twoValueData[7];
  }


  window.mirror.twoValDataChanged.connect(function(twoValData)
  {
      console.log("two val data values :"+twoValData)
    document.getElementById("header").innerText = twoValData[0];
    document.getElementById("label1").innerText = twoValData[1];
    document.getElementById("numValue1").value  = twoValData[2];
    document.getElementById("label2").innerText = twoValData[3];
    document.getElementById("numValue2").value  = twoValData[4];
    document.getElementById("footer").innerText = twoValData[5];
    document.getElementById("numValue1").maxLength  = twoValData[6];
    document.getElementById("numValue2").maxLength  = twoValData[7];
  });
}
