import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ username và password!');
      return;
    }
  
    Alert.alert('Thông báo', `Bạn đã đăng nhập với username: ${username}`);
  };
  

  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.jpg')} style={styles.logo} resizeMode="contain" />

        <TouchableOpacity style={styles.registerBtn} onPress={() => Alert.alert('Thông báo', 'Đi tới trang đăng ký')}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="USERNAME"
          placeholderTextColor="#fff"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#d1b00000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 200,
  },
  logo: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  registerBtn: {
    position: 'absolute',
    right: 20,
    top: 350,
  },
  registerText: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#8c6d00',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: '#a04f4f',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
