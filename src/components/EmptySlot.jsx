import {useEffect} from 'react'
import moleHillImg from '../molehill.png'

const EmptySlot =(props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 6000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleHillImg}
            alt={[]}/>
        </div>
    )
}

export default EmptySlot