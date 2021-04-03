import React from 'react';
import PropTypes from 'prop-types';
import LabelIns from '../LabelIns';
import './InputIns.css';


const INLINE_STYLES = {
    containerInput: {
        marginBottom: '1.5rem' 
    },
    borderError: { 
        borderBottom: 'solid 2px #B11107' 
    },
    messageError: {
        color: '#B11107'
    } 
}


/** InputIns field component */
const InputIns = ({
    htmlId,
    name,
    label,
    type,
    required,
    onChange,
    placeholder,
    value,
    error,
    children,
    ...props
  }) => {
    return (
        <div className="ins-form__group" style={INLINE_STYLES.containerInput }>
         <LabelIns htmlFor={htmlId} label={label} required={required} visible={false}/>
        <input
          className="ins-form__input"
          id={htmlId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={error ? INLINE_STYLES.borderError : {}}
          {...props}
        />
        {children}
        {error && (
          <div className="ins-form__error" style={INLINE_STYLES.messageError}>
            {error}
          </div>
        )}
      </div>
        
    );
};

InputIns.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,
  
    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,
  
    /** Input label */
    label: PropTypes.string.isRequired,
  
    /** Input type */
    type: PropTypes.oneOf(['text', 'number', 'password']),
  
    /** Mark label with asterisk if set to true */
    required: PropTypes.bool,
  
    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,
  
    /** Placeholder to display when empty */
    placeholder: PropTypes.string,
  
    /** Value */
    value: PropTypes.any,
  
    /** String to display when error occurs */
    error: PropTypes.string,
  
    /** Child component to display next to the input */
    children: PropTypes.node,
  };
  
  InputIns.defaultProps = {
    htmlId: '1shdy4',
    type: 'text',
    name: '',
    label: 'Title',
    placeholder: 'Title',
    required: true,
    onChange: () => {},
  };
  

export default InputIns;