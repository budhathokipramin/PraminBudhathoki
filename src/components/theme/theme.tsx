import {Light} from '../../assets/theme/light';
import {System} from '../../assets/theme/system';
import {Dark} from '../../assets/theme/dark';
import {useTheme} from '../../hooks/useTheme'; // Importing the custom hook

const Theme = () => {
    const { theme, handleThemeSelection } = useTheme();

    return (
        <div className={`flex m-8 mb-28 rounded-full border-solid border `}>
            <button
                className={`m-2 ${theme === 'light' ? 'bg-gray-500' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full`}
                onClick={() => handleThemeSelection('light')}
            >
                <Light />
            </button>
            <button
                className={`m-2 ${theme === 'system' ? 'bg-gray-500' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full`}
                onClick={() => handleThemeSelection('system')}
            >
                <System />
            </button>
            <button
                className={`m-2 ${theme === 'dark' ? 'bg-gray-500' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full`}
                onClick={() => handleThemeSelection('dark')}
            >
                <Dark />
            </button>
        </div>
    );
};

export  {Theme};
