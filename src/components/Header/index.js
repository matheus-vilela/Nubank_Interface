import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/Nubank_Logo.png';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.containerheader}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.textheader}>Matheus</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={26} color="#FFF" />
    </View>
  );
}
