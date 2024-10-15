export default function Axis({src}:{src:string}) {
  return (
    <div className="flex justify-between items-center">
        <div className="size-20 rounded-full overflow-hidden">
            <img src={src} alt=""/>
        </div>
        <div className="size-20 rounded-full overflow-hidden">
            <img src={src} alt=""/>
        </div>
    </div>
  )
}
