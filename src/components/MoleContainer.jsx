//useState from react
import {useState} from 'react'

//import child components
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    //declaring the state variables
    let [theMole, setTheMole] = useState(false)

    //defing the functin that handles the mole being bopped
    const handleClick = (e) => {
        //function that iterates score variable by 1 and sets mole display back to false
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    //defing the state variable as true or false
    let displayMole = theMole
    ? <Mole setScore= {props.setScore} toggle={setTheMole} handleClick={handleClick} />
    : <EmptySlot toggle={setTheMole} />

    return (
        <div style ={{'display' : 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer