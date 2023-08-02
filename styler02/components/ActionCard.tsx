/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  // Function to open a link
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>// Tutorial //</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            How To Use GPG to Encrypt and Sign Messages
          </Text>
          <Text style={styles.headerSubtext}>Published on May 27, 2017</Text>
          {/* Tags */}
          <View style={styles.cardTags}>
            <Text style={styles.tag}>Security</Text>
            <Text style={styles.tag}>Email</Text>
          </View>
        </View>
        {/* Author Section */}
        <View style={styles.authorContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://www.digitalocean.com/_next/static/media/default-avatar.14b0d31d.jpeg',
            }}
          />
          <Text style={styles.author}>By</Text>
          <TouchableOpacity
            style={styles.author}
            onPress={() => {
              openWebsite(
                'https://www.digitalocean.com/community/users/jellingwood',
              );
            }}>
            <Text style={styles.authorLink}>Justin Ellingwood</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: 'https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTopic}>Introduction</Text>
          <Text numberOfLines={8} style={styles.infoText}>
            GPG, or GNU Privacy Guard, is a public key cryptography
            implementation. This allows for the secure transmission of
            information between parties and can be used to verify that the
            origin of a message is genuine.{'\n'} {'\n'} In this guide, we will
            discuss how GPG works and how to implement it. We will be using an
            Ubuntu 16.04 server for this demonstration, but will include
            instructions for other distributions as well.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages',
              );
            }}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.github.com/thenishantgiri');
            }}>
            <Text style={styles.footerText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontFamily: 'monospace',
    color: '#0068FF',
    paddingHorizontal: 8,
    letterSpacing: -1,
  },
  card: {
    height: 'auto',
    width: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#0068FF',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    marginHorizontal: 8,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 12,
    color: '#031b4e',
  },
  headerSubtext: {
    fontWeight: '300',
    color: '#4d5b7c',
  },
  cardTags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 8,
  },
  tag: {
    color: '#4d5b7c',
    backgroundColor: '#f0f2fb',
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 8,
    fontSize: 14,
  },
  authorContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 10,
  },
  avatar: {
    height: 54,
    width: 54,
    borderRadius: 50,
  },
  author: {
    marginLeft: 8,
    alignSelf: 'center',
    color: '#081b4b',
  },
  authorLink: {
    textDecorationLine: 'underline',
    color: '#0169ff',
  },
  cardImage: {
    height: 200,
    borderRadius: 6,
    margin: 15,
  },
  cardBody: {
    margin: 12,
  },
  cardTopic: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4d5b7c',
  },
  infoText: {
    marginTop: 8,
    textAlign: 'justify',
    color: '#4d5b7c',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  footerText: {
    fontSize: 16,
    color: '#00cc00',
    backgroundColor: '#0068FF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
