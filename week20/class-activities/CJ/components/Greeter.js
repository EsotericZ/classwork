export const Greeter = props => {
    console.log(props);
    // props.myFn();
    return <h1>Hello { props.name }! Hope you're having a great day!</h1>
};

export default Greeter;