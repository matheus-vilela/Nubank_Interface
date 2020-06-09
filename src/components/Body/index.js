import React from 'react';
import {
  Animated, Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';


import styles from './styles';

export default function Body({ translateY }) {
  return (
    <Animated.View
      style={[
        styles.containerbody, {
          opacity: translateY.interpolate({
            inputRange: [0, 250],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        }]}
    >
      <View style={{ marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}>
        <QRCode
          value="https://www.google.com/"
          backgroundColor="#8b10ae"
          color="#fff"
        />
      </View>
      <View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.touchbody}>
            <MaterialIcons name="help-outline" size={20} color="#FFF" />
            <Text style={styles.textitem}>Me ajuda</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.touchbody}>
            <MaterialIcons name="person-outline" size={20} color="#FFF" />
            <Text style={styles.textitem}>Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.touchbody}>
            <MaterialIcons name="credit-card" size={20} color="#FFF" />
            <Text style={styles.textitem}>Configurar cartão</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.item, { borderBottomWidth: 0.3, borderBottomColor: '#fff' }]}>
          <TouchableOpacity style={styles.touchbody}>
            <MaterialIcons name="smartphone" size={20} color="#FFF" />
            <Text style={styles.textitem}>Configurações do app</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.textitem}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
