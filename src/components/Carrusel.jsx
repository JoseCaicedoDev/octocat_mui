import React from "react"
const dataCarrusel = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/3577/3577429.png',
    title: 'CEO of Pispirispas Company',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
    name: 'John Carter',
    location: 'San Francisco, CA'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/3577/3577429.png',
    title: 'Pispirispas Company',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
    name: 'John Carter',
    location: 'San Francisco, CA'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/3577/3577429.png',
    title: 'CEO ',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.',
    name: 'John Carter',
    location: 'San Francisco, CA'
  },
]
export const Carrusel = () => {
  return (
    <>
      <div>
        <h1 style={{ color: "white" }}>hola</h1>
        {
          dataCarrusel.map(({ name, img }, index) => (
            <div key={index} style={{ width: '50px' }}>
              <img src={img} alt="" width='20px' />
              <p style={{ color: "white" }}>`hola ${name}`</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
