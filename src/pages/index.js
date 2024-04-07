import NavBar from '../components/layout/navBar';
import Landing from '../components/landing';
import Footer from '../components/layout/footer';

export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
                <Landing />
                <Footer />
            </div>
        </div>
    );
}
