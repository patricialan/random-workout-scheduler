// from workout.js
const tableData = data;

// set max integer for each exercise type
var min = 0;
var max_arms = 11;
var max_core = 24;
var max_butt = 14;
var max_legs = 17;
var max_cardio = 3;
var max_balance = 6;

// function returns random integer between a min and max value (not including max value)
function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// function assigns random integer for each exercise type
function randomNum_forExercise() {
    randNum_arms = randomNum(min,max_arms);
    randNum_core = randomNum(min,max_core);
    randNum_butt = randomNum(min,max_butt);
    randNum_legs = randomNum(min,max_legs);
    randNum_cardio = randomNum(min,max_cardio);
    randNum_balance = randomNum(min,max_balance);

    // return randNum_arms, randNum_core, randNum_butt, randNum_legs, randNum_cardio, randNum_balance;
}

// function assigns workout for monday
function monday() {
    randomNum_forExercise();

    var M_arms = d3.select("#M_arms");
    M_arms.text(data.Arms[randNum_arms]);

    var M_core = d3.select("#M_core");
    M_core.text(data.Core[randNum_core]);

    var M_butt = d3.select("#M_butt");
    M_butt.text(data.Butt[randNum_butt]);

    var M_legs = d3.select("#M_legs");
    M_legs.text(data.Legs[randNum_legs]);

    var M_cardio = d3.select("#M_cardio");
    M_cardio.text(data.Cardio[randNum_cardio]);

    var M_balance = d3.select("#M_balance");
    M_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Tuesday
function tuesday() {
    randomNum_forExercise();

    var TU_arms = d3.select("#TU_arms");
    TU_arms.text(data.Arms[randNum_arms]);

    var TU_core = d3.select("#TU_core");
    TU_core.text(data.Core[randNum_core]);

    var TU_butt = d3.select("#TU_butt");
    TU_butt.text(data.Butt[randNum_butt]);

    var TU_legs = d3.select("#TU_legs");
    TU_legs.text(data.Legs[randNum_legs]);

    var TU_cardio = d3.select("#TU_cardio");
    TU_cardio.text(data.Cardio[randNum_cardio]);

    var TU_balance = d3.select("#TU_balance");
    TU_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Wednesday
function wednesday() {
    randomNum_forExercise();

    var W_arms = d3.select("#W_arms");
    W_arms.text(data.Arms[randNum_arms]);

    var W_core = d3.select("#W_core");
    W_core.text(data.Core[randNum_core]);

    var W_butt = d3.select("#W_butt");
    W_butt.text(data.Butt[randNum_butt]);

    var W_legs = d3.select("#W_legs");
    W_legs.text(data.Legs[randNum_legs]);

    var W_cardio = d3.select("#W_cardio");
    W_cardio.text(data.Cardio[randNum_cardio]);

    var W_balance = d3.select("#W_balance");
    W_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Thursday
function thursday() {
    randomNum_forExercise();

    var TH_arms = d3.select("#TH_arms");
    TH_arms.text(data.Arms[randNum_arms]);

    var TH_core = d3.select("#TH_core");
    TH_core.text(data.Core[randNum_core]);

    var TH_butt = d3.select("#TH_butt");
    TH_butt.text(data.Butt[randNum_butt]);

    var TH_legs = d3.select("#TH_legs");
    TH_legs.text(data.Legs[randNum_legs]);

    var TH_cardio = d3.select("#TH_cardio");
    TH_cardio.text(data.Cardio[randNum_cardio]);

    var TH_balance = d3.select("#TH_balance");
    TH_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Friday
function friday() {
    randomNum_forExercise();

    var F_arms = d3.select("#F_arms");
    F_arms.text(data.Arms[randNum_arms]);

    var F_core = d3.select("#F_core");
    F_core.text(data.Core[randNum_core]);

    var F_butt = d3.select("#F_butt");
    F_butt.text(data.Butt[randNum_butt]);

    var F_legs = d3.select("#F_legs");
    F_legs.text(data.Legs[randNum_legs]);

    var F_cardio = d3.select("#F_cardio");
    F_cardio.text(data.Cardio[randNum_cardio]);

    var F_balance = d3.select("#F_balance");
    F_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Saturday
function saturday() {
    randomNum_forExercise();

    var SA_arms = d3.select("#SA_arms");
    SA_arms.text(data.Arms[randNum_arms]);

    var SA_core = d3.select("#SA_core");
    SA_core.text(data.Core[randNum_core]);

    var SA_butt = d3.select("#SA_butt");
    SA_butt.text(data.Butt[randNum_butt]);

    var SA_legs = d3.select("#SA_legs");
    SA_legs.text(data.Legs[randNum_legs]);

    var SA_cardio = d3.select("#SA_cardio");
    SA_cardio.text(data.Cardio[randNum_cardio]);

    var SA_balance = d3.select("#SA_balance");
    SA_balance.text(data.Balance[randNum_balance]);
}

// function assigns workout for Sunday
function sunday() {
    randomNum_forExercise();

    var SU_arms = d3.select("#SU_arms");
    SU_arms.text(data.Arms[randNum_arms]);

    var SU_core = d3.select("#SU_core");
    SU_core.text(data.Core[randNum_core]);

    var SU_butt = d3.select("#SU_butt");
    SU_butt.text(data.Butt[randNum_butt]);

    var SU_legs = d3.select("#SU_legs");
    SU_legs.text(data.Legs[randNum_legs]);

    var SU_cardio = d3.select("#SU_cardio");
    SU_cardio.text(data.Cardio[randNum_cardio]);

    var SU_balance = d3.select("#SU_balance");
    SU_balance.text(data.Balance[randNum_balance]);
}

// function populates the page
function init() {
    // assign workouts for each day of the week
    monday();
    tuesday();
    wednesday();
    thursday();
    friday();
    saturday();
    sunday();
}

// populate the page
init();

// randomize table contents when button is clicked
d3.selectAll("#randomize-btn").on("click", init);

