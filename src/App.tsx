import { gsap } from "gsap";

export default function App() {
  gsap.to(".red", { rotation: 360, x: 100, duration: 1 });
  gsap.from(".green", { rotation: -360, x: 200, duration: 1 });
  gsap.to(".blue", { rotation: 180, x: 100, duration: 3 });
  return (
    <div className=" w-ful h-screen flex flex-col items-start gap-5 justify-center">
      <div className="red h-20 w-20 bg-red-500"></div>
      <div className="green h-20 w-20 bg-green-500"></div>
      <div className="blue h-20 w-20 bg-blue-500"></div>
    </div>
  );
}
