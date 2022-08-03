 import React from 'react'
 import {FaRegTrashAlt} from 'react-icons/fa'
const style = {
  li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize',
  liComplete: 'flex'
}

 const Todo = ({todo}) => {
   return (
     <li>
      className={style.li}
      <div className={style.row}>
        <input type="checkbox"  />
<p className={style.text}>
  {Todo}
</p>


      </div>
      <button> {<FaRegTrashAlt />}
      </button>
      </li>
   )
 }
 
 export default Todo