import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, Modal, TouchableOpacity, View } from "react-native";
import { styles } from "./Module1-3.styles";
import Character from "../../../../../../assets/CharacterImage.png";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { Dialogue } from "@/components/Text/TextComponents";
import { FontAwesome } from "@/utils/Icons";
import colors from "@/constants/colors";
import { splitDialogue } from "@/utils/Dialogue/splitDialogue";
import { useLevitation } from "@/hooks/useLevitation";

type DialogueChunk = string[];

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState(false);
  const animation = useRef<Animated.CompositeAnimation | null>(null);

  const navigation = useNavigation();

  const { translateY, startLevitation, stopLevitation } = useLevitation();

  // Start animation on component mount
  useEffect(() => {
    if (!dialogVisible) {
      startLevitation();
    } else {
      stopLevitation();
    }

    return () => {
      animation.current?.stop(); // Cleanup on unmount
    };
  }, [dialogVisible]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Sample long dialogue (this can be dynamic for future dialogues)
  const longDialogue: string =
    "Good job! Now, use what you've learned to battle the forces of Chaos and Confusion.";

  // Break the dialogue into chunks of 5 words for example (this can be adjusted)
  const dialogueChunks: DialogueChunk = splitDialogue(longDialogue, 10);

  const handleNextSentence = () => {
    if (sentenceIndex < dialogueChunks.length - 1) {
      setSentenceIndex(sentenceIndex + 1);
    } else {
      setDialogVisible(false); // Close dialog once all chunks are shown
    }
  };

  const handleRepeatDialogue = () => {
    setSentenceIndex(0); // Reset to the first chunk
    setDialogVisible(true); // Show dialog again
  };

  return (
    <>
      <View style={styles.container}>
        {/* Absolute Content */}
        <Image
          source={require("../../../assets/Globe.png")} // Replace with your image path
          style={styles.globeImage}
        />
        <TouchableOpacity
          style={[
            styles.characterImage,
            {
              transform: [{ translateY }], // Apply the animation
            },
          ]}
          onPress={() => setDialogVisible(true)} // Show dialog on press
        >
          <Animated.Image source={Character} />
        </TouchableOpacity>

        {/* Dialog Modal */}
        {dialogVisible && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={dialogVisible}
            onRequestClose={() => setDialogVisible(false)} // Close dialog on Android back button
          >
            <View style={styles.dialogOverlay}>
              <TouchableOpacity onPress={handleNextSentence}>
                <View style={styles.dialogBox}>
                  <Dialogue style={{ marginBottom: 15, textAlign: "center" }}>
                    {dialogueChunks[sentenceIndex]}{" "}
                    {/* Display current chunk */}
                  </Dialogue>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity onPress={handleNextSentence}>
                      <ActionButton
                        type="TransparentBlue"
                        title={
                          sentenceIndex < dialogueChunks.length - 1
                            ? "Continue"
                            : "Tap to Start"
                        }
                        onPress={handleNextSentence} // Show next chunk
                      />
                    </TouchableOpacity>

                    {/* Repeat Button */}
                    {sentenceIndex === dialogueChunks.length - 1 && (
                      <TouchableOpacity onPress={handleRepeatDialogue}>
                        <FontAwesome
                          name="repeat"
                          color={colors.GrayBacking}
                          size={25}
                          style={{ marginLeft: 20 }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}

        <ActionButton
          style={styles.nextButton}
          type="PrimaryBlue"
          disabled={!(sentenceIndex >= dialogueChunks.length - 1)}
          title="Next"
          onPress={() =>
            router.push({
              pathname:
                "/(authed)/(home)/playground/units/creation_story/modules/1/1.1/[id]",
              params: { id: "f1jaefwljq" },
            })
          }
        />

        {/* Relative Content */}
        <HeaderProgress
          progressText="5 / 5"
          onBackPress={() =>
            router.push(
              "/(authed)/(home)/playground/units/creation_story/IntroScreen"
            )
          }
          backgroundColor={colors.DarkSkyBlueBacking}
        />
      </View>
    </>
  );
}
