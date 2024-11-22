import './button.css'

export function ButtonMain({name}) {
   return (
      <button className="button">{name}</button>
   )
}

export function ButtonProduct({name}) {
   return (
      <button className="ButtonProduct">{name}</button>
   )
}