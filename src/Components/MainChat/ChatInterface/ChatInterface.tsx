import React from 'react';
import './chatInterface.scss';

interface chatInterface {
    children?: React.ReactNode;
}

export function ChatInterface({children}: chatInterface) {

    return <div className='chat-interface'>
                {children}
            </div>

}
