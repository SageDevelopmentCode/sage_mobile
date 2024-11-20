import React from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { styles } from "./TextComponents.styles";
import {
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";

interface BaseTextProps extends TextProps {
  style?: TextStyle; // Allow additional styling if needed
  children: React.ReactNode;
  color?: string; // New color prop
}

// Heading component
const Heading = ({ style, children, color, ...props }: BaseTextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_900Black,
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text
      style={[
        styles.heading,
        color ? { color } : {},
        style,
        { fontFamily: "Nunito_900Black" },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// SubHeading component
const SubHeading = ({ style, children, color, ...props }: BaseTextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text
      style={[
        styles.subheading,
        color ? { color } : {}, // Apply color if provided
        { fontFamily: "Nunito_800ExtraBold" },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const ButtonText = ({ style, children, color, ...props }: BaseTextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text
      style={[
        styles.buttonText,
        color ? { color } : {}, // Apply color if provided
        style,
        { fontFamily: "Nunito_800ExtraBold" },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Paragraph component
const Paragraph = ({ style, children, color, ...props }: BaseTextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Raleway_700Bold,
    Raleway_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text
      style={[
        styles.paragraph,
        color ? { color } : {}, // Apply color if provided
        style,
        { fontFamily: "Raleway_700Bold" },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export { Heading, SubHeading, Paragraph, ButtonText };
