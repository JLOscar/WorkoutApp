import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Footer, Tabs } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Page } from "./Components/Page/Page";

export default function App() {
  const [activeTab, setActiveTab] = useState(Tabs.PROFILE);
  return (
    <View style={styles.container}>
      <Header />
      <Page activeTab={activeTab} />
      <Footer setActiveTab={setActiveTab} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
