import PropTypes from 'prop-types'

function Schedule(props){
    return(
        <div>
          <p>IsFive: {props.isFive ? "Yes":"No"}</p>
          <p>playNext: {props.team}</p>
          <p>games: {props.games}</p>
        </div>
    );
}
Schedule.PropTypes = {
    IsFive: PropTypes.bool,
    playNext: PropTypes.string,
    games: PropTypes.number,
}

Schedule.defaultProps = {
    isFive: true,
    playNext: "None" ,
    games: "0",
}
export default Schedule