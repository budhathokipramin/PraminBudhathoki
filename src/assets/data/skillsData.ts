export enum skillLevel{
    Strong='Strong',
    Competent='Competent',
    Expert='Expert',
}

export enum category{
    Language='Language',
    Framework='Framework',
    Tools='Tools',
}


export type Skills={
    name: string;
    category: category;
    level: skillLevel;
};

export const SkillSet: Skills[]=[
    { 
        name: 'React',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'NextJs',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'HTML',
        category: category.Language,
        level: skillLevel.Expert,
    },
    { 
        name: 'Typescript',
        category: category.Language,
        level: skillLevel.Expert,
    },
    { 
        name: 'Javascript',
        category: category.Language,
        level: skillLevel.Expert,
    },
    { 
        name: 'Tailwind CSS',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Figma',
        category: category.Tools,
        level: skillLevel.Expert,
    },
 
    { 
        name: 'Nodejs',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'CSS3',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'NGINX',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Turborepo',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'pm',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'AWS',
        category: category.Framework,
        level: skillLevel.Expert,
    },

];
