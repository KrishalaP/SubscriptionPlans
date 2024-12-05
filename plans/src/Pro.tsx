import { Button } from "@/components/ui/button"
type props = {
  contents: string[];
  icon: React.ReactNode [];
};
const Pro = (Props:props) => {
  return (
    <>
    <h1 className=" text-blue-950 font-bold	 p-2 text-xl	 leading-5 pl-20 ">Priflow Pro</h1>
        <div className=" flex justify-between items-center px-20">
        <p className=" text-slate-500	">The essensitals to provide your best work for clients.</p>    
        <div className="font-bold text-3xl text-right flex p-1 gap-6" >
          <h2>$28 /mo</h2>
          <Button variant="outline">Subscribe</Button>
        </div>
        </div>
        <h3 className=" text-blue-950 font-bold	 p-2 text-l	 leading-5 pl-20">What’s included</h3>
      <div className=	"pl-20 ">
        {Props.contents.map((content, index) => (
          <div key={index} className="flex items-center p-2">
            <div> {Props.icon}</div>
            <h4>{content}</h4>
          </div>
        ))}
      </div>
    </>
  )
}
export default Pro
// hello
// krishala Poudel kaaaaaaaaaaaaaaa
// i am girl kkkkkkkkkk