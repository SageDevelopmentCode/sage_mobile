import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from "./CharacterSelect.styles";
import { Paragraph, SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";

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
                ></View>
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
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
