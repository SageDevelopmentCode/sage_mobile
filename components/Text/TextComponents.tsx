import React from "react";
import { Text, TextStyle, StyleSheet, TextProps } from "react-native";
import { styles } from "./TextComponents.styles";

interface BaseTextProps extends TextProps {
  style?: TextStyle; // Allow additional styling if needed
  children: React.ReactNode;
  color?: string; // New color prop
}

// Heading component
const Heading = ({ style, children, color, ...props }: BaseTextProps) => {
  return (
    <Text
      style={[
        styles.heading,
        color ? { color } : {}, // Apply color if provided
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// SubHeading component
const SubHeading = ({ style, children, color, ...props }: BaseTextProps) => {
  return (
    <Text
      style={[
        styles.subheading,
        color ? { color } : {}, // Apply color if provided
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

// Paragraph component
const Paragraph = ({ style, children, color, ...props }: BaseTextProps) => {
  return (
    <Text
      style={[
        styles.paragraph,
        color ? { color } : {}, // Apply color if provided
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export { Heading, SubHeading, Paragraph };
