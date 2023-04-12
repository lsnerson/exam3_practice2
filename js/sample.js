//PART 1

document.querySelector("#part1Checkbox").addEventListener("click", function(){
    if (document.getElementById("part1Checkbox").checked == true){
        document.getElementById("part2").style.display="block";
    }
    else{
        document.getElementById("part2").style.display="none";
    }
});

// PART 2

document.getElementById("repeat").addEventListener("click", function(){
    let mess1 = document.querySelector("#message1");
    let mess2 = document.querySelector("#message2");

    if (document.querySelector("#repeat").checked == true){
        mess2.value = mess1.value.toUpperCase();
    }
    else{
        mess2.value = "";
    } 
})

// PART 3

document.querySelectorAll("img")[4].addEventListener("mouseover", function(){
    image2 = document.querySelectorAll("img")[1].src;
    document.querySelectorAll("img")[4].src = image2;
});

document.querySelectorAll("img")[4].addEventListener("mouseout", function(){
    document.querySelectorAll("img")[4].src = "";

});

// PART 4

document.querySelectorAll("img")[4].setAttribute("tabindex", "0");

document.querySelectorAll("img")[4].addEventListener("focus", function(){
    image2 = document.querySelectorAll("img")[1].src;
    document.querySelectorAll("img")[4].src = image2;
});

document.querySelectorAll("img")[4].addEventListener("blur", function(){
    document.querySelectorAll("img")[4].src = "";

});





