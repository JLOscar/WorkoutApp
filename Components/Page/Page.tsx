import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  getContentViewHeight,
  getFooterHeight,
  getHeaderHeight,
} from "../../utils/utils";
import { Tabs } from "../Footer/Footer";
import { Excersises } from "./Pages/Excersises";
import { Histroy } from "./Pages/History";
import { Measure } from "./Pages/Measure";
import { Profile } from "./Pages/Profile";
import { Workout } from "./Pages/Workout";

interface Props {
  activeTab: Tabs;
}

export const Page: React.FC<Props> = (props) => {
  const { activeTab } = props;
  return (
    <View style={styles.container}>
      {activeTab === Tabs.PROFILE && <Profile />}
      {activeTab === Tabs.HISTORY && <Histroy />}
      {activeTab === Tabs.WORKOUT && <Workout />}
      {activeTab === Tabs.EXCERSISES && <Excersises />}
      {activeTab === Tabs.MEASURE && <Measure />}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: getHeaderHeight(),
    marginBottom: getFooterHeight(),
    width: "100%",
    height: "100%",
  },
});
