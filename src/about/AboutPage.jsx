import '../App.css';
import '../transitions.css';
import Logo from '../components/Logo';

const HomePage = () => {
    return (
        <div>
            <Logo size={48} className="float" />
            <h1>Lithium Labs</h1>

            <p style={{ marginTop: '20px' }}>
                Lithium Labs is a personal company-like thing of mine where I make apps and
                websites for fun.<br/><br/>
                
                🇹🇷
            </p>
        </div>
    );
};

export default HomePage;
