

function buildMVLView(contentType,index)
{
  if(contentType === 8)
  {
    var MVLelement = document.getElementById("listElement");
    MVLelement.innerHTML ='';
    MVLelement.innerHTML += "<div class=\"MVLView\">"

    + "<div class=\"SButton\" id=\"element-0\" onclick=\"mvlClicked(0)\" style=\"font-size:24px;width:400px;height:40px;text-align:center;margin:10px 5px 5px 10px;padding-top:5px;\"></div>"

    + "<div class=\"Service\">"

    + "<div    class=\"SButton\"   id=\"element-1\" onclick=\"mvlClicked(1)\">"
    + "<button class=\"SrvButton\" id=\"data\" ></button>"
    + "<label  id =\"image1\" style=\"width:25px;height:30px;margin-left:30px;margin-bottom:5px;visibility:hidden;\">&#11015;</label>"
    + "</div>"

    + "<div    class=\"SButton\"   id=\"element-2\" onclick=\"mvlClicked(2)\">"
    + "<button class=\"SrvButton\" id=\"voip\"></button>"
    + "<label  id =\"image2\" style=\"width:25px;height:30px;margin-left:30px;margin-bottom:10px;visibility:hidden;\">&#10003;</label>"
    + "</div>"

    + "<div    class=\"SButton\"   id=\"element-3\" onclick=\"mvlClicked(3)\">"
    + "<button class=\"SrvButton\" id=\"iptv\" ></button>"
    + "<label  id =\"image3\" style=\"width:25px;height:30px;margin-left:30px;margin-bottom:5px;visibility:hidden;\">&#10003;</label>"
    + "</div>"

    + "<div    class=\"SButton\"   id=\"element-4\" onclick=\"mvlClicked(4)\">"
    + "<button class=\"SrvButton\" id=\"opt\" ></button>"
    + "<label  id =\"image4\" style=\"width:25px;height:30px;margin-left:30px;margin-bottom:5px;visibility:hidden;\">&#215;</label>"
    + "</div>"

    + "<div    class=\"SButton\"   id=\"element-5\" onclick=\"mvlClicked(5)\" style=\"width:90px;visibility:hidden;\">"
    + "<button class=\"SrvButton\" id=\"BR\"        style=\"visibility:hidden;width:60px;\" ></button>"
    + "<label  id =\"image5\" style=\"width:25px;height:30px;margin-left:40px;margin-bottom:5px;visibility:hidden;\">&#10710;</label>"
    + "</div>"
    + "</div>"

    + "<div class=\"VL\">"
    + "<div type=\"button\" id= \"element-6\"  class=\"SButton\" onclick=\"mvlClicked(6)\" style=\"height:45px;text-align:center;padding: 10px 10px;\"                                   >V4</div>"
    + "<div type=\"button\" id= \"element-7\"  class=\"SButton\" onclick=\"mvlClicked(7)\" style=\"height:45px;text-align:center;padding: 10px 10px;\"                                   >V4</div>"
    + "<div type=\"button\" id= \"element-8\"  class=\"SButton\" onclick=\"mvlClicked(8)\" style=\"height:45px;text-align:center;padding: 10px 10px;\"                                   >V4</div>"
    + "<div type=\"button\" id= \"element-9\"  class=\"SButton\" onclick=\"mvlClicked(9)\" style=\"height:45px;text-align:center;padding: 10px 10px;\"                                   >V4</div>"
    + "<div type=\"button\" id= \"element-10\" class=\"SButton\" onclick=\"mvlClicked(10)\" style=\"height:45px;text-align:center;padding: 10px 10px;margin-right:5px;margin-left:15px;\" >V4</div>"
    + "</div>"

    + "<div class=\"PL\">"
    + "<div class=\"SButton\" type=\"button\" id=\"element-11\" style=\"width:280px;\"                   onclick=\"mvlClicked(11)\"></div>"
    + "<div class=\"SButton\" type=\"button\" id=\"element-12\" style=\"width:100px;visibility:hidden;\" onclick=\"mvlClicked(12)\"></div>" + "</div>"

    + "</div>";

    document.getElementById("element-0").innerHTML = window.mirror.mvlText[0];
    document.getElementById("data").innerHTML      = window.mirror.mvlText[1];
    document.getElementById("voip").innerHTML      = window.mirror.mvlText[2];
    document.getElementById("iptv").innerHTML      = window.mirror.mvlText[3];
    document.getElementById("opt").innerHTML       = window.mirror.mvlText[4];
    document.getElementById("BR").innerHTML        = window.mirror.mvlText[5];

    document.getElementById("BR").style.visibility           = window.mirror.mvlVisible[0];
    document.getElementById("element-6").style.visibility    = window.mirror.mvlVisible[1];
    document.getElementById("element-7").style.visibility    = window.mirror.mvlVisible[2];
    document.getElementById("element-8").style.visibility    = window.mirror.mvlVisible[3];
    document.getElementById("element-9").style.visibility    = window.mirror.mvlVisible[4];
    document.getElementById("element-10").style.visibility   = window.mirror.mvlVisible[5];
    document.getElementById("element-12").style.visibility   = window.mirror.mvlVisible[6];

    if(document.getElementById("BR").style.visibility === "visible")
      document.getElementById("element-5").style.visibility    = "visible" ;
    else
      document.getElementById("element-5").style.visibility    = "hidden" ;

    document.getElementById("element-"+window.mirror.mvlIndexRemote+"").style.backgroundColor = "#3371ff" ;
  }

  //$('.SButton').click(function()
  //{
  //  $('.SButton').removeClass('buttons-click');
  //  $(this).addClass('buttons-click');
  //});


  window.mirror.mvlIndexRemoteChanged.connect(function(mvlIndexRemote)
  {
    if(window.mirror.contentType === 8)
    {
      for(var i=0;i<13;i++)
      {
        document.getElementById("element-"+i+"").style.backgroundColor = "gray" ;
      }
      document.getElementById("element-"+mvlIndexRemote+"").style.backgroundColor = "#3371ff" ;
    }
  });

  //window.mirror.vLTextChanged.connect(function (vLText)
  //{
  //  document.getElementById("element-6").innerHTML = vLText[0];
  //});

  window.mirror.mvlVisibleChanged.connect( function(mvlVisible)
  {
    if(window.mirror.contentType === 8)
    {
      document.getElementById("BR").style.visibility          = mvlVisible[0];
      document.getElementById("element-6").style.visibility   = mvlVisible[1];
      document.getElementById("element-7").style.visibility   = mvlVisible[2];
      document.getElementById("element-8").style.visibility   = mvlVisible[3];
      document.getElementById("element-9").style.visibility   = mvlVisible[4];
      document.getElementById("element-10").style.visibility  = mvlVisible[5];
      document.getElementById("element-12").style.visibility  = mvlVisible[6];

      if(document.getElementById("BR").style.visibility === "visible")
        document.getElementById("element-5").style.visibility    = "visible" ;
      else
        document.getElementById("element-5").style.visibility    = "hidden" ;
    }
  });

  window.mirror.mvlTextChanged.connect(function(mvlText)
  {
    if(window.mirror.contentType === 8)
    {
      document.getElementById("element-0").innerHTML = mvlText[0];
      document.getElementById("data").innerHTML      = mvlText[1];
      document.getElementById("voip").innerHTML      = mvlText[2];
      document.getElementById("iptv").innerHTML      = mvlText[3];
      document.getElementById("opt").innerHTML       = mvlText[4];
      document.getElementById("BR").innerHTML        = mvlText[5];
    }
  });
}
