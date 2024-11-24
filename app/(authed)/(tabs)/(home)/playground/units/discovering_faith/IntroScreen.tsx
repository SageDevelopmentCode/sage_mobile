import colors from "@/constants/colors";
import { Ionicons } from "@/utils/Icons";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./IntroScreen.styles";
import {
  ButtonText,
  Title,
  SubHeading,
} from "@/components/Text/TextComponents";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";

export default function IntroScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../discovering_faith/assets/Globe.png")} // Replace with your image path
          style={styles.backgroundImage}
        />

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
        <ActionButton
          style={{ marginTop: 20 }}
          type="PrimaryPurple"
          title="Discovering Faith"
          onPress={() => {}}
        />
        <View style={styles.centeredTextWrapper}>
          <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
            What is
          </SubHeading>
          <Title style={{ textAlign: "center" }} color={colors.PurplePrimary}>
            Genesis?
          </Title>
        </View>
      </View>
    </>
  );
}
