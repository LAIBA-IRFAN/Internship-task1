const Click = () =>{

    let selected_value = document.getElementById("options").value;
    if(selected_value === "patient"){
        document.getElementById("password").style.display = "none";
    }
    else{
        document.getElementById("password").style.display = "flex"
    }
}

export default Click;
