import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useNavigation, useRouter } from "expo-router"; // Import useRouter from expo-router
import { styles } from "./Playground.styles";
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { FontAwesome5, FontAwesome6, Ionicons } from "@/utils/Icons";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "@/constants/colors";
import { SecondaryButtonAction } from "@/components/Buttons/SecondaryButtons/SecondaryButton";
import { Heading, Paragraph } from "@/components/Text/TextComponents";

export default function PlaygroundScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false); // State for submenu visibility
  const [menuTitle, setMenuTitle] = useState("");
  const [menuRewards, setMenuRewards] = useState([]);
  const [menuStatus, setMenuStatus] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const { id } = useLocalSearchParams();

  console.log("id: ", id);
  return (
    <>
      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <SecondaryButtonAction
              IconLibrary={Ionicons}
              iconName="close"
              iconSize={25}
              iconColor={colors.PrimaryRed}
              onPress={() => navigation.goBack()}
            />
          </View>

          <ActionButton
            style={{ marginTop: 10 }}
            type="PrimaryPurple"
            title="Discovering Faith"
            onPress={() => {}}
          />
        </View>
        {/* For Snakelike Pattern */}
        {/* you can create an array ["25%", "50%", "25%", 0, "-25%"] and then the index when you map can be each one in the array */}
        {/* Scrollable Section */}
        <ScrollView style={styles.scrollSection}>
          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <View style={styles.activeModule}>
              <FontAwesome5 name="play" size={30} color={colors.WhiteText} />
            </View>
          </TouchableOpacity>

          {/* Inactive Module */}
          <TouchableOpacity
            style={{ marginTop: 30, marginRight: "25%" }}
            onPress={() => {}}
          >
            <View style={styles.inactiveModule}>
              <FontAwesome5 name="lock" size={25} color={colors.GrayBacking} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30, marginRight: "50%" }}
            onPress={() => {}}
          >
            <View style={styles.inactiveModule}>
              <FontAwesome5 name="lock" size={25} color={colors.GrayBacking} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30, marginRight: "25%" }}
            onPress={() => {}}
          >
            <View style={styles.inactiveModule}>
              <FontAwesome5 name="lock" size={25} color={colors.GrayBacking} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30, marginRight: 0 }}
            onPress={() => {}}
          >
            <View style={styles.inactiveModule}>
              <FontAwesome5 name="lock" size={25} color={colors.GrayBacking} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 30, marginRight: "-25%" }}
            onPress={() => {}}
          >
            <View style={styles.inactiveModule}>
              <FontAwesome5 name="lock" size={25} color={colors.GrayBacking} />
            </View>
          </TouchableOpacity>
        </ScrollView>

        {menuVisible && (
          <View style={styles.menu}>
            <TouchableOpacity
              // style={styles.outsideCloseButton}
              onPress={() => setMenuVisible(false)}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Heading>Noah's Ark Adventure</Heading>
                <Entypo
                  name="chevron-down"
                  size={45}
                  color={colors.GrayBacking}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Paragraph color={colors.BlueText}>Rewards</Paragraph>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  marginTop: 20,
                  borderRadius: 30,
                  backgroundColor: colors.BlueTint,
                }}
              >
                <FontAwesome5
                  name="gift"
                  size={30}
                  color={colors.BluePrimary}
                />
              </View>
            </TouchableOpacity>
            <ActionButton
              style={{ marginTop: 30 }}
              type="BrightGreen"
              title="Start"
              onPress={() => {}}
            />
          </View>
        )}
      </View>
    </>
  );
}
