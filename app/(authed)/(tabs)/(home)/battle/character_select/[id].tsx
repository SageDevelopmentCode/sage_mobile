import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from "./CharacterSelect.styles";
import { Paragraph, SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

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
          <Image
            source={require("../../assets/CharacterImage.png")} // Replace with your image path
            style={styles.characterImage}
          />
          <View style={styles.characterCardContainer}>
            <SubHeading color={colors.WhiteText}>Moses</SubHeading>
            <View style={styles.attackAndDefense}>
              <View>
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
                  <Paragraph color={colors.WhiteText}>450</Paragraph>
                </View>
              </View>
              <View>
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
                  <Paragraph color={colors.WhiteText}>390</Paragraph>
                </View>
              </View>
            </View>
            <View>
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
            <Paragraph>Tap to View Moves</Paragraph>
          </View>
        </View>
      </View>
    </>
  );
}
