import React from 'react';
//import AlertContext from '../../context/alert/alertContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  //const alertContext = useContext(AlertContext);
  //const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert-${alert.msgType}`}>
        <i className='fas fa-info-circle'> {alert.msg}</i>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps, {})(Alert);
