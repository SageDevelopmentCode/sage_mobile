import colors from "@/constants/colors";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./IntroScreen.styles";
import { Title, SubHeading } from "@/components/Text/TextComponents";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";

export default function IntroScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../creation_story/assets/Globe.png")} // Replace with your image path
          style={styles.globeImage}
        />
        <HeaderProgress
          progressText="1 / 5"
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.centeredTextWrapper}>
          <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
            What is
          </SubHeading>
          <Title style={{ textAlign: "center" }} color={colors.PurplePrimary}>
            Genesis?
          </Title>
        </View>
        <ActionButton
          type="PrimaryPurple"
          title="Start"
          onPress={() =>
            router.push({
              pathname:
                "/(authed)/(home)/playground/units/creation_story/modules/1/[id]",
              params: { id: "521g13245" },
            })
          }
        />
      </View>
    </>
  );
}
