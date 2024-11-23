import { useState, useRef } from "react";
import { Animated } from "react-native";

interface UseSlideAnimationProps {
  initialPosition?: number;
  duration?: number;
}

interface UseSlideAnimationReturn {
  slideAnim: Animated.Value;
  isVisible: boolean;
  toggleVisibility: () => void;
}

const useSlideAnimation = ({
  initialPosition = 800,
  duration = 300,
}: UseSlideAnimationProps = {}): UseSlideAnimationReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(initialPosition)).current;

  const toggleVisibility = () => {
    if (isVisible) {
      // Close animation
      Animated.timing(slideAnim, {
        toValue: initialPosition, // Move off-screen
        duration,
        useNativeDriver: true,
      }).start(() => setIsVisible(false)); // Set visibility to false after animation
    } else {
      setIsVisible(true); // Set visibility to true before animation
      Animated.timing(slideAnim, {
        toValue: 0, // Bring into view
        duration,
        useNativeDriver: true,
      }).start();
    }
  };

  return { slideAnim, isVisible, toggleVisibility };
};

export default useSlideAnimation;
