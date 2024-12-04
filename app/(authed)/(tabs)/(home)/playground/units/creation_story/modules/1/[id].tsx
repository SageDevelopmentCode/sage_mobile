import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, Modal, TouchableOpacity, View } from "react-native";
import { styles } from "./Module1.styles";
import Character from "../../../../../assets/CharacterImage.png";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import {
  ButtonText,
  Dialogue,
  Heading,
} from "@/components/Text/TextComponents";
import { FontAwesome } from "@/utils/Icons";
import colors from "@/constants/colors";
import Overlay from "@/components/Overlay/Overlay";
import UnlockedStickerWindow from "@/components/Sticker/UnlockedStickerWindow";
import { splitDialogue } from "@/utils/Dialogue/splitDialogue";
import { useLevitation } from "@/hooks/useLevitation";

type DialogueChunk = string[];

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState(false);
  const [stickerUnlocked, setStickerUnlocked] = useState(false);
  const [stickerWindowRevealed, setStickerWindowRevealed] = useState(false);
  const animation = useRef<Animated.CompositeAnimation | null>(null);

  const navigation = useNavigation();

  const slideAnim = useRef(new Animated.Value(800)).current; // Start position off-screen

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

  const handleRevealedPress = () => {
    if (revealed) {
      return;
    }

    setRevealed(true);

    setTimeout(() => {
      setStickerWindowRevealed(true);
      Animated.timing(slideAnim, {
        toValue: 0, // Bring into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 1000);
  };

  const closeStickerRevealWindow = () => {
    Animated.timing(slideAnim, {
      toValue: 800, // Move off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => setStickerWindowRevealed(false)); // Set visibility to false after animation
  };

  // Sample long dialogue (this can be dynamic for future dialogues)
  const longDialogue: string =
    "Hey there, friend! Did you know that the very first book of the Bible is called Genesis? It's all about how God created everything around us! Let’s dive in and learn more about it together!";

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
          source={require("../../assets/Globe.png")} // Replace with your image path
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

        {/* Sticker Window */}
        {stickerWindowRevealed && (
          <UnlockedStickerWindow
            imageSource={require("../../assets/PlantSticker.png")}
            slideAnim={slideAnim}
            closeStickerRevealWindow={closeStickerRevealWindow}
          />
        )}

        {stickerWindowRevealed && <Overlay />}

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
                  <Dialogue style={{ marginBottom: 20, textAlign: "center" }}>
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
                        type={
                          sentenceIndex < dialogueChunks.length - 1
                            ? "TransparentBlue"
                            : "PrimaryBlue"
                        }
                        title={
                          sentenceIndex < dialogueChunks.length - 1
                            ? "Tap to continue"
                            : "Got it!"
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
          disabled={!revealed || !(sentenceIndex >= dialogueChunks.length - 1)}
          title="Next"
          onPress={() => {}}
        />

        {/* Relative Content */}
        <HeaderProgress
          progressText="2 / 5"
          onBackPress={() => navigation.goBack()}
        />
        <View style={{ marginTop: 20 }}>
          <Heading style={{ color: colors.WhiteText }}>
            Genesis means...
          </Heading>
          <TouchableOpacity onPress={handleRevealedPress}>
            <View
              style={[
                styles.hiddenWordContainer,
                {
                  backgroundColor: revealed ? colors.GreenPrimary : "#8ECCDB",
                },
              ]}
            >
              <TouchableOpacity onPress={handleRevealedPress}>
                {!revealed ? (
                  <ButtonText color="#689AA6">Tap to reveal!</ButtonText>
                ) : (
                  <ButtonText color={colors.WhiteText}>
                    New Beginnings
                  </ButtonText>
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
