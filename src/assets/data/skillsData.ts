export enum skillLevel {
    Strong = 'Strong',
    Competent = 'Competent',
    Expert = 'Expert',
}

export enum category {
    Language = 'Language',
    Framework = 'Framework',
    Tools = 'Tools',
}


export type Skills = {
    name: string;
    category: category;
    level: skillLevel;
};

export const SkillSet: Skills[] = [
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
        level: skillLevel.Competent,
    },
    {
        name: 'CSS3',
        category: category.Framework,
        level: skillLevel.Competent,
    },
    {
        name: 'NGINX',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'Turborepo',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'pm',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'AWS',
        category: category.Framework,
        level: skillLevel.Competent,
    },
    {
        name: 'Framer Motion',
        category: category.Framework,
        level: skillLevel.Competent,
    },

    {
        name: 'GraphQL',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'REST APIs',
        category: category.Framework,
        level: skillLevel.Expert,
    },

    {
        name: 'Prisma',
        category: category.Framework,
        level: skillLevel.Competent,
    },
    {
        name: 'Drizzle',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'Mongoose',
        category: category.Framework,
        level: skillLevel.Competent,
    },
    {
        name: 'Redux',
        category: category.Framework,
        level: skillLevel.Expert,
    },
    {
        name: 'Sentry',
        category: category.Framework,
        level: skillLevel.Competent,
    },

    {
        name: 'Shad CN',
        category: category.Framework,
        level: skillLevel.Strong,
    },

    {
        name: 'PlanetScale',
        category: category.Framework,
        level: skillLevel.Strong,
    },
    {
        name: 'PostHog',
        category: category.Framework,
        level: skillLevel.Strong,
    },

];
