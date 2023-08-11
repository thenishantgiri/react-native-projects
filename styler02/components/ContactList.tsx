import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: '5b2eee0a8fdd5b71c8148490',
      age: 29,
      name: 'Campos York',
      gender: 'male',
      company: 'AVENETRO',
      email: 'camposyork@avenetro.com',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '5b2eee0a9cd29e820c10edad',
      age: 40,
      name: 'Esperanza Boone',
      gender: 'male',
      company: 'COSMETEX',
      email: 'esperanzaboone@cosmetex.com',
      photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      id: '5b2eee0a582ba867abbd7ce7',
      age: 39,
      name: 'Holden Barry',
      gender: 'male',
      company: 'CODAX',
      email: 'holdenbarry@codax.com',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: '5b2eee0afe5f471c63fa7acf',
      age: 22,
      name: 'Daniels Barlow',
      gender: 'male',
      company: 'OPTICOM',
      email: 'danielsbarlow@opticom.com',
      photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: '5b2eee0af534aab9ece2f890',
      age: 23,
      name: 'Leigh Burris',
      gender: 'female',
      company: 'KINETICUT',
      email: 'leighburris@kineticut.com',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: '5b2eee0ac42f319d1c980d93',
      age: 35,
      name: 'Floyd Little',
      gender: 'male',
      company: 'FURNAFIX',
      email: 'floydlittle@furnafix.com',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, age, gender, company, email, photo}) => (
          <View key={id} style={styles.userCard}>
            <Image source={{uri: photo}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userAge}>{age}</Text>
            <Text style={styles.userGender}>{gender}</Text>
            <Text style={styles.userCompany}>{company}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {
    flex: 1,
    alignItems: 'center',
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userName: {},
  userAge: {},
  userGender: {},
  userCompany: {},
});
