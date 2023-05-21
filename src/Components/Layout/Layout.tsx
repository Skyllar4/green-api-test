import React from 'react';

interface layout {
    children?: React.ReactNode;
}

export function Layout({children}: layout) {

    return <>
            {children}
           </>

}
