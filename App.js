import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Platform, Dimensions, SafeAreaView } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.settingButton}>
            <Image
              style={styles.settingIcon}
              source={Images.settings}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <Image
            style={styles.tinderLogo}
            source={Images.logo}
            resizeMode='contain'
          />
          <TouchableOpacity style={styles.chatButton}>
            <Image
              style={styles.chatIcon}
              source={Images.chat}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileCard}>
          <Image
            style={styles.profilePicture}
            source={this.state.profileImage}
            resizeMode='contain'
          />
          <View style={styles.profileDetails}>
            <Text style={styles.introText}>
              <Text style={styles.nameText}>
                {this.state.name}{','}
              </Text>
              <Text style={styles.ageText}>
                {this.state.age}
              </Text>
            </Text>
            <Text style={styles.infoText}>
              {this.state.occupation}
            </Text>
          </View>
        </View>

        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.rewindButton}>
            <Image
              style={styles.rewindIcon}
              source={Images.rewind}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nopeButton}>
            <Image
              style={styles.nopeIcon}
              source={Images.nope}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boostButton}>
            <Image
              style={styles.boostIcon}
              source={Images.boost}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton}>
            <Image
              style={styles.likeIcon}
              source={Images.like}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.superLikeButton}>
            <Image
              style={styles.superLikeIcon}
              source={Images.superLike}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dcdcdc',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56,
    width: width,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 2,
    marginTop: Platform.OS === 'ios' ? 0 : 23,
  },
  settingButton: {
  },
  settingIcon: {
    tintColor: '#a9a9a9',
    height: 25,
    width: 25,
    marginLeft: 10
  },
  tinderLogo: {
    height: 30,
    width: 70
  },
  chatButton: {
  },
  chatIcon: {
    tintColor: '#a9a9a9',
    height: 30,
    width: 30,
    marginRight: 10
  },

  profileCard: {
    borderWidth: 2,
    borderColor: '#a9a9a9',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  profilePicture: {
    width: width * 0.9,
    height: width * 0.9
  },
  profileDetails: {
    width: width * 0.9,
    height: 70,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center'
  },
  introText: {
    marginLeft: 18,
    fontSize: 23
  },
  nameText: {
    fontWeight: 'bold'
  },
  ageText: {
  },
  infoText: {
    marginLeft: 18,
    color: '#a9a9a9',
    fontSize: 16
  },

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 85 : 100,
    width: width
  },
  rewindButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50
  },
  rewindIcon: {
    height: 25,
    width: 25
  },
  nopeButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nopeIcon: {
    height: 25,
    width: 25
  },
  boostButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boostIcon: {
    height: 25,
    width: 25
  },
  likeButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeIcon: {
    height: 25,
    width: 25
  },
  superLikeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50
  },
  superLikeIcon: {
    height: 25,
    width: 25
  },
});