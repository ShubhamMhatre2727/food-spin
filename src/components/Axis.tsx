export default function Axis({src}:{src:string}) {
  return (
    <div className="flex justify-between items-center">
            <img src={src} alt="" className="size-28 rounded-full"/>
            <img src={src} alt="" className="size-28 rounded-full"/>
    </div>
  )
}
