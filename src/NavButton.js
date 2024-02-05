import React from 'react';

function NavButton({ text, setActiveSection, activeSection }) {
    const handleClick = () => {
        const formattedText = text.toLowerCase().replace(' ', '');
        setActiveSection(formattedText);
    }

    return (
        <button data-text={text.toLowerCase().replace(' ', '')} onClick={handleClick}>
            {text}
        </button>
    );
}

export default NavButton;