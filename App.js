import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Alert, Image} from 'react-native';
import React from 'react';
import {FontAwesome6} from "@expo/vector-icons";


const datasource = [
  {data: [
      {name: 'Charizard',
        card:'SM158',
        link:'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SMP/SMP_EN_SM158.png'},
      {name: 'Ninetales',
        card: '199',
        link: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV03/SV03_EN_199.png'}
    ],
    title: "FIRE",
    bgcolor:"red",
    icon: 'fire',
    iconColor: 'black',
  },
  {
    data: [
      {name: 'Gyeninja', card:'54', link:'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_54.png'},
      {name: 'Kyurem' , card:'BW37', link:'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW37.png'},
    ],
    title: "Water",
    bgcolor:"skyblue",
    icon: 'droplet',
    iconColor: 'black',
  }
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={() => {Alert.alert("Pokemon Card "+ item.card +", " + item.name)}}>
        <Text style={styles.textStyle}>{item.name} {item.key}</Text>
        <Image source ={{uri: item.link}}
               style={{width:200, height:300}} />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>ADD POKEMON</Text>
        {/*<FlatList data={datasource}*/}
        {/*          renderItem={renderItem}/>*/}
        <SectionList
            contentContainerStyle={{padding:10}}
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgcolor, icon, iconColor}}) => (
                <View
                    style={[
                      styles.headerContainer,
                      {backgroundColor: bgcolor}
                    ]}
                >
                  <FontAwesome6
                      name={icon}
                      size={20}
                      color={iconColor}
                  />
                  <Text style={[styles.headerText, {color: iconColor}]}>
                    {title}
                  </Text>
                </View>
            )}
        />
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  titleStyle: {
    backgroundColor: '#2196F3',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 15,
  },

  opacityStyle: {
    flexDirection: 'row',         // Put text and image side-by-side
    alignItems: 'center',         // Vertically center the name
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 15,                  // Adds breathing room inside the box
    backgroundColor: 'white',   // Light lavender background like the screenshot
  },
  textStyle: {
    fontSize: 20,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey'
  },
});
