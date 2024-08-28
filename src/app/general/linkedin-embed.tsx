import React, { useEffect } from 'react';

const InPostEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/in.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="linkedin-embed">
            <blockquote className="linkedin-post" data-lang="en">
                {/* <a href="https://www.linkedin.com/embed/feed/update/urn:li:share:7228299909630730240/">
                    <iframe
                        src="https://www.instagram.com/p/C-dJEbRh2fd/embed/"
                        width={300}
                        height={400}
                        className="rounded-md"
                        frameBorder="0"
                        scrolling="no"
                        allow="encrypted-media"
                    /> Using instagram post for the moment
                    
                </a> */}
                     <iframe className='rounded-lg overflow-hidden scrollbar-hide' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7228299909630730240/" height="400" width="300" frameBorder="0" title="Embedded post"></iframe>
            </blockquote>
            {/* The iframe below is not working even though it is directly copied from official linkedIn site*/}
       
        </div>
    );
};

export default InPostEmbed;
