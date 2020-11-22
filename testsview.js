

function buildTestView(contentType,countTest)
{
  var testElement       = document.getElementById("listElement");
  testElement.innerHTML = '';

  if(contentType === 9)
  {
    if(countTest === 0)
    {
      var testdumElement       = document.getElementById("listElement");
      testdumElement.innerHTML = "<div class=\"testView\" id=\"testview\">"
                               + "<label id=\"emptyTest\" class=\"emptyTest\"></label>"
                               + "<div  id=\"statusline\" class=\"StatusLine\" style=\"position:absolute;top:680px;width:390px;border:none;\"></div>"
                               + "</div>";

      document.getElementById("emptyTest").innerHTML  =  window.mirror.testViewData[0];
      document.getElementById("statusline").innerHTML += "<label class=\"statuslinelabel\" id=\"status1\" >&#11015; </label>"
                                                      +  "<label class=\"statuslinelabel\" id=\"status2\" >&#11014; </label>"

      document.getElementById("status1").innerHTML    =  '&#11015;' + "\t\t" + window.mirror.statusLabel[0];
      document.getElementById("status2").innerHTML    =  '&#11014;' + "\t\t" + window.mirror.statusLabel[1];
    }

    else if(countTest > 0)

      showTestBox(contentType,countTest,window.mirror.currentIndexRemote);

    else
    {
      console.log("countTest undefined");
    }
  }
  //else
  //{
  //  console.log("wrong content in test view");
  //}

  window.mirror.statusLabelChanged.connect(function(statusLabel)
  {
    if(window.mirror.contentType === 9)
    {
      document.getElementById("status1").innerHTML = '&#11015;' + "\t\t" + statusLabel[0];
      document.getElementById("status2").innerHTML = '&#11014;' + "\t\t" + statusLabel[1];
    }
  });

  window.mirror.currentIndexRemoteChanged.connect(function(currentIndexRemote)
  {
    if(window.mirror.contentType === 9)
    {
      for(var i=0;i<countTest;i++)
      {
        document.getElementById("testData-"+i+"").style.backgroundColor = "gray" ;
      }

      if(currentIndexRemote < countTest)
        document.getElementById("testData-"+currentIndexRemote+"").style.backgroundColor = "#3371ff";

      console.log("index from indexchanged signal: "+currentIndexRemote);
    }
  });

  window.mirror.testViewDataChanged.connect(function(testViewData)
  {
    countTest = window.mirror.countTestRemote;

    if(window.mirror.contentType === 9)
    {
      if (countTest >0)
      {
        var testElement        = document.getElementById("listElement");
        testElement.innerHTML  = '';

        testElement.innerHTML  += "<div class=\"testView\"   id=\"testview\"></div>"
                               +  "<div class=\"StatusLine\" id=\"statusline\" style=\"border:none;position:relative;\"></div>" ;

        for(var i=0;i<countTest;i++)
        {
          document.getElementById("testview").innerHTML += "<div class=\"testViewBox\"  onclick=\"testBoxClicked1("+i+")\">"
                                                        +  "<label class =\"testBoxTitle\" id=\"testBoxTitle-"+i+"\"></label>"
                                                        +  "<div   class =\"testLabel\"    id=\"testData-"+i+"\">" + "</div>"
                                                        +  "</div>";

          document.getElementById("testBoxTitle-"+i+"").innerHTML = window.mirror.testBoxTitle[i];
          document.getElementById("testData-"+i+"").innerText     = testViewData[i].replace(/,/g, "\0");

          if(document.getElementById("testData-"+i+"").innerText === "Fehler")
          {
            document.getElementById("testBoxTitle-"+i+"").style.backgroundColor = "red";
          }
        }

        document.getElementById("statusline").innerHTML += "<label class=\"statuslinelabel\" id=\"status1\">&#11015;</label>"
                                                        +  "<label class=\"statuslinelabel\" id=\"status2\">&#11014;</label>"

        document.getElementById("status1").innerHTML    =  '&#11015;' + "\t\t" + window.mirror.statusLabel[0];
        document.getElementById("status2").innerHTML    =  '&#11014;' + "\t\t" + window.mirror.statusLabel[1];

        document.getElementById("testData-"+window.mirror.currentIndexRemote+"").style.backgroundColor = "#3371ff";

      }
      else if (countTest === 0)
      {
        var testdumElement       = document.getElementById("listElement");

        testdumElement.innerHTML = "<div class=\"testView\"   id=\"testview\">" + "<label class=\"emptyTest\" id=\"emptyTest\" ></label>"
                                 + "<div class=\"StatusLine\" id=\"statusline\" style=\"position:absolute;top:680px;width:390px;border:none;\"></div>" + "</div>";

        document.getElementById("emptyTest").innerHTML  =  testViewData[0];

        document.getElementById("statusline").innerHTML += "<label class=\"statuslinelabel\" id=\"status1\">&#11015;</label>"
                                                        +  "<label class=\"statuslinelabel\" id=\"status2\">&#11014;</label>"

        document.getElementById("status1").innerHTML    = '&#11015;' + "\t\t" + window.mirror.statusLabel[0];
        document.getElementById("status2").innerHTML    = '&#11014;' + "\t\t" + window.mirror.statusLabel[1];
      }
      else
      {
        var element       = document.getElementById("listElement");
        element.innerHTML = '';
      }
    }
    //else
    //{
    //  var Element       = document.getElementById("listElement");
    //  Element.innerHTML = "<label id=\"emptyTest\" class=\"emptyTest\"></label>"
    //  document.getElementById("emptyTest").innerHTML = testViewData[0];
    //}
    else if(window.mirror.contentType === 10)
    {
      var saveElement = document.getElementById("listElement");
      saveElement.innerHTML = '';
      saveElement.innerHTML = "<label id=\"emptyTest\" class=\"emptyTest\"></label>"
      document.getElementById("emptyTest").innerHTML = window.mirror.testViewData[0];
    }
    else
        console.log("false content in testview JS");

    //$('.testLabel').click(function()
    //{
    //  $('.testLabel').removeClass('buttons-click');
    //  $(this).addClass('buttons-click');
    //});

  });
}

