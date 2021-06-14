    var player1_name =localStorage.getItem("player1_name");
    var player2_name =localStorage.getItem("player2_name");
    var player1_score = 0;
    var player2_score = 0;
    document.getElementById("player1_name").innerHTML= player1_name+":";
    document.getElementById("player2_name").innerHTML = player2_name+":";
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
    document.getElementById("player_question ").innerHTML ="question turn:"+player1_name;
    document.getElementById("player_answer").innerHTML = "answer turn:"+player2_name;
    function send()
    {
        var Number_1 = document.getElementById("Number_1").value;
        var Number_2 = document.getElementById("Number_2").value;
        var Actual_Answer =parseInt(Number_1) * parseInt(Number_2);
        console.log(Actual_Answer);
        var Question_Number="<h4>"+Number_1 + "X" + Number_2 + "</h4>";
        var Input_Box="<br> Answer: <input type='text' id='input_Checkbox'>";
        var Check_Button="<br><br> <button class='btn btn-info' onclick='Check()'> Check </button>";
        var Row= Question_Number + Input_Box + Check_Button;
        document.getElementById("output").innerHTML = Row;
        document.getElementById("Number_1").value ="";
        document.getElementById("Number_2").value ="";
        }