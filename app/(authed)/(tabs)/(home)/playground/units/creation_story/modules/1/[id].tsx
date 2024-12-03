import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Module1.styles";
import Character from "../../../../../assets/CharacterImage.png";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { Dialogue } from "@/components/Text/TextComponents";
import { FontAwesome } from "@/utils/Icons";
import colors from "@/constants/colors";

type DialogueChunk = string[];

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);

  const navigation = useNavigation();

  // State to manage current sentence index

  // Sample long dialogue (this can be dynamic for future dialogues)
  const longDialogue: string =
    "Hey there, friend! Did you know that the very first book of the Bible is called Genesis? It's all about how God created everything around us! Let’s dive in and learn more about it together!";

  // Function to split the long dialogue into chunks of a specified number of words
  const splitDialogue = (text: string, wordLimit: number): DialogueChunk => {
    const words = text.split(" ");
    let chunks: DialogueChunk = [];

    for (let i = 0; i < words.length; i += wordLimit) {
      chunks.push(words.slice(i, i + wordLimit).join(" "));
    }

    return chunks;
  };

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

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        {/* Absolute Content */}
        <Image
          source={require("../../assets/Globe.png")} // Replace with your image path
          style={styles.globeImage}
        />
        <TouchableOpacity
          style={styles.characterImage}
          onPress={() => setDialogVisible(true)} // Show dialog on press
        >
          <Image source={Character} />
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
              <View style={styles.dialogBox}>
                <Dialogue style={{ marginBottom: 20, textAlign: "center" }}>
                  {dialogueChunks[sentenceIndex]} {/* Display current chunk */}
                </Dialogue>
                <TouchableOpacity onPress={handleNextSentence}>
                  <ActionButton
                    type="PrimaryBlue"
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
                      color={colors.GrayPrimary}
                      size={30}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </Modal>
        )}

        {/* Relative Content */}
        <HeaderProgress
          progressText="2 / 5"
          onBackPress={() => navigation.goBack()}
        />
        <View></View>
        <ActionButton type="PrimaryBlue" title="Next" onPress={() => {}} />
      </View>
    </>
  );
}
