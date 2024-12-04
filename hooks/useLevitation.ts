import { useRef } from "react";
import { Animated, Easing } from "react-native";

export function useLevitation(
  initialValue: number = 0,
  levitationDistance: number = 10,
  duration: number = 1000
) {
  const translateY = useRef(new Animated.Value(initialValue)).current;
  const animation = useRef<Animated.CompositeAnimation | null>(null);

  const startLevitation = () => {
    animation.current = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -levitationDistance, // Move up
          duration, // Duration for moving up
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: initialValue, // Move back down
          duration, // Duration for moving down
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    animation.current.start();
  };

  const stopLevitation = () => {
    animation.current?.stop();
    translateY.setValue(initialValue); // Reset position
  };

  return { translateY, startLevitation, stopLevitation };
}
