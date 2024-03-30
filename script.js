//TASK 1:
/*
//Get all the countries from Asia continent /region using Filter function

const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function(){
var data=request.response;
var result=JSON.parse(data)
var res=result.filter((ele)=>ele.region==="Asia")
var final=res.forEach((ele)=>console.log(ele.name.common))
}

//TASK 2:

//Get all the countries with a population of less than 2 lakhs using Filter function

const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function (){
  var data=request.response;
  var result=JSON.parse(data)
  var res=result.filter((ele)=>ele.population>200000)
  var final=res.forEach((ele)=>console.log(ele.name.common))
  }

//TASK 3:

//Print the following details name, capital, flag, using forEach function

const request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
request.onload=function (){
  var data=request.response;
  var result=JSON.parse(data)

  var final=result.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag));
  
  }
  
//TASK 4:

//Print the total population of countries using reduce function

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res=result.map((ele)=>ele.population)
  var final=res.reduce((sum,i)=>{
    return sum+i
  },0)
  console.log(final);
};

//TASK 5:

//Print the country that uses US dollars as currency.

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => {
    for (var i in ele.currencies) {
      if (i === "USD") {
        return true;
      }
    }
  });
  var final = res.map((ele) => ele.name.common);
  console.log(final);
};

*/