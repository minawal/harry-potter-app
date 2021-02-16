import './Card.css'
import createElement from '../../lib/createElement'

export default function Card({ name, house, image }) {
  const color = getColorByHouse(house)

  const heading = createElement('h2', { className: 'Card__heading' }, name)
  const houseEl = createElement(
    'span',
    { className: 'Card__house', style: `color: ${color}` },
    house
  )

  const imageEl = createElement('img', {
    className: 'Card__image',
    src: image,
    alt: '',
  })

  return createElement(
    'section',
    { className: 'Card' },
    heading,
    houseEl,
    imageEl
  )
}

function getColorByHouse(house) {
  return {
    Gryffindor: 'crimson',
    Hufflepuff: 'goldenrod',
    Ravenclaw: 'cornflowerblue',
    Slytherin: 'forestgreen',
  }[house]
}
