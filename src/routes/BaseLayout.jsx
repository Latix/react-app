import { Outlet } from "react-router-dom";
const BaseLayout = () => {
    return (
        <div>
            NavBar Main
            <Outlet />
        </div>
    );
}

export default BaseLayout;