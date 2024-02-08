import { Outlet } from 'react-router-dom';
import AltNavbar from '../components/AltNavbar';
import Copyright from '../components/Copyright';

const AltLayout = () => {
    return (
        <>
            <AltNavbar />
            <Outlet />
            <Copyright />
        </>
    );
};

export default AltLayout;