import style from './gameCard.module.css'

function GameCard(props){

  return(
    <div onClick={props.handelSelect} className={style.mainContainer}>
      <center><h2>{props.gameName}</h2></center>
      <img src={props.gameImg} />
      <h2 className={style.price}>{props.price}</h2>
    </div>
  )
}

export default GameCard