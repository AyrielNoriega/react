import './style.css';

const message = {
    message:'HOla mundo',
    title: 'Ayn',
    getMessage : function () {
        return this.message
    }
}

export default function FirstApp() {
    return (
    <>
        <div>FirstApp</div>
        <p>{ message.getMessage() }</p>
    </>
    )
}
