import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Map } from "../assets/images";
import { Icon } from "@rneui/themed";

const AcceptRequest = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#F6D268] flex-1 relative">
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 60 }}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex space-y-2">
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <Text className="text-[#121418] font-bold text-xl mt-2">
              Accept Buddy-Guard Request
            </Text>
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-6">
              {/* Card Section */}
              {/* User Info */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex w-full ">
                  <Text className="font-bold text-base">User Info</Text>
                  <View className=" flex space-y-2">
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Icon
                        type="material"
                        name="groups"
                        size={40}
                        color={"#121418"}
                      />
                      <Text className="text-base font-medium ml-8">
                        ZuSocial Group{" "}
                      </Text>
                    </View>
                    <Text className="font-bold text-base">Reward</Text>
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Icon
                        type="font-awesome-5"
                        name="coins"
                        size={34}
                        color={"#121418"}
                      />
                      <Text className="text-base font-medium ml-8">
                        10 BG token / 20 mins duration
                      </Text>
                    </View>
                    <Text className="font-bold text-base">Location</Text>
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Icon
                        name="location"
                        size={34}
                        color={"#121418"}
                        type="entypo"
                      />
                      <Text className="text-base font-medium ml-8">
                        1213st, Bogota, Colombia
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Next Button */}
              <TouchableOpacity
                onPress={() => navigation.navigate("WalkConfirm")}
              >
                <View
                  className="bg-[#3998FF]"
                  style={{
                    width: "98%",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Text className="text-white font-bold text-2xl">
                    Accept Request
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcceptRequest;
