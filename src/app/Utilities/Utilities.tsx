import * as React from 'react';

export function useDocumentTitle(title: string) {
    React.useEffect(
        () => {
            const originalTitle = document.title;
            document.title = title;

            return () => {
                document.title = originalTitle;
            };
        },
        [title]
    );
}

export function accessibleRouteChangeHandler() {
    return window.setTimeout(() => {
        const mainContainer = document.getElementById('primary-app-container');
        if (mainContainer) {
            mainContainer.focus();
        }
    }, 50);
}