import React from 'react';
import {
  Animated, Text, View, ScrollView, TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import styles from './styles';

export default function Tabs({ translateY }) {
  return (

    <Animated.View
      style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="person-add" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Indicar amigos </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="chat-bubble-outline" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Cobrar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="arrow-downward" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Depositar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="arrow-upward" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Transferir </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardtab}>
            <MaterialIcons name="lock" size={26} color="#FFF" />
            <Text style={styles.textcardtab}>Bloquear cartão </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Animated.View>

  );
}
