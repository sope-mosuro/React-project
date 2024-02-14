import Profilepic from './assets/profilepic.jpg'
function Card(){
    return(
        <div className="Card1">
         <img src={Profilepic} alt="placholder" className='card1image'></img>
         <h1 className="Card1title">This is my first card</h1>
         <p>Enjoy the movies guysssssss</p>
        </div>
    )

      
}
export default Card