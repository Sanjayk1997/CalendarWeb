var today=new Date();
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyyy=today.getFullYear();
var day=today.getDay()-1;

var dayString=['M','T','W','Th','F','S','S'];
var monthString=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
var test=['1','2','3','4','5','6','7'];
var idCell=[]


for(i=0;i<7;i++){
   var j=test[i];
   document.getElementById(j).innerHTML = dayString[i];
  }

  var x = (dd%7)-1;
  var startMonIndex = (((day+1)-x)+7)%7;
  var prevMonIndex=startMonIndex;
  var nextMonIndex=0;
  var month=0;

function set(){
  mm=today.getMonth()+1;
  dd=today.getDate();

  x = (dd%7)-1;
  startMonIndex = (((day+1)-x)+7)%7;
  prevMonIndex=startMonIndex;
  nextMonIndex=0;
  month=0;
}


//alert(dd);

  function clear1(){
    for(i=8;i<49;i++){
      var index1 = i.toString();
      document.getElementById(index1).innerHTML = "";
      document.getElementById(index1).style.color="black";
      /*$('#'+index1).css({'background-color':'#009da5',
                          'text-align': 'center',
                          'font-weight':' bold',
                          'font-family': 'fantasy',
                          'color': 'Black',
                          'padding': '15px',
                          'transition-duration': '0.3s',
                          'background-color': '#009da5',
                          'border-radius':'3px' ,
                          'border': '2px solid #5deff7'})
          //$("div.myclass").hover(function() {
          //$(this).css("background-color","red")
          //});*/


                  }
      }


  function currMonth(){
    if(mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12){
      var k=0;
      for(i=startMonIndex-1;i<startMonIndex+30;i++){
        k++;
        index = i+8;
        var index1 = index.toString();
        document.getElementById(index1).innerHTML = k;
        //index+=1;
        if(month == 0){
          if(dd == k){
            document.getElementById(index1).style.color="white";
          }
        }
      }
      nextMonIndex= index+1;
    }
    else if (mm==2) {
      if(yyyy%4==0){
        var k=0;
        for(i=startMonIndex-1;i<startMonIndex+28;i++){
          k++;
          index = i+8;
          var index1 = index.toString();
          document.getElementById(index1).innerHTML = k;
          //index+=1;
          if(month == 0){
            if(dd == k){
              document.getElementById(index1).style.color="white";
            }
          }
        }
        nextMonIndex= index+1;
      }
      else {
        var k=0;
        for(i=startMonIndex-1;i<startMonIndex+27;i++){
          k++;
          index = i+8;
          var index1 = index.toString();
          document.getElementById(index1).innerHTML = k;
          if(month == 0){
            if(dd == k){
              document.getElementById(index1).style.color="white";

            }
          }
        }
        nextMonIndex= index+1;
      }
    }
    else {
      var k=0;
      for(i=startMonIndex-1;i<startMonIndex+29;i++){
        k++;
        index = i+8;
        var index1 = index.toString();
        document.getElementById(index1).innerHTML = k;

        if(month == 0){
          if(dd == k){
            document.getElementById(index1).style.color="white";
            //$('#'+index1).css('background-color', 'purple');
          }
        }
      //  alert(nextMonIndex);
      }
      nextMonIndex= index+1;
    }
    document.getElementById('mn').innerHTML = monthString[mm-1]+" "+yyyy;
  }




  currMonth();



  function nextMonth(){
    month++;
    nextMonIndex=nextMonIndex%7;
    if (nextMonIndex==0) {
      nextMonIndex=7;
      }

    prevMonIndex=nextMonIndex;
    mm=mm+1;
    if(mm>12){
      alert("Exceeded Year Limit");
      set();
      currMonth();
    }
    else {
        if (mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12){
            var k=0;
            for(i=nextMonIndex;i<nextMonIndex+31;i++){
              k++;
              index = i+7;
              var index1 = index.toString();
              document.getElementById(index1).innerHTML = k;
              if(month == 0){
                if(dd == k){
                  document.getElementById(index1).style.color="white";
                }
              }
            }
            nextMonIndex= index+1;
          }
        else if (mm==2) {
            if(yyyy%4==0){
              var k=0;
              for(i=nextMonIndex;i<nextMonIndex+29;i++){
                k++;
                index = i+7;
                var index1 = index.toString();
                document.getElementById(index1).innerHTML = k;
                if(month == 0){
                  if(dd == k){
                    document.getElementById(index1).style.color="white";
                  }
                }
              }
              nextMonIndex= index+1;

            }
            else {
              var k=0;
              for(i=nextMonIndex;i<nextMonIndex+28;i++){
                k++;
                index = i+7;
                var index1 = index.toString();
                document.getElementById(index1).innerHTML = k;
                if(month == 0){
                  if(dd == k){
                    document.getElementById(index1).style.color="white";
                  }
                }
              }
              nextMonIndex= index+1;
            }

        }
        else {
          var k=0;
          for(i=nextMonIndex;i<nextMonIndex+30;i++){
            k++;
            index = i+7;
            var index1 = index.toString();
            document.getElementById(index1).innerHTML = k;
            if(month == 0){
              if(dd == k){
                document.getElementById(index1).style.color="white";
              }
            }
          }
          nextMonIndex= index+1;
        }

        document.getElementById('mn').innerHTML = monthString[mm-1]+" "+yyyy;

      }
    }


