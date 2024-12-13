import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "./CharacterSelect.styles";
import { Paragraph, SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";

export default function CharacterSelectScreen() {
  const { id } = useLocalSearchParams();
  const [isBack, setIsBack] = useState(false); // State to track if it's showing the back of the card

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleCardPress = () => {
    setIsBack(!isBack); // Toggle between front and back
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/SunAndMountains.png")}
            style={styles.sunAndMountains}
          />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.circlePlatform}>
            <Image
              source={require("../../assets/CharacterImage.png")}
              style={styles.characterImage}
            />
          </View>

          {/* Character Card */}
          <TouchableOpacity
            style={styles.characterCardContainer}
            onPress={handleCardPress}
          >
            {isBack ? (
              // Back side of the card (Moves)
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.moveButton} onPress={() => {}}>
                  <Paragraph color={colors.BlackText}>Move 1</Paragraph>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moveButton} onPress={() => {}}>
                  <Paragraph color={colors.BlackText}>Move 1</Paragraph>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moveButton} onPress={() => {}}>
                  <Paragraph color={colors.BlackText}>Move 1</Paragraph>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moveButton} onPress={() => {}}>
                  <Paragraph color={colors.BlackText}>Move 1</Paragraph>
                </TouchableOpacity>
                <Paragraph
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    color: colors.WhiteText,
                  }}
                >
                  Tap to View Stats
                </Paragraph>
              </View>
            ) : (
              // Front side of the card (Attack, Defense, Level)
              <View>
                <SubHeading
                  color={colors.WhiteText}
                  style={{ textAlign: "center" }}
                >
                  Moses
                </SubHeading>
                <View style={styles.attackAndDefense}>
                  <View style={{ width: "47%" }}>
                    <Paragraph
                      style={{ marginBottom: 5 }}
                      color={colors.WhiteText}
                    >
                      Attack
                    </Paragraph>
                    <View
                      style={[
                        styles.statContainer,
                        { backgroundColor: colors.AttackBacking },
                      ]}
                    >
                      <Image
                        source={require("../../assets/Sword.png")}
                        style={styles.weaponIcon}
                      />
                      <SubHeading color={colors.WhiteText}>450</SubHeading>
                    </View>
                  </View>
                  <View style={{ width: "47%" }}>
                    <Paragraph
                      style={{ marginBottom: 5 }}
                      color={colors.WhiteText}
                    >
                      Defense
                    </Paragraph>
                    <View
                      style={[
                        styles.statContainer,
                        { backgroundColor: colors.DefenseBacking },
                      ]}
                    >
                      <Image
                        source={require("../../assets/Shield.png")}
                        style={styles.weaponIcon}
                      />
                      <SubHeading color={colors.WhiteText}>390</SubHeading>
                    </View>
                  </View>
                </View>
                <View style={{ justifyContent: "flex-start", marginTop: 20 }}>
                  <Paragraph
                    style={{ marginBottom: 5 }}
                    color={colors.WhiteText}
                  >
                    Level
                  </Paragraph>
                  <ProgressBar
                    height={15}
                    progress={40}
                    backgroundColor={colors.DarkGreenBacking}
                    progressColor={colors.SkyBluePrimary}
                  />
                </View>
                <Paragraph
                  style={{
                    textAlign: "center",
                    marginTop: 20,
                    color: colors.WhiteText,
                  }}
                >
                  Tap to View Moves
                </Paragraph>
              </View>
            )}
          </TouchableOpacity>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <ActionButton
              type="PrimaryPurple"
              title="Choose Different Character"
              onPress={() => {}}
            />
            <ActionButton
              style={{ marginTop: 20 }}
              type="PrimaryBlue"
              title="Select"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </>
  );
}
