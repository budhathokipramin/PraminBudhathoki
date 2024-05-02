import React from 'react';
import { SkillSet, Skills} from '../../assets/data/skillsData';

const SkillCard: React.FC = () => {
    return (
        <div>
            {SkillSet.map((skill: Skills,index:number) => (
                <div key ={index}>
                    <div className="text-xl">{skill.name}</div>
                    <div className= "text-xs">{skill.level}</div>
                </div>
            ))}
        </div>
    );
};

export  {SkillCard};

