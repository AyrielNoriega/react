// function App() {
//     return <h1>HelloWord app1</h1>
// }

// export default App;
import FirstApp from './FirstApp';

export const HelloWordApp = () => {
  return (
  <>
    <h1>HelloWord:</h1>
    <FirstApp title='Hola Ayriel' subtitle={123}/>
  </>
  )
}
