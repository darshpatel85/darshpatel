import React  from 'react';

const RenderSkill=({name}) => {
    return(
        <button class="rounded p-2 m-4 bg-dark border-theme border-rounded"><h1 className="pl-4 pr-4 white pt-2">{name}</h1></button>
    );
}
const Skill =() => {
    return(
        <div className="container">
            <h1 className="header">SKILLS</h1>
            <RenderSkill name="React"/>
            <RenderSkill name="Python"/>
            <RenderSkill name="JavaScript"/>
            <RenderSkill name="React-Native"/>
            <RenderSkill name="JAVA"/>
            <RenderSkill name="BootStrap 4"/>
            <RenderSkill name="HTML/CSS"/>
            <RenderSkill name="PHP"/>
            <RenderSkill name="SQL"/>
        </div>
    );
}
export default Skill;