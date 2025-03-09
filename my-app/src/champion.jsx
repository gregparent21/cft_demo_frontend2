
function Champion(props){
    const won = <h2>"The {props.name} have won a championship"</h2> 
    const none = <h2>"The {props.name} have won no championships"</h2> 
    return(
        (props.champion) ? won : none
    );
}

export default Champion