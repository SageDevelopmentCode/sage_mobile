import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from "./CharacterSelect.styles";
import { Paragraph, SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";

export default function CharacterSelectScreen() {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/SunAndMountains.png")} // Replace with your image path
            style={styles.sunAndMountains}
          />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.circlePlatform}>
            <Image
              source={require("../../assets/CharacterImage.png")} // Replace with your image path
              style={styles.characterImage}
            />
          </View>

          <View style={styles.characterCardContainer}>
            <SubHeading
              color={colors.WhiteText}
              style={{ textAlign: "center" }}
            >
              Moses
            </SubHeading>
            <View style={styles.attackAndDefense}>
              <View style={{ width: "47%" }}>
                <Paragraph style={{ marginBottom: 5 }} color={colors.WhiteText}>
                  Attack
                </Paragraph>
                <View
                  style={[
                    styles.statContainer,
                    { backgroundColor: colors.AttackBacking },
                  ]}
                >
                  <Image
                    source={require("../../assets/Sword.png")} // Replace with your image path
                    style={styles.weaponIcon}
                  />
                  <SubHeading color={colors.WhiteText}>450</SubHeading>
                </View>
              </View>
              <View style={{ width: "47%" }}>
                <Paragraph style={{ marginBottom: 5 }} color={colors.WhiteText}>
                  Defense
                </Paragraph>
                <View
                  style={[
                    styles.statContainer,
                    { backgroundColor: colors.DefenseBacking },
                  ]}
                >
                  <Image
                    source={require("../../assets/Shield.png")} // Replace with your image path
                    style={styles.weaponIcon}
                  />
                  <SubHeading color={colors.WhiteText}>390</SubHeading>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "flex-start", marginTop: 20 }}>
              <Paragraph style={{ marginBottom: 5 }} color={colors.WhiteText}>
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
