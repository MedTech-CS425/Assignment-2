import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthService from "../../services/AuthService";

function Auth(props) {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [errorMessage, setErrorMessage] = useState("")

  const login = () => {
    AuthService.login(email, password).then(res => {
      AuthService.user = res.data.user
      AuthService.token = res.data.token
      props.setIsLoggedIn(true);
    }).catch(err => {
      console.log(err)
      setErrorMessage(err.response.data.message);
    })
  }


  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#fff0de",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginText: {
    color: 'white'
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f9a109",
  },
});

export default Auth;
