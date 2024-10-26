// SampleComponents.stories.js

import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { View, Alert, TextInput } from "react-native";
import { Button } from "../../../src";

storiesOf("UI Components", module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)

  // Button Story
  .add("Button", () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        label={text("label", "Button Label")}
        onPress={() => Alert.alert("Button was pressed")}
      />
    </View>
  ))

  // TextInput Story
  .add("TextInput", () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder={text("placeholder", "Enter text here")}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          paddingHorizontal: 10,
        }}
      />
    </View>
  ));
