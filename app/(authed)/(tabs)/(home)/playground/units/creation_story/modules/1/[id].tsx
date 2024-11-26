import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./Module1.styles";
import { Ionicons } from "@/utils/Icons";
import colors from "@/constants/colors";
import { ButtonText } from "@/components/Text/TextComponents";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";

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
        <HeaderProgress
          progressText="2 / 5"
          onBackPress={() => navigation.goBack()}
        />
        <ActionButton type="PrimaryBlue" title="Next" onPress={() => {}} />
      </View>
    </>
  );
}
