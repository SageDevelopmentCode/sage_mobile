import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useNavigation, useRouter } from "expo-router"; // Import useRouter from expo-router
import { TouchableOpacity } from "react-native";
import { styles } from "./Playground.styles";
import { View, Text, Button, ScrollView, Dimensions } from "react-native";

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
          <Button title="Go Back" onPress={() => navigation.goBack()} />
          <Button title="Button 2" onPress={() => alert("Button 2 Pressed")} />
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