function prevMonth(){
    month--;
    mm=mm-1;
    if (mm<1) {
      alert("Exceeded Current year");
      set();
      currMonth();
    }
    else {
              if (mm==1||mm==3||mm==5||mm==7||mm==8||mm==10||mm==12) {

                  prevMonIndex=((prevMonIndex-3)+21)%7;
                  if(prevMonIndex==0){
                    prevMonIndex=7;
                  }
                var k=0;
                for(i=prevMonIndex;i<prevMonIndex+31;i++){
                  k++;
                  index = i+7;
                  var index1 = index.toString();
                  document.getElementById(index1).innerHTML = k;
                  if(month == 0){
                    if(dd == k){
                      document.getElementById(index1).style.color="white";
                    }
                  }
                }
                nextMonIndex= index+1;
              }
              else if (mm==2) {
                if(yyyy%4==0){

                    prevMonIndex=((prevMonIndex-1)+21)%7;
                    if(prevMonIndex==0){
                      prevMonIndex=7;
                    }
                  var k=0;
                  for(i=prevMonIndex;i<prevMonIndex+29;i++){
                    k++;
                    index = i+7;
                    var index1 = index.toString();
                    document.getElementById(index1).innerHTML = k;
                    if(month == 0){
                      if(dd == k){
                        document.getElementById(index1).style.color="white";
                      }
                    }
                  }
                  nextMonIndex= index+1;
                }
                else {
                  var k=0;
                  for(i=prevMonIndex;i<prevMonIndex+28;i++){
                    k++;
                    index = i+7;
                    var index1 = index.toString();
                    document.getElementById(index1).innerHTML = k;
                    if(month == 0){
                      if(dd == k){
                        document.getElementById(index1).style.color="white";
                      }
                    }
                  }
                  nextMonIndex= index+1;


                }
              }
              else {

                  prevMonIndex=((prevMonIndex-2)+21)%7;
                  if(prevMonIndex==0){
                    prevMonIndex=7;
                  }
                var k=0;
                for(i=prevMonIndex;i<prevMonIndex+30;i++){
                  k++;
                  index = i+7;
                  var index1 = index.toString();
                  document.getElementById(index1).innerHTML = k;
                  if(month == 0){
                    if(dd == k){
                      document.getElementById(index1).style.color="white";
                    }
                  }
                }
                nextMonIndex= index+1;
              }
          document.getElementById('mn').innerHTML = monthString[mm-1]+" "+yyyy;
        }
}

$(document).ready(function(){
    $(".account").click(function(){
        $(".accdet").slideToggle("slow");
    });
});

document.getElementById('date1').innerHTML=dd.toString()+"-"+mm.toString()+"-"+yyyy.toString();
document.getElementById('date1').style.fontFamily="fantasy";


var prompt = document.getElementById('Prompt');
var span = document.getElementsByClassName("close")[0];

function ajax(dateValue, monthValue){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(this.responseText==1){
        alert("event recorded");
        document.getElementById('event').value="";
      }
      else{
        alert("no event entered");
      }
    }
  };
  xhttp.open("POST", "eventHandler.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('date='+dateValue+'&month='+monthValue+'&event='+document.getElementById('event').value);
}

function openWindow(ele) {
  document.getElementById('event').value="";
  var id = ele.id;
  var table = document.getElementById('calTable');
  column = (id-1)%7;
  row = (id-1)/7;
  row = parseInt(row,10);
  dateValue = table.rows[row].cells[column].innerHTML;
  monthValue = monthString[mm-1];
  if(dateValue){
    prompt.style.display = "block";
    //ajax(dateValue, monthValue);
  }
}

span.onclick = function() {
    prompt.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == prompt) {
        prompt.style.display = "none";
    }
}

// function cellValues() {
//   var table = document.getElementById('calTable');
//   alert(table.rows[2].cells[1].innerHTML);
//     }

function eventSend(){
  ajax(dateValue, monthValue);
}

function eventRetrieve(){
  var present=new Date();
  var presentDate=present.getDate();
  var pM=present.getMonth();
  var presentMonth = monthString[pM];

  var data = "hi";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = this.responseText;
      arr = data.split(":");
      size = arr.length;
      for(i=0;i<size-1;i++){
        j = i+100;
        document.getElementById(j.toString()).innerHTML = arr[i];
      }
    }
  };
  xhttp.open("POST", "eventDisplayer.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('toDate='+presentDate+'&toMonth='+presentMonth);
}

eventRetrieve();

function accountName(){
  var del = 0;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      nameAcc = this.responseText;
      document.getElementById('nAc').innerHTML = nameAcc;

    }
  };
  xhttp.open("POST", "account.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('temp='+del);

}

accountName();
