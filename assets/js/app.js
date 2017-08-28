$(document).ready(function() {
    var charactersArray = [{
            name: "jim halpert",
            id: 1,
            image: "https://cdn-images-1.medium.com/max/1280/1*4hlpJpldO6H30q4jbrHiCA.jpeg",
            startPoints: 200,
            killPower: 22,
            beKilled: 12
        },
        {
            name: "michael scott",
            id: 2,
            image: "http://mtncatholic.com/wp-content/uploads/2016/10/6357600113572837231773916132_michael-scott-s-top-tantrums.png",
            startPoints: 225,
            killPower: 36,
            beKilled: 20
        },
        {
            name: "pam beasley",
            id: 3,
            image: "http://az616578.vo.msecnd.net/files/2016/02/27/635922047166174307986109480_pam-halpert-1.jpg",
            startPoints: 225,
            killPower: 18,
            beKilled: 8
        },
        {
            name: "dwight schrute",
            id: 4,
            image: "http://az616578.vo.msecnd.net/files/2016/03/18/635939099971870877-2008862771_dwightC.jpg",
            startPoints: 225,
            killPower: 29,
            beKilled: 18
        }
    ];
    var fighterVal;
    var goodGuyVal;
    var attackersArray;
    var attackMembers;

    // Loop through and display all characters
    $.each(charactersArray, function(i, val){
        $(".allCharacters").append("<div class='col-md-3'><div class='char' value='" + charactersArray[i].id + "'><img id='charImage' src=" + charactersArray[i].image + "><h4>" + charactersArray[i].name + "</h4><h4>" + charactersArray[i].startPoints + "</h4></div></div>");
    });

    // User selection
    $(".char").on("click", function() {
        var player = $(this);
        goodGuyVal = $(this).attr("value");
        player.css("border", "5px solid green");
        player.removeClass("char");
        $(".goodGuy").prepend(player);
        player.addClass("selectPlayer");
        $(".char").addClass("attackers");
        // showAttackBtn();

        $(".attackers").on("click", function() {
            $(".attackers").removeClass("selectPlayer");
            $(".attackers").removeClass("char");
            var fighter = $(this);
            fighterVal = $(this).attr("value");
            fighter.css("border", "5px solid red");
            $(".fightTime").html(fighter);
            // showAttackBtn();
            attackers();
        });
    });

    // Battle
    // function showAttackBtn(goodGuyVal, fighterVal){
    //     goodGuyVal = $(".selectPlayer").after("<button type='submit' id='attack' value='attackValue'>Attack</button>");

    //     fighterVal = $(".attackers").after("<button type='submit' id='attack' value='attackValue'>Attack</button>");
    // }

    function attackers(attackMembers, attackersArray){   
        attackersArray = $(".attackers").toArray();
        $.each(attackersArray, function(i, val){
            console.log(attackersArray);
            var attackerBtn = ("<button type='submit' id='attack' value='"+i+"'>Attack</button>");
            // $(".attackers").after(attackerBtn);
        });

    }
    

});