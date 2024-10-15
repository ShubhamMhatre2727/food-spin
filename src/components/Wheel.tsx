import Axis from "./Axis";

export default function Wheel() {
  return (
    <div className="size-full flex justify-center items-center relative">
        <div className="absolute w-full rotate-[90deg]">
          <Axis src={"src/assets/image0.svg"}/>
        </div>
        <div className="absolute w-full rotate-[150deg]">
          <Axis src={"src/assets/image2.svg"}/>
        </div>
        <div className="absolute w-full rotate-[210deg]">
          <Axis src={"src/assets/image1.svg"}/>
        </div>
    </div>
  )
}
