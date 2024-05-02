import React from 'react';
import { Theme } from '../theme/theme';

const Navigator = () => {
    return (
        <div className="flex justify-around text-xl">
            <div className="flex flex-col mt-0">
                <div className="font-allura text-8xl font-black">
                    Pramin <span className="text-sky-600">Budhathoki</span>
                </div>
                <div className="font-PPEditNew m-8 mt-0 text-4xl">Full-stack Developer</div>
            </div>
            <div className="mt-8">Projects</div>
            <div className="mt-8">Blogs</div>
            <div className="mt-8">Skills</div>
            <div className="mt-8">Education</div>
            <div className="mt-8">Contact</div>
            <Theme /> 
            <div className="mt-8">EN</div>
        </div>
    );
};

export default Navigator;

