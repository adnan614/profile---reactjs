import React from 'react';

import Profile from './profile';

import Skills from './profile/skills';

import MyProps from './props';

import Bio from './profile/bio';

import Links from './profile/Links';

class App extends React.Component{
    render(){
       return(
        <div className="App">
            
              <Profile />
              < Bio name="Tasnim Farah" title="Graphices Designer"/>
              <div style={{ marginTop: '30px', marginBottom: '30px'}}>
                  
                  <Skills skillsA="html" skillsB="css" skillsC="graphices" />

                  <Links linksA="Facebook" linksB="Instagram" linksC="Twitter" />

              </div>

              
        </div>

       );
    }
}

export default App;