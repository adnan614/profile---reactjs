import React from 'react';

import './profile.style.css';

import Bio from './bio';

import Skills from './skills';


import Links from './Links';

class Profile extends React.Component{

    me = {

        name: 'Adnan Faruque Alvi',
        Title: 'FullStack Software Developer',
        SkillsA: 'Php',
        SkillsB: 'Laravel',
        SkillsC: 'Javascript',
        LinksA: 'facebook',
        LinksB: 'Linkedin',
        LinksC: 'Git Hub',
    }
    render(){

        // console.log('profile -' ,this.props);
        return(

            <div className="Container">
            <Bio name={this.me.name} title={this.me.Title} />
            <Skills skillsA={this.me.SkillsA} skillsB={this.me.SkillsB} skillsC={this.me.SkillsC}/>
            <Links linksA={this.me.LinksA} linksB={this.me.LinksB} linksC={this.me.LinksC} />
            </div>
        );
    }
}

export default Profile;