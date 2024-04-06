import NavBar from "../components/layout/navBar";
import UserLogin from "../components/userLogin";
import AnimatedParticles from "../components/landing/animatedParticles";

const LoginPage = () => {
    return (
        <div>
            <div>
                <AnimatedParticles/>
            </div>
            <NavBar/>
            <UserLogin/>
        </div>
    );
}

export default LoginPage;