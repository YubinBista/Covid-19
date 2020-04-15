import React from 'react';
import { Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
//import styles './App.module.css';
import './App.module.css';

class App extends React.Component {
  state ={
    data: {},
  }
  async componentDidMount () {
    const fetchedData = await fetchData();

  this.setState({data: fetchedData});
     
  }
  render (){
  //const {data}= this.state;
  return (
     //<div className={styles.container}>
    <div clasName="container"> 
     <Cards data={this.state.data} />
       <CountryPicker />
       <Chart />
    </div>
  );
}
}

export default App;
