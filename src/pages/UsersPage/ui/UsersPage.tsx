import {memo} from 'react';

interface UsersPageProps {
    className?: string;
}

export default memo(({className}: UsersPageProps) => {
    return (
        <div>
            "users"
        </div>
    );
});