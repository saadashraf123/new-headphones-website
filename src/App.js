import './App.css';
import Layout from './Component/Layout';
import Navbar from './Component/Navbar';
import StateContext from './Component/StateContext';
import list from './db.json';



function App() {

    console.log();
    const arr = list.banner;

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
