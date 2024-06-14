import React from 'react';
import { SkillSet, Skills, skillLevel } from '../../assets/data/skillsData';

const SkillCard: React.FC = () => {
    const strongSkills = SkillSet.filter((skill: Skills) => skill.level === skillLevel.Strong);
    const competentSkills = SkillSet.filter((skill: Skills) => skill.level === skillLevel.Competent);
    const expertSkills = SkillSet.filter((skill: Skills) => skill.level === skillLevel.Expert);

    return (
        <div>

            <div>
                {expertSkills.map((skill: Skills, index: number) => (
                    <div key={index} className="h-full md:col-span-6  lg:col-span-4 group/item">
                        <div className="text-xl font-firaSans">{skill.name}</div>
                        <div className="text-xs">{skill.level}</div>
                    </div>
                ))}
            </div>

            <div>
                {competentSkills.map((skill: Skills, index: number) => (
                    <div key={index}>
                        <div className="text-xl font-firaSans">{skill.name}</div>
                        <div className="text-xs">{skill.level}</div>
                    </div>
                ))}
            </div>

            <div>
                {strongSkills.map((skill: Skills, index: number) => (
                    <div key={index}>
                        <div className="text-xl font-firaSans">{skill.name}</div>
                        <div className="text-xs">{skill.level}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export { SkillCard };
