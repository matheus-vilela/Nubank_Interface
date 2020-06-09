import React from 'react';
import {
  View, Text, Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { PanGestureHandler } from 'react-native-gesture-handler';

import styles from './styles';

export default function Card({ translateY, animatedEvent, onHandlerStateChange }) {
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.card, {
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [-350, 0, 380],
            outputRange: [-50, 0, 380],
            extrapolate: 'clamp',
          }),
        }],
      }]}
      >
        <View style={styles.cardheader}>
          <MaterialIcons name="attach-money" size={28} color="#666" />
          <MaterialIcons name="visibility-off" size={28} color="#666" />
        </View>
        <View style={styles.cardbody}>
          <Text style={styles.textbody}>Saldo disponível</Text>
          <Text style={styles.textnumber}>R$ 1.000,00</Text>
        </View>
        <View style={styles.cardfooter}>
          <Text style={styles.textfooter}>
            Transferência de R$ 1.000,00 recebida de xxxxxxxxx hoje às 00:00h
          </Text>
        </View>

      </Animated.View>
    </PanGestureHandler>
  );
}
