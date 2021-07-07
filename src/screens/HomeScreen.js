import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Image, FlatList,
  SafeAreaView,Dimensions,  RefreshControl,ScrollView
} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'

import Loading from '../components/common/Loading'
import MovieRender from '../components/movie/MovieRender'

import {fetchMovieList} from '../actions/movieActions'

const {width,height} = Dimensions.get('screen');


const HomeScreen = (props) => {
  const [page,setPage] = useState(1);
  const dispatch = useDispatch()
  const {navigation,loading}=props;   

  const movieSelector = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(fetchMovieList(page))
  }, [page]);

  const _handleLoadMore =  () => {
    setPage(page + 1)
  }

  const _handleLoading = () => {
    if(!loading) return null;
    return <Loading/>
  }

  const _handleRefresh = () =>  {
    setPage(1)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View
      style={{flex:10/10}} 
      >
        <Image style={{marginBottom:10,width:width/2,height:height/16,overflow:"hidden",alignSelf:'center'}} source={require('../utils/logo.png')}/>
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}          
          data={movieSelector.movieList}
          renderItem={({ item }) => <MovieRender navigation={navigation}  movie={item} />}
          keyExtractor={(item,index) => index.toString()}
          showsVerticalScrollIndicator={false} 
          ListFooterComponent={_handleLoading}      
          onEndReachedThreshold={5}   
          onEndReached={_handleLoadMore}   
          refreshing={movieSelector.refreshing}
          onRefresh={_handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20

  },
});

export default HomeScreen



