// Write your code here
import './index.css'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  
  return (
    <div className="lol">
      <h1>PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem balu={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
