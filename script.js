$(document).ready(function(){
    

    var valueStore = localStorage.getItem("itemName");
    var fontSizeValue = localStorage.getItem("fontSizeRange");
    var letterSpacingValue = localStorage.getItem("letterSpacingRange");

    if(valueStore !== null){
        $("#input-text").text(valueStore); 
        $("#text").val(valueStore);
    }

    if(fontSizeValue !== null){
        $("#input-text").css("font-size", fontSizeValue);
        $("#font-range").val(fontSizeValue);
    }

    if(letterSpacingValue !== null){
        $("#input-text").css("letter-spacing", letterSpacingValue);
        $("#space-range").val(letterSpacingValue);
    }

    console.log(fontSizeValue);

    // text write
    $("#text").keyup(function(){
        var companyName = $(this).val();
        $("#input-text").text(companyName); 
        localStorage.setItem("itemName", companyName)
    });

    // upper case and lower case
    $("#btn-up").on("click", handleupperCase);

    $("#btn-low").on("click", handleLowerCase);

    // Range change
    $("#font-range").on("change", handleFontSize);

    // letter spacing
    $("#space-range").on("change", handleLetterSpace);


    function handleupperCase(){
        $("#input-text").css("text-transform", "uppercase")
    }

    function handleLowerCase(){
        $("#input-text").css("text-transform", "lowercase")
    }

    function handleFontSize(){
        var fontSize = $(this).val() + "px";
        $("#input-text").css("font-size", fontSize);
        $(".range-val").text(fontSize);
        localStorage.setItem("fontSizeRange", fontSize);
    }

    function handleLetterSpace(){
        var letterSpace = $("#space-range").val() + "px";
        $("#input-text").css("letter-spacing", letterSpace);
        $(".range-letter").text(letterSpace);
        localStorage.setItem("letterSpacingRange", letterSpace);
    }
});

