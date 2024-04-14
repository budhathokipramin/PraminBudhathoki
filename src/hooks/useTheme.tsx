import  { useEffect, useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage<string>('theme', 'system');
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = useCallback((selectedTheme: 'light' | 'dark') => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(selectedTheme);
        setTheme(selectedTheme);
    }, [setTheme]);

    useEffect(() => {
        if (theme) {
            if (theme === 'dark' || (theme === 'system' && systemSettingDark.matches)) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        }
    }, [theme, systemSettingDark.matches, applyTheme]);

    const handleThemeSelection = (selectedTheme: 'light' | 'dark' | 'system') => {
        applyTheme(selectedTheme);
    };

    return {
        theme,
        handleThemeSelection,
    };
};

export { useTheme};

