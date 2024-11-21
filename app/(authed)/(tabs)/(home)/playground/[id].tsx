import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useNavigation, useRouter } from "expo-router"; // Import useRouter from expo-router
import { TouchableOpacity } from "react-native";
import { styles } from "./Playground.styles";
import { View, Text, Button, ScrollView, Dimensions } from "react-native";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import NavButton from "@/components/Buttons/NavButton/NavButton";
import AntIcons from "react-native-vector-icons/AntDesign";
import colors from "@/constants/colors";

export default function PlaygroundScreen() {
  const navigation = useNavigation();

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
          <NavButton
            IconLibrary={AntIcons}
            iconName="close"
            iconSize={40}
            iconColor={colors.PrimaryRed}
            onPress={() => navigation.goBack()}
          />
          <ActionButton
            type="PrimaryPurple"
            title="Discovering Faith"
            onPress={() => {}}
          />
        </View>

        {/* Scrollable Section */}
        <ScrollView style={styles.scrollSection}>
          <View style={styles.module}>
            <Text style={styles.moduleTitle}>Module 1</Text>
            <Text style={styles.moduleContent}>Description of Module 1...</Text>
          </View>
          <View style={styles.module}>
            <Text style={styles.moduleTitle}>Module 2</Text>
            <Text style={styles.moduleContent}>Description of Module 2...</Text>
          </View>
          <View style={styles.module}>
            <Text style={styles.moduleTitle}>Module 3</Text>
            <Text style={styles.moduleContent}>Description of Module 3...</Text>
          </View>
          {/* Add more modules as needed */}
        </ScrollView>
      </View>
    </>
  );
}
