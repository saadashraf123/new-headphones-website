import './App.css';
import Layout from './Component/Layout';
import Navbar from './Component/Navbar';
import StateContext from './Component/StateContext';


function App() {
    return (
        <div className=''>
            <StateContext>
                <Navbar />
                <Layout />
            </StateContext>
        </div>
    );
}

export default App;
