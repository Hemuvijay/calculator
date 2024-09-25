let outputScreen = document.getElementById("output-screen");
    function updateScreen(num){
        outputScreen.value+=num;
    }
    function Calculate(){
        try{
            outputScreen.value= eval(outputScreen.value);
        }
        catch(err)
        {
            alert("Invalid")
        }
    }
    function clearScreen(){
        outputScreen.value= "";
    }
    function del(){
        outputScreen.value = outputScreen.value.slice(0,-1);
    }