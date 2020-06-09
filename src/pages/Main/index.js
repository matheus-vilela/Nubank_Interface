import React from 'react';
import {
  SafeAreaView,
  Animated,
  StatusBar,
  View,
} from 'react-native';
import { State } from 'react-native-gesture-handler';

import styles from './styles';

import Header from '../../components/Header';
import Body from '../../components/Body';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY >= 1) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Body translateY={translateY} />
          <Card
            animatedEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
            translateY={translateY}
          />
        </View>
        <Tabs translateY={translateY} />
      </View>
    </SafeAreaView>
  );
}
