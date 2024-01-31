import { Outlet } from 'react-router-dom';
import AltNavbar from '../components/AltNavbar';

const AltLayout = () => {
    return (
        <>
            <AltNavbar />
            <Outlet />
        </>
    );
};

export default AltLayout;