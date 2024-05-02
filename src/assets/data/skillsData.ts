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
    { 
        name: 'Framer Motion',
        category: category.Framework,
        level: skillLevel.Expert,
    },

    { 
        name: 'GraphQL',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'REST APIs',
        category: category.Framework,
        level: skillLevel.Expert,
    },

    { 
        name: 'Prisma',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Drizzle',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Mongoose',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Redux',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'Sentry',
        category: category.Framework,
        level: skillLevel.Expert,
    },

    { 
        name: 'Shad CN',
        category: category.Framework,
        level: skillLevel.Expert,
    },

    { 
        name: 'PlanetScale',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    { 
        name: 'PostHog',
        category: category.Framework,
        level: skillLevel.Expert,
    },

];
