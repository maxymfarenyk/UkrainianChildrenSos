import React from 'react';
import ThankYou from "../sections/ThankYou/Hero/ThankYou.jsx";
import HelpBanner from "../components/HelpBanner/HelpBanner.jsx";
import ThankYouResponse from "../sections/ThankYou/Response/ThankYouResponse.jsx";

const ThankYouPage = () => {
    return (
        <main>
            <ThankYou/>
            <ThankYouResponse/>
            <HelpBanner/>
        </main>
    );
};

export default ThankYouPage;
