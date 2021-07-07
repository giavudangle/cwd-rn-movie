import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Calendar, } from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ant from 'react-native-vector-icons/AntDesign';

import { API_CONFIG,API_CDN_CONFIG } from '../configs/api.config';

import { getListPlans, deleteAllPlans } from '../actions/planActions';

import { useSelector, useDispatch } from 'react-redux';


const currentDate = new Date().toISOString().slice(0, 10)

export default function PlanScreen({ navigation }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.plans);

  function clearAllData() {

  }


  const _deleteAllPlans = () => {
    dispatch(deleteAllPlans());
  }
  useEffect(() => {
    dispatch(getListPlans());
    clearAllData()
  }, [])

  const PlanItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: '#0095ff', opacity: 0.95, alignItems: 'center'
          , flexDirection: 'row', paddingVertical: 4, borderBottomWidth: 1,
          borderBottomColor: 'white'
        }}>
        <View>
          <Image
            resizeMode='contain'
            style={{ width: 120, height: 120 }}
            source={{ uri: API_CDN_CONFIG.CDN_URL_W500 + item.movie.poster_path }} />
        </View>
        <View style={{ justifyContent: 'flex-start', paddingHorizontal: 30,flexWrap:'wrap' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textTransform: 'uppercase', padding: 4,width:250,flexWrap:'wrap' }}>{item.plan}</Text>
          <Text style={{ fontSize: 18, color: '#ff0000', fontWeight: 'bold', padding: 4 }}>{item.movie.title}</Text>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: '500', padding: 4 }}>Theater : {item.theater}</Text>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '500', padding: 4 }}>Friends : {item.friend}</Text>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', padding: 4 }}>Date: {item.date}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
          <TouchableOpacity onPress={_deleteAllPlans}>
            <Ant
              style={{ paddingLeft: 20, paddingBottom: 10, top: 8 }}
              name='delete' color='#0095ff' size={28}
            />
          </TouchableOpacity>

          <Text style={{ left: 0, fontSize: 30, color: '#0095ff', fontWeight: '900' }}>LIST PLAN</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddPlan')}>
            <Ant
              style={{ paddingRight: 20, paddingBottom: 10, top: 8 }}
              name='pluscircleo' color='#0095ff' size={28}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Calendar
            current={currentDate}
            markedDates={{
              currentDate: {
                marked: true,
                selected: true,
                selectedColor: 'blue'
              }
            }}
            onDayPress={(date) => console.log(date)}
          />
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10 }}
            data={state.listPlan?? []}
            renderItem={({ item }) => <PlanItem item={item} />}
          />
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}