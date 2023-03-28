// "use client";
import React, { useState } from 'react';

export default function Form({ props }) {
    const [name, setName] = useState('');
    const [linkedinUrl, setLinkedinUrl] = useState('');
    const [githubUrl, setGithubUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            linkedinUrl: e.target.linkedinUrl.value,
            githubUrl: e.target.githubUrl.value
        };
        console.log("teste")
        // props.onSubmit(formData);
    }

    let classInput = 'w-32 justify-center flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg  focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="flex">
                    <label className={classInput} >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex">
                    <label className={classInput} >
                        Linkedin URL
                    </label>
                    <input
                        type="url"
                        name="linkedinUrl"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                    />
                </div>
                <div className="flex">
                    <label className={classInput} >
                        Github URL
                    </label>
                    <input
                        type="url"
                        name="githubUrl"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                    />
                </div>

                <button type="submit" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                    Generate Image
                </button>
            </form>

        </div>
    );
}
