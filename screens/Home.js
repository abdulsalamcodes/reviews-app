import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const Home = ({ navigation }) => {
  const [reviews, setReivews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: "The 90-second clip shows Nintendo's iconic hero sprinting, gliding and jumping across the vast, open world – with a handful of new foes to battle.It ends with the eruption of a dark and ominous force that engulfs Hyrule Castle, one of the final spots that players explored in the previous game.",
      key: 1,
    },
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 15,
      body: 'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is the nineteenth installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline.',
      key: 2,
    },
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 25,
      body: "The trailer was revealed by Nintendo on Tuesday at E3 2021, a major gaming showcase hosted each year in Los Angeles. It's the first that gamers have heard of the game since the Japanese tech giant unveiled a teaser trailer back at E3 2019.",
      key: 3,
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Text style={globalStyles.title}> {item.title} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
