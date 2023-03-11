import React from "react";
import { SafeAreaView } from "react-native";

import TextComponent from "../../components/TextComponent";
import STRINGS from "../../constant/Strings";
import styles from "./styles";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.styleContainer}>
        <TextComponent
          textStyle={{ fontWeight: "bold" }}
          title={STRINGS.PROFILE}
        />
    </SafeAreaView>
  );
};

export default ProfileScreen;
