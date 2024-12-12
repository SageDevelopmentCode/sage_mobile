import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from "./CharacterSelect.styles";

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
        </View>
      </View>
    </>
  );
}
