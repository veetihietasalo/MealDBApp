import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, Text, StyleSheet } from 'react-native';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals);
      })
      .catch(error => {
        console.error("Virhe API-kutsussa:", error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        value={ingredient}
        onChangeText={setIngredient}
        placeholder="Enter ingredient..."
        style={styles.input}
      />
      <Button title="Search" onPress={fetchRecipes} />
      <FlatList 
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
