import { Image, View } from "react-native";
import { styles } from "./Module1-1.styles";
import { useLocalSearchParams, useNavigation } from "expo-router";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import { SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { useEffect } from "react";

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <HeaderProgress
          progressText="2 / 5"
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.centeredTextWrapper}>
          <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
            {/* In Genesis, <span style={{ color: colors.GreenText }}>God</span>{" "}
            made everything from{" "}
            <span style={{ color: colors.PurplePrimary }}>nothing</span>{" "} */}
            In Genesis, God made everything from nothing
          </SubHeading>
        </View>
        <ActionButton
          style={{ marginTop: 20 }}
          type="PrimaryBlue"
          title="Let there be light"
          onPress={() => {}}
        />
        <Image
          source={require("../../../assets/Dust.png")} // Replace with your image path
          style={styles.dustImageOne}
        />
        <Image
          source={require("../../../assets/Dust.png")} // Replace with your image path
          style={styles.dustImageTwo}
        />
      </View>
    </>
  );
}
