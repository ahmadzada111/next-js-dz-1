import React from 'react';

const Contacts = () => {
    
    const containerStyle: React.CSSProperties = {
        textAlign: 'center',
        marginTop: '50px',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: '24px',
        color: '#fff', 
        marginBottom: '20px',
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#fff', 
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Contacts</h2>
            <p style={paragraphStyle}>
                This is the Contacts screen of our application.
            </p>
        </div>
    );
};

export default Contacts;
