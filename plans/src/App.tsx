import {  Check } from "lucide-react";
import Individual from "./Individual";
import Priflow from "./Priflow";
import Pro from "./Pro";
const App = () => {
  const texts = [
    "1 Profiles",
    "Basic analytics",
    "48-hour support response time",
  ];
  const icons =[
    <Check className="size-5 text-green-400	mr-1" />
  ];
  const inputs=[
    "5 Profiles",
    "Basic analytics",
    "48-hour support response time",
    "Custom integration",
  ];
  const contents=[
   "Unlimited",
   "Basic analytics",
   "48-hour support response time",
   "Custom integration",
   "Tracking user flow",
  ];
  return (
    <>
      <div className=" text-blue-950 font-bold	 p-5 pb-1 leading-5 pl-20">
        Subscription Plans
      </div>
      <Individual texts={texts} icon={icons} />
      <Priflow inputs={inputs} icon={icons}/>
      <Pro contents={contents} icon={icons}/>
    </>
  );
};

export default App;
