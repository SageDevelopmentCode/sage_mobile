import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Module1-2.styles";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import { Paragraph, SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { useEffect, useRef, useState } from "react";

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const { width } = Dimensions.get("window");
  const ITEM_WIDTH = width * 0.2; // Adjust item width

  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const correctAnswer: number = 6;

  const renderNumberSelector = () => {
    const numbers = Array.from({ length: 7 }, (_, i) => i + 1); // Numbers 1 to 7

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        snapToInterval={ITEM_WIDTH} // Ensures snapping to each item
        decelerationRate="fast"
        style={{ paddingHorizontal: width * 0.1, paddingVertical: 20 }}
      >
        {numbers.map((number) => (
          <TouchableOpacity
            key={number}
            onPress={() => setSelectedNumber(number)}
            style={[
              styles.numberContainer,
              number === selectedNumber && styles.selectedNumberContainer,
              {
                width: ITEM_WIDTH,
              },
            ]}
          >
            <Text
              style={[
                styles.numberText,
                number === selectedNumber && styles.selectedNumberText,
              ]}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderFeedback = () => {
    if (selectedNumber === null) return null;
    return (
      <View style={styles.dialogBox}>
        <Paragraph
          color={
            selectedNumber === correctAnswer
              ? colors.GreenPrimary
              : colors.PrimaryRed
          }
        >
          {selectedNumber === correctAnswer
            ? "Correct! God took 7 days to create the world."
            : "Try again!"}
        </Paragraph>
      </View>
    );
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <HeaderProgress
        progressText="4 / 5"
        onBackPress={() =>
          router.push({
            pathname:
              "/(authed)/(home)/playground/units/creation_story/modules/1/1.1/[id]",
            params: { id: "521g13245" },
          })
        }
        backgroundColor={colors.DarkSkyBlueBacking}
      />
      <View style={styles.centeredTextWrapper}>
        <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
          It took <Text style={{ color: colors.GreenPrimary }}>God</Text>
          ...
        </SubHeading>
        {/* Insert number selector component here */}
        {renderNumberSelector()}
        <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
          to create the world!
        </SubHeading>
        {renderFeedback()}
      </View>

      <View style={styles.bottomWrapper}>
        <ActionButton
          style={{ marginTop: 25 }}
          type="PrimaryBlue"
          disabled={!(selectedNumber === correctAnswer)}
          title="Next"
          onPress={() =>
            router.push({
              pathname:
                "/(authed)/(home)/playground/units/creation_story/modules/1/1.3/[id]",
              params: { id: "onepointtwo" },
            })
          }
        />
      </View>
    </View>
  );
}
