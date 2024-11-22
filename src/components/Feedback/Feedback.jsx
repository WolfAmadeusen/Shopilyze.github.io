export default function Feedback({ name, text, date }) {
   return (
      <>
         <div className="p-10 bg-orange-100 mb-6">
            <div className="flex gap-6 mb-4 items-center justify-between">
               <div className="flex gap-4">
                  <span className="font-bold  text-gray-800">{name}</span>
                  <span>Звёзды</span>
               </div>
               <div>{date}</div>
            </div>
            <p className="text-gray-600">{text}</p>
         </div>
      </>
   )
}