import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

interface AnimatedFabComponentProps {
  visible: boolean;
  style?: ViewStyle;
  animateFrom?: 'right' | 'left';
  onPress: () => void;
}

export default function AnimatedFabComponent({
  visible,
  style,
  animateFrom = 'right',
  onPress,
}: AnimatedFabComponentProps) {
  const [isExtended, setIsExtended] = useState(true);

  const onScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition = Math.floor(nativeEvent.contentOffset.y) ?? 0;
    setIsExtended(currentScrollPosition <= 0);
  };

  const fabStyle = { [animateFrom]: 16 } as ViewStyle;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
      </ScrollView>
      <AnimatedFAB
        icon="plus"
        label={'add'}
        extended={isExtended}
        onPress={onPress}
        visible={visible}
        animateFrom={animateFrom}
        iconMode="static"
        style={[styles.fabStyle, style, fabStyle]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabStyle: {
    bottom: 16,
    position: 'absolute',
  },
});