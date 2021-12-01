//Use the same rest countries and print all countries name, region, sub region and population
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
  
    let result = data.forEach(ele => console.log(`Name:${ele.name}, Region:${ele.region}, Subregion:${ele.subregion}, Population:${ele.population}`));
}