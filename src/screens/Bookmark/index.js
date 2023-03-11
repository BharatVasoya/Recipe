import React from "react";
import { SafeAreaView } from "react-native";

import TextComponent from "../../components/TextComponent";
import styles from "./styles";
import STRINGS from "../../constant/Strings";

const BookmarkScreen = () => {
  return (
    <SafeAreaView style={styles.styleContainer}>
        <TextComponent
          textStyle={{ fontWeight: "bold" }}
          title={STRINGS.BOOKMARK}
        />
    </SafeAreaView>
  );
};

export default BookmarkScreen;
