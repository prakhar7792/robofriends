import React from 'react';
import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundries from '../components/ErrorBoundries'
 
class App extends React.Component {
    constructor(){
        super();
        this.state ={
            robots : robots,
            Searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        })
        .then(user => this.setState({robots : user}))
    }
    
    
    OnSearchChange = (event) =>{
        this.setState({ Searchfield : event.target.value})
        //console.log(filteredrobots);
    }

    
    
    render() {
        const filteredrobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1>Robo Friends </h1>
                <SearchBox searchChnage = {this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundries>
                        <CardList robots = {filteredrobots}/>
                    </ErrorBoundries>
                </Scroll>
            </div>
        );
    }
}
export default App;
