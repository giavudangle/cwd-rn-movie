import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Ant from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import ButtonCustom from '../components/common/ButtonCustom'
import { logout } from '../actions/authActions'

const url ='https://res.cloudinary.com/codingwithvudang/image/upload/v1622100868/sz4scfp9eit31cqy8xnf.jpg'

const UserDetail = (custom) => {
  return (
    <View style={{ paddingTop: 20, flex: 2, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, alignItems: 'center', backgroundColor: 'white' }}>
      <Image source={{ uri: url }} style={{ width: 100, height: 100, borderRadius: 300 }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gia Vũ</Text>
      <Ant name='customerservice' size={40} color='black' />
    </View>

  )
}

const mockData = [
  {
    icon: 'heart',
    feature: 'Favorites'
  },
  {
    icon: 'unlock',
    feature: 'Remove Ads'
  },
  {
    icon: 'hourglass',
    feature: 'Restore Purchase'
  },
  {
    icon: 'star',
    feature: 'Rate this app'
  },
  {
    icon: 'tag',
    feature: 'Feedback'
  },
  {
    icon: 'sharealt',
    feature: 'Share this app'
  }
]


const FeatureRenderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <View style={{ padding: 16, flexDirection: 'row', paddingHorizontal: 4, borderColor: 'gray', borderWidth: 0.2, }}>
        <Ant style={{ paddingHorizontal: 30 }} name={`${item.icon}`} size={30} color='black' />
        <Text style={{ fontSize: 20, fontWeight: '400', alignSelf: 'center', paddingLeft: 10 }}>{item.feature}</Text>
      </View>
    </TouchableOpacity>

  )
}


export default function ProfileScreen() {
  const dispatch = useDispatch();
  const _handleLogout = () => {
    dispatch(logout())
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

      <UserDetail />
      <View style={{ flex: 8, marginTop: 30 }}>
        <FlatList
          data={mockData}
          renderItem={({ item }) => <FeatureRenderItem item={item} />}
        />
      </View>
      <ButtonCustom onPressHandle={_handleLogout} title='logout' />
    </SafeAreaView>
  )
}