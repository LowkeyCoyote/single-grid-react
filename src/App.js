import React from "react";
import { useMediaQuery } from 'react-responsive';
import Desktop from './components/Card/desktop/desktop.card';
import Mobile from "./components/Card/mobile/mobile.card";



function App() {

    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 480px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 481px)",
    });

        return (
            <>
                <main>
                    {isDesktop && <Desktop /> }
                    {isMobileDevice && <Mobile />}
                </main>
            </>
        )
}

export default App