function showTestBox(contType,TestCount,index)
{
  if(contType === 9)
  {
    var testElement        =  document.getElementById("listElement");
    testElement.innerHTML  =  '';
    testElement.innerHTML  += "<div class=\"testView\"   id=\"testview\"></div>"
                           +  "<div class=\"StatusLine\" id=\"statusline\" style=\"border:none;position:relative;\"></div>" ;

    for(var i=0;i<TestCount;i++)
    {
      document.getElementById("testview").innerHTML += "<div   class=\"testViewBox\"   onclick=\"testBoxClicked1("+i+")\">"
                                                    +  "<label class=\"testBoxTitle\"  id=\"testBoxTitle-"+i+"\"></label>"
                                                    +  "<div   class=\"testLabel\"     id=\"testData-"+i+"\">" + "</div>"
                                                    +  "</div>";

      document.getElementById("testBoxTitle-"+i+"").innerHTML = window.mirror.testBoxTitle[i];
      document.getElementById("testData-"+i+"").innerText     = window.mirror.testViewData[i].replace(/,/g, "\0");


      if(document.getElementById("testData-"+i+"").innerText === "Fehler")
      {
        document.getElementById("testBoxTitle-"+i+"").style.backgroundColor ="red";
      }
    }

    document.getElementById("statusline").innerHTML += "<label class=\"statuslinelabel\" id=\"status1\">&#11015;</label>"
                                                    +  "<label class=\"statuslinelabel\" id=\"status2\">&#11014;</label>"

    document.getElementById("status1").innerHTML    = '&#11015;' + "\t\t" + window.mirror.statusLabel[0];
    document.getElementById("status2").innerHTML    = '&#11014;' + "\t\t" + window.mirror.statusLabel[1];

    console.log("index Remote :"+index);
    if(index <= TestCount)
      document.getElementById("testData-"+index+"").style.backgroundColor = "#3371ff";

    //$('.testLabel').click(function() {
    //  $('.testLabel').removeClass('buttons-click');
    //  $(this).addClass('buttons-click');
    //});
  }
}
