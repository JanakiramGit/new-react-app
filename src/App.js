import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component{
    state = {
        counters: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
        ],
      };

      constructor(){
        super();
        //initialize the properties here.
        // console.log('Constructor called');
      }

      componentDidMount(){
        //Ajax calls can be used here to call server
        // console.log('App mounted');
      }

      handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
        
      }
    
      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
      }
    
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
      }

      addCounters() {
        let sum = 0;
    
        // this.state.counters.map((counter) => {
        //   sum = sum + counter.value;
        // });
        
        this.state.counters.forEach((counter) => {
            sum = sum + counter.value;
          });
        return sum;
      }

    render(){
        return(

            <React.Fragment>
                <NavBar totalCounters={this.addCounters()}/>            

                <main className="container">
                    <Counters 
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}                
                    />                    
                </main>
            </React.Fragment>
        );
    }
}

export default App;