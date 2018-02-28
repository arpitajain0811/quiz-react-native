import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import styles from './HeaderCss';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.logo}>Quizzy</Text>
    {props.username ? <Text style={styles.hello}>Hello {props.username}</Text> : null}

  </View>
);

export default Header;
Header.propTypes = {
  username: PropTypes.string.isRequired,
};
