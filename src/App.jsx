import Counter from "./componets/counter";

const App = () => {

  const biodata ={
    name :"harry",
    age :"22"
  }
  return <div> <h2>hello</h2>
   
    <Counter name={biodata.name} age={biodata.age}/>
  </div>
};
export default App;
