import React from 'react';
import { IHighlighted } from '../../models/Components';

export const Highlighted: React.FC<IHighlighted> = ({ text = '', highlight = '' }) => {
    const escapeRegExp = (string: String) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    if (!highlight.trim()) {
        return <>{text}</>
    }

    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex);
    return (
        <>
            {parts.filter(part => part).map((part, i) => (
                regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
            ))}
        </>
    )
}