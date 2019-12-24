import React from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
  super(); 
  this.state={
  monsters:[
    {
name:'zelalem',
email:'zelalem.antigegn12@gmail.com',
id:0
    },  
  {
      name:'zelalem',
      email:'zelalem.antigegn12@gmail.com',
      id:1
   },
   {
            name:'zelalem',
            email:'zelalem.antigegn12@gmail.com',
            id:2
    },
      {
        name:'zelalem',
         email:'zelalem.antigegn12@gmail.com',
         id:3
       },
       {
        name:'zelalem',
        email:'zelalem.antigegn12@gmail.com',
        id:4,
            },  
          {
              name:'zelalem',
              email:'zelalem.antigegn12@gmail.com',
              id:5,              
           },
           {
                    name:'zelalem',
                    email:'zelalem.antigegn12@gmail.com',
                    id:6
            },
              {
                name:'zelalem',
                 email:'zelalem.antigegn12@gmail.com',
                 id:7
               },
               {
                name:'zelalem',
                email:'zelalem.antigegn12@gmail.com',
                id:8
                    },  
                  {
                      name:'zelalem',
                      email:'zelalem.antigegn12@gmail.com',
                      id:9
                   },
                   {
                            name:'zelalem',
                            email:'zelalem.antigegn12@gmail.com',
                            id:10
                    },
                      {
                        name:'zelalem',
                         email:'zelalem.antigegn12@gmail.com',
                         id:11
                       },
                       {
                        name:'zelalem',
                        email:'zelalem.antigegn12@gmail.com',
                        id:12
                            },  
                          {
                              name:'zelalem',
                              email:'zelalem.antigegn12@gmail.com',
                              id:13
                           },
                           {
                                    name:'zelalem',
                                    email:'zelalem.antigegn12@gmail.com',
                                    id:14
                            },
                              {
                                name:'zelalem',
                                 email:'zelalem.antigegn12@gmail.com',
                                 id:15
                               }
  ],
  searchField:''
}
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render() {
    const {monsters, searchField}=this.state;

    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='search monsters'
      searchHandler= {e=>
        this.setState({searchField:e.target.value})} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
