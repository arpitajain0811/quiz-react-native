import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './LoginCss';

const Login = props => (
  <View style={styles.login}>
    <View style={styles.loginBox}>
      <View style={styles.welcomeQuizzy}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>to</Text>
        <Text style={styles.quizzy}>Quizzy!</Text>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginHeading}>Login</Text>
        <Text style={styles.Input}>Username
          <TextInput
            style={styles.userInput}
            onChange={(text) => { props.onTextChange(text); }}
            value={props.username}
          />
        </Text>
        <View >
          <Button
            style={styles.loginBtn}
            onPress={() => props.saveUsername()}
            title="Login"
          >
          </Button>
        </View>
      </View>
    </View>
  </View>
);

export default Login;
Login.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  saveUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
