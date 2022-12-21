$(document).ready(function(){

    const data = [
        [2011, 31006, 29214],
        [2012, 30933, 29322],
        [2013, 30138, 28857],
        [2014, 30370, 28714],
        [2015, 30369, 28689],
        [2016, 30386, 28504],
        [2017, 29173, 27460],
        [2018, 28430, 26690],
        [2019, 28042, 26453],
        [2020, 27063, 25916]
    ];

    var boySum = 0;
    var girlSum = 0;
    var totalSum = 0;
    
    for(i=0; i<data.length; i++){

        var row = $("<tr></tr>").insertBefore($("#sumRow"));

        row.append("<td><input type='checkbox'></td>");

        for(j=0; j<data[i].length; j++){
            row.append("<td>" + data[i][j] + "</td>");
        };

        var genderTotal = data[i][1] + data[i][2];
        row.append("<td class='total'>" + genderTotal + "</td>");

        boySum += data[i][1];
        girlSum += data[i][2];
        totalSum += genderTotal;

    };

    $("#sumRow").append("<td>" + boySum + "</td>");
    $("#sumRow").append("<td>" + girlSum + "</td>");
    $("#sumRow").append("<td>" + totalSum + "</td>");

    var highest = {value: 0, year: 0};
    var lowest = {value: data[0][1] + data[0][2], year: 0};
    for(i=0; i<data.length; i++){


        var genderTotal = data[i][1] + data[i][2];
        if(highest["value"] < genderTotal){
            highest["value"] = genderTotal;
            highest["year"] = data[i][0];
        }

        if(lowest["value"] > genderTotal){
            lowest["value"] = genderTotal;
            lowest["year"] = data[i][0];
        }

    }
    
    $("p").append("I " + highest["year"] + " var det flest fødsler med " + highest["value"] + ". I " + lowest["year"] + " var det færrest fødsler med " + lowest["value"] + ".");

    $("input").click(function(){
        
    })

});