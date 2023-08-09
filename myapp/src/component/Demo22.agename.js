import React from 'react'

let arr = [
    {name:'gopal', age:24},
    {name:'ram', age:22},
    {name:'shyam', age:25},
    {name:'radha', age:23},
]

export default function Demo22() {
  return (
    <>
        {

        arr.map((obj) => 
                 {
                      return ( <p>your name is {obj.name} and age is {obj.age}</p>)
                    
                  }
                     )
                    }
    </>
  
  ) }
