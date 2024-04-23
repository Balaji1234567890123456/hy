// Write your code here

import './index.css'
const PlanetItem = props => {
  const {balu} = props
  const {name, imageUrl, description} = balu
  return (
    <div className="kol">
      <img src={imageUrl} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
