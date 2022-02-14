import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/globalStyles";
import ReviewForm from "./ReviewForm";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Rohdal, Breath of Fresh Air",
      rating: 5,
      body: "The 90-second clip shows Nintendo's iconic hero sprinting, gliding and jumping across the vast, open world – with a handful of new foes to battle.It ends with the eruption of a dark and ominous force that engulfs Hyrule Castle, one of the final spots that players explored in the previous game.",
      key: 1,
    },
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 15,
      body: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is the nineteenth installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline.",
      key: 2,
    },
    {
      title: "Mental, Breath of Fresh Air",
      rating: 25,
      body: "The trailer was revealed by Nintendo on Tuesday at E3 2021, a major gaming showcase hosted each year in Los Angeles. It's the first that gamers have heard of the game since the Japanese tech giant unveiled a teaser trailer back at E3 2019.",
      key: 3,
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const addReview = (values) => {
    setReviews((prev) => [values, ...prev])
    setOpenModal(false);
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType="slide">
        <View style={styles.modal}>
          <MaterialIcons
            name="close"
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setOpenModal(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons name="add" style={styles.modalToggle} onPress={() => setOpenModal(true)} size={24} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Card>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetail", item)}
            >
              <Text style={globalStyles.title}> {item.title} </Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#e2e2e2',
    elevation: 1,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  modalClose: {
    marginTop: 20,
  },
  modal: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});

export default Home;
