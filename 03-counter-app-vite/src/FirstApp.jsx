import PropTypes from 'prop-types'
import './style.css';

const message = {
    message:'HOla mundo',
    title: 'Ayn',
    getMessage : function () {
        return this.message
    }
}


export default function FirstApp( {title, subtitle} ) {
 
    return (
    <>
        <div>{title}</div>
        <p>{ message.getMessage() }</p>
    </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
};
