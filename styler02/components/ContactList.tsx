import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: '5b2eee0a8fdd5b71c8148490',
      age: 29,
      name: 'Campos York',
      gender: 'Male',
      company: 'AVENETRO',
      email: 'camposyork@avenetro.com',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '5b2eee0a9cd29e820c10edad',
      age: 40,
      name: 'Esperanza Boone',
      gender: 'Male',
      company: 'COSMETEX',
      email: 'esperanzaboone@cosmetex.com',
      photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      id: '5b2eee0a582ba867abbd7ce7',
      age: 39,
      name: 'Holden Barry',
      gender: 'Male',
      company: 'CODAX',
      email: 'holdenbarry@codax.com',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: '5b2eee0afe5f471c63fa7acf',
      age: 22,
      name: 'Daniels Barlow',
      gender: 'Male',
      company: 'OPTICOM',
      email: 'danielsbarlow@opticom.com',
      photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: '5b2eee0af534aab9ece2f890',
      age: 23,
      name: 'Leigh Burris',
      gender: 'Male',
      company: 'KINETICUT',
      email: 'leighburris@kineticut.com',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: '5b2eee0ac42f319d1c980d93',
      age: 35,
      name: 'Floyd Little',
      gender: 'Male',
      company: 'FURNAFIX',
      email: 'floydlittle@furnafix.com',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({id, name, age, gender, company, photo}) => (
          <View key={id} style={styles.userCard}>
            <View style={styles.backDrop} />
            <Image source={{uri: photo}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.userDescriptionContainer}>
              <Text style={styles.userDescription}>{age}</Text>
              <Text style={styles.userDescription}>{gender}</Text>
            </View>
            <Text style={styles.userCompany}>{company}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    backgroundColor: '#f4f4f4',
    height: 'auto',
    padding: 20,
  },
  backDrop: {
    backgroundColor: '#4071f4',
    height: 150,
    width: '100%',
    borderTopLeftRadius: 100,
  },
  userCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderTopLeftRadius: 100,
    elevation: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: '#4071f4',
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  userImage: {
    marginTop: '-20%',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#ffffff',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  userDescriptionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  userDescription: {
    fontSize: 14,
    fontWeight: '300',
    marginHorizontal: 5,
  },
  userCompany: {
    fontWeight: '600',
  },
});
