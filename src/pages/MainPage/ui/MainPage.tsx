import {memo} from 'react';

interface MainPageProps {
    className?: string;
}

export default memo(({className}: MainPageProps) => {
    return (
        <div>
            "mainPahe"
        </div>
    );
});