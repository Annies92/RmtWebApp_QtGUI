/********************************************************************/
/*                                                                  */
/*           HTML application's Javascript file                     */
/*                     (script.js)                                  */
/*                                                                  */
/* Date:     26.07.19                                               */
/* Author:   sivaram, intec GmbH Luedenscheid                       */
/*                                                                  */
/********************************************************************/

function output(message) {
    console.log(message)
}

window.onLoad = connectionFunction()

function connectionFunction()
{
  var baseUrl = "ws://192.168.20.10:12345";
  var socket = new WebSocket(baseUrl);

  socket.onclose = function() {
    output("web channel closed");
    //alertMessage1();
    };
  socket.onerror = function(error) {
    console.log("web channel error: " + error);
    //alertMessage2();
    };

  socket.onopen = function()
  {
    window.webChannelObject = new QWebChannel(socket, function(channel)
    {
      output("webchannel opened");
      //window.testObject        = channel.objects.backEndObject;
      window.mirror            = channel.objects.remoteMirror;
      doOnConnected()
    });
  }

   function doOnConnected()
   {
     doBasicSetup();
     buildPrioView(window.mirror.contentType);
     buildOptView(window.mirror.contentType);
     buildAbstractView(window.mirror.contentType);
     buildgridview(window.mirror.contentType);
     buildTextEditor(window.mirror.contentType);
     buildNumEditor(window.mirror.contentType);
     build2valueEditor(window.mirror.contentType);
     buildMVLView(window.mirror.contentType,window.mirror.currentIndexRemote);
     buildTestView(window.mirror.contentType,window.mirror.countTestRemote);
     console.log("initial content type :" +window.mirror.contentType);
     switch(window.mirror.contentType)
     {
       case 0  : console.log("Content type is 0"); //
                 var Element = document.getElementById("listElement");
                 Element.innerHTML ='';
                 break;
       case 1  : buildPrioView(window.mirror.contentType);                 break;
       case 2  : buildOptView(window.mirror.contentType);                  break;
       case 3  : buildAbstractView(window.mirror.contentType);             break;
       case 4  : buildgridview(window.mirror.contentType);                 break;
       case 5  : buildTextEditor(window.mirror.contentType);               break;
       case 6  : buildNumEditor(window.mirror.contentType);                break;
       case 7  : build2valueEditor(window.mirror.contentType);             break;
       case 8  : buildMVLView(window.mirror.contentType,window.mirror.currentIndexRemote);                  break;
       case 9  : buildTestView(window.mirror.contentType,window.mirror.countTestRemote);                 break;
       case 10 : if(window.mirror.contentType === 10)
                 {
                   var saveElement = document.getElementById("listElement");
                   saveElement.innerHTML = '';
                   saveElement.innerHTML = "<label id=\"emptyTest\" class=\"emptyTest\"></label>";
                   document.getElementById("emptyTest").innerHTML = window.mirror.testViewData[0];
                 }
                 break;
       default : var miscElement = document.getElementById("listElement");
                 miscElement.innerHTML ='';
                 break;
     }

     window.mirror.updateRemoteTriggered.connect(function(contType)
     {
       console.log("Update current view called with content :" +contType);
       switch(contType)
       {
         case 0  : console.log("Content type is 0"); // for status view
                   var Element = document.getElementById("listElement");
                   Element.innerHTML ='';
                   break;
         case 1  : buildPrioView(contType);               break;
         case 2  : buildOptView(contType);                break;
         case 3  : buildAbstractView(contType);           break;
         case 4  : buildgridview(contType);               break;
         case 5  : buildTextEditor(contType);             break;
         case 6  : buildNumEditor(contType);              break;
         case 7  : build2valueEditor(contType);           break;
         case 8  : buildMVLView(contType,window.mirror.currentIndexRemote);                break;
         case 9  : buildTestView(contType,window.mirror.countTestRemote);               break;
         case 10 : if(contType === 10)
                   {
                     var saveElement = document.getElementById("listElement");
                     saveElement.innerHTML = '';
                     saveElement.innerHTML = "<label id=\"emptyTest\" class=\"emptyTest\"></label>"
                     document.getElementById("emptyTest").innerHTML = window.mirror.testViewData[0];
                   }
                   break;
         default : var miscElement = document.getElementById("listElement");
                   miscElement.innerHTML ='';
                   break;
       }
     });
   }
}
function alertMessage1()
{
    alert("Web Socket closed");
}

function alertMessage2()
{
    alert("Web Socket error");
}

function sk1clicked()
{
  window.mirror.softKey1Clicked()
}
function sk2clicked()
{
  window.mirror.softKey2Clicked()
}
function sk3clicked()
{
  window.mirror.softKey3Clicked()
}
function sk4clicked()
{
  window.mirror.softKey4Clicked()
}
function backClicked()
{
  window.mirror.softKeyCancelClicked()
}
function mgrClicked()
{
  window.mirror.mgrClicked()
}


function optionClicked(i)
{
  window.mirror.listOptionClicked(i)
}
function gridOptionClicked(i)
{
  window.mirror.gridOptionClicked(i)
}


function numEditor_func(value)
{
  window.mirror.numEditorValChanged(value)
}
function textEditor_func(value)
{
  window.mirror.textEditorValChanged(value)
}
function twoValInput1(value)
{
  window.mirror.twoValInput1Changed(value)
}
function twoValInput2(value)
{
  window.mirror.twoValInput2Changed(value)
}

function acceptNumber()
{
  window.mirror.saveNumEditorValue()
}
function acceptText()
{
  window.mirror.saveTextEditorValue()
}
function acceptTwoValData()
{
  window.mirror.saveTwoValData()
}


function mvlClicked(i)
{
  window.mirror.mvlClicked(i)
}

function testBoxClicked1(i)
{
  window.mirror.testBoxClicked(i);
  if(window.mirror.contentType === 9)
  {
    for(var x=0;x<window.mirror.countTestRemote;x++)
    {
      document.getElementById("testData-"+x+"").style.backgroundColor = "gray" ;
    }
    document.getElementById("testData-"+i+"").style.backgroundColor = "#3371ff" ;
  }
}

