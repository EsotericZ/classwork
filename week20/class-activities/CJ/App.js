// import HelloWorld from './components/HelloWorld';
// import JsxVariables from './components/JsxVariables';
// import Greeter from './components/Greeter';

import { HelloWorld, JsxVariables, Greeter, List } from './components/';

const App = () => {
  const students = ['Stephen', 'Matt', 'Rhys', 'Ian', 'CJ'];
  const cjFavCryptos = ['BTC', 'ATOM', 'ETH'];

  return (
    <>
      <List items={ students }/>
      <List items={ cjFavCryptos }/>
      <HelloWorld/>
      <JsxVariables/>
      <Greeter
        name='CJ'
        age={35}
        isHunter
        isFailure={false}
        favoriteBands={
          [
            'BMTH',
            'P86',
            'MC Chris',
          ]
        }
        pcSpecs={
          {
            gpu: '3090',
            cpu: 'i11',
          }
        }
        myFn={() => console.log('Nice Face')}
      />
      <Greeter name='Kirtley'/>
      <Greeter name='Sally'/>
      <Greeter name='Jimbo'/>
    </>
  );
}

export default App;