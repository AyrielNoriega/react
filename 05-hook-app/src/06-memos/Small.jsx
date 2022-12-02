import { memo } from 'react';

export const Small = memo(({ counter }) => {
    console.log('re-dibujando');
    return (
        <small>{ counter }</small>
    )
})
