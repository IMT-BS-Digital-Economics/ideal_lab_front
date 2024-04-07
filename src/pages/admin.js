import NavBar from '../components/layout/navBar';

import AdminHandler from '../components/admin/index';
import Footer from '../components/layout/footer';

const Admin = () => {
    return (
        <div>
            <NavBar />
            <AdminHandler />
            <Footer />
        </div>
    );
};

export default Admin;
