import React, { useEffect } from 'react';

const TweetEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <blockquote className="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">
                    We are back again, 4th to 6th October, 2024.
                    <br />
                    Register for the biggest hackathon in the world:{" "}
                    <a href="https://t.co/EwUINlnsqr">https://t.co/EwUINlnsqr</a>
                    <br />
                    Keep an eye on this space to learn more about HackAthone&#39;24!
                    <a href="https://twitter.com/hashtag/NASA?src=hash&amp;ref_src=twsrc%5Etfw">#NASA</a>{" "}
                    <a href="https://twitter.com/hashtag/NASASpaceApps?src=hash&amp;ref_src=twsrc%5Etfw">#NASASpaceApps</a>{" "}
                    <a href="https://twitter.com/hashtag/NASASpaceAppsChallenge?src=hash&amp;ref_src=twsrc%5Etfw">#NASASpaceAppsChallenge</a>{" "}
                    <a href="https://twitter.com/hashtag/NASASpaceApps2024?src=hash&amp;ref_src=twsrc%5Etfw">#NASASpaceApps2024</a>{" "}
                    <a href="https://twitter.com/hashtag/NASASpaceAppsChallenge24?src=hash&amp;ref_src=twsrc%5Etfw">#NASASpaceAppsChallenge24</a>
                </p>
                &mdash; SpaceApps Athlone (@hack_athlone){" "}
                <a href="https://twitter.com/hack_athlone/status/1823394223351050614?ref_src=twsrc%5Etfw">
                    August 13, 2024
                </a>
            </blockquote>
        </>
    );
};

export default TweetEmbed;
