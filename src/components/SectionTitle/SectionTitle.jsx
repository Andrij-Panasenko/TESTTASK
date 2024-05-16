import React from 'react';

export const SectionTitle = ({ title, tag, className }) => {
    const TagName = tag || 'h2';

    return (
        <>
            <TagName className={className}>{title}</TagName>
        </>
    );
};
