import logo from './logo.svg';
import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listReactamplifyapps } from './graphql/queries';
import DummyData from './dummydata/dummydata';

Amplify.configure(awsconfig)

function App() {


  // const fetchReactAmplifyApp = async () => {  
  //   try {
  //     const reactAmplifyAppData = await API.graphql(graphqlOperation(listReactamplifyapps));
  //     const 
  //   } catch (error) {}
  // }
  const dummyData = [{"name":"harsh", "score": 15},
                    {"name":"harsh", "score": 15},
                    {"name":"harsh", "score": 15}]

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Hello From Amplify</h2>
        {dummyData.map((value, index) => {
        return <DummyData key={index} name={value.name} score={value.score}/>
      })}
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
