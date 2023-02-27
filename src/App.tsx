import Form from "./components/Form";
import List from "./components/List";
import './style.scss';

function App() {
    return (
        <div className="row gx-0">
            <div className="col-8 offset-2 margem p-5">
                <div className="card p-2">
                    <Form margemBotao={{marginTop: '10px', marginBottom: '10px'}}/>
                    <List style={{marginLeft: '20px', backgroundColor: 'white'}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
