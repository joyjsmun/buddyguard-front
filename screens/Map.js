import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Slider, Icon, SearchBar, Button } from "@rneui/themed";

const SearchSection = () => {
  return (
    <View className="absolute top-24 w-[95%] self-center">
      <SearchBar
        placeholder="Search your destination.."
        ref={(search) => (this.search = search)}
        lightTheme={true}
        round={true}
        inputContainerStyle={{
          backgroundColor: "white",
        }}
        containerStyle={{
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
};

export default function Map() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 relative w-full">
      <MapView
        className="flex-1 "
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <SearchSection />
    </View>
  );
}
