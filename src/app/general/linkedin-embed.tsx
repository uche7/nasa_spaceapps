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
                <a href="https://www.linkedin.com/feed/update/urn:li:share:7228299909630730240/">
                    LinkedIn Post
                </a>
            </blockquote>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7228299909630730240" height="941" width="504" frameBorder="0" allowFullScreen={false} title="Embedded post"></iframe>
        </div>
    );
};

export default InPostEmbed;
