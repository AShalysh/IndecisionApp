class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //1.set up default state object
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10); //parseInt converts string to number
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch(e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count); // 'count' is a key, second argument is value. Value will be converted to string
        }   
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1> 
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
};

// Counter.defaultProps = {
//     count: 0
// };

//count was passed =5 so it takes it value
//ReactDOM.render(<Counter count={5}/>, document.getElementById('app'));
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
//     // console.log('addOne', count);
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     // console.log('minusOne');
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     // console.log('reset');
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();
