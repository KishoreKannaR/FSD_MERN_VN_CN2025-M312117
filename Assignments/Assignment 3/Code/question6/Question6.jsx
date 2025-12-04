import React from 'react'
import '../question6/Question6.css'

const Question6 = () => {
    const products = [
        { id: 1, name: "Bluetooth Speaker", price: 1799 },
  { id: 2, name: "Electric Kettle", price: 999 },
  { id: 3, name: "Wireless Mouse", price: 499 },
  { id: 4, name: "Coffee Mug Set", price: 299 },
  { id: 5, name: "Backpack", price: 1299 },
  { id: 6, name: "Table Lamp", price: 899 }
    ] 
  return (
    <div className='styletable'>
        <table>
            <thead>
             <tr>
                <th>ID</th>
                 <th>Name</th>
                 <th>Price</th>
             </tr>
            </thead>                    
                    <tbody>
                        {products.map((product)=>{
                            return(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{"\u20B9"}{product.price}</td>
                        </tr>)
                         })}
                    </tbody>                    
                </table>
            </div>
  )
}

export default Question6
