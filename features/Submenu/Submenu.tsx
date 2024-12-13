import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import { Heading, Paragraph } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { styles } from "./Submenu.styles";

interface SubmenuProps {
  progress: number;
  slideAnim: Animated.Value;
}

const Submenu = ({ progress, slideAnim }: SubmenuProps) => {
  const router = useRouter();

  return (
    <Animated.View
      style={[
        styles.menu,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <ScrollView contentContainerStyle={styles.menuContent}>
        <TouchableOpacity
          style={styles.subMenuItem}
          onPress={() =>
            router.push({
              pathname: "/(home)/playground/[id]",
              params: { id: "12135" },
            })
          }
        >
          <Heading color={colors.WhiteText} style={{ marginBottom: 10 }}>
            Playground
          </Heading>
          <View style={{ width: "100%", alignItems: "flex-start" }}>
            <Paragraph
              color={colors.WhiteText}
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Discovering Faith
            </Paragraph>
            <ProgressBar progress={progress} height={40} />
          </View>
          <ActionButton
            style={{ marginTop: 25 }}
            title="Continue"
            type="BrightGreen"
            onPress={() =>
              router.push({
                pathname: "/(home)/playground/[id]",
                params: { id: "12135" },
              })
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.subMenuItem,
            {
              backgroundColor: colors.RegularBrown,
              shadowColor: colors.RegularBrownBacking,
            },
          ]}
          onPress={() => {}}
        >
          <Heading color={colors.WhiteText} style={{ marginBottom: 10 }}>
            Explorer's Realm
          </Heading>
          <Paragraph color={colors.WhiteText} style={{ textAlign: "center" }}>
            Explore new Characters and Pets
          </Paragraph>
          <ActionButton
            style={{ marginTop: 25 }}
            title="Enter"
            type="LightBrown"
            onPress={() => console.log("Primary Pressed")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.subMenuItem,
            {
              backgroundColor: colors.PurplePrimary,
              shadowColor: colors.PurpleBacking,
            },
          ]}
          onPress={() =>
            router.push({
              pathname: "/(home)/playground/[id]",
              params: { id: "12135" },
            })
          }
        >
          <Heading color={colors.WhiteText} style={{ marginBottom: 10 }}>
            Spirit Log
          </Heading>
          <Paragraph color={colors.WhiteText} style={{ textAlign: "center" }}>
            Pray with God.
          </Paragraph>
          <ActionButton
            style={{ marginTop: 25 }}
            title="Write"
            type="LightBrown"
            onPress={() => console.log("Primary Pressed")}
          />
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
};

export default Submenu;
