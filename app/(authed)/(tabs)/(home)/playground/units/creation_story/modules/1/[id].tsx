import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./Module1.styles";
import { Ionicons } from "@/utils/Icons";
import colors from "@/constants/colors";
import { ButtonText } from "@/components/Text/TextComponents";

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/Globe.png")} // Replace with your image path
          style={styles.globeImage}
        />
      </View>
      <View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" color={colors.WhiteText} size={40} />
          </TouchableOpacity>
          <View style={styles.progressWrapper}>
            <View style={styles.progressCount}>
              <ButtonText color={colors.WhiteText}>1 / 3</ButtonText>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
