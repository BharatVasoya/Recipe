import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, TextInput, FlatList } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getAnimalWatcher } from "../../store/actions/getAnimalAction";
import TextComponent from "../../components/TextComponent";
import styles from "./styles";
import { FONT_SIZE } from "../../constant/Constant";
import CustomButton from "../../components/CustomButton";
import Loader from "../../components/Loader";
import EmptyDataView from "../../components/EmptyDataView";
import STRINGS from "../../constant/Strings";

const HomeScreen = ({ getAnimalWatcher, getData }) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(1);

  useEffect(() => {
    setLimit(10);
    getAnimalData();
  }, []);

  useEffect(() => {
    getAnimalData();
  }, [limit]);

  const getAnimalData = () => {
    setIsLoading(true);
    setData([]);
    const param = { limit: limit, name: name };
    getAnimalWatcher(
      param,
      (response) => {
        const newData = response.slice(-10);
        setData(response.concat([newData]));
        setIsLoading(false);
        setIsRefreshing(false);
      },
      (error) => {
        setIsRefreshing(false);
        setIsLoading(false);
      }
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true)
    setLimit(10);
    getAnimalData();
}

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.styleItemView}>
        <Image style={styles.styleImageView} source={{ uri: item.image_src }} />
        <View style={{ padding: wp(3) }}>
          <TextComponent textStyle={{ fontWeight: "bold" }} title={item.name} />
          <TextComponent textStyle={{ marginTop: hp(0.5) }} title={item.type} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.styleContainer}>
      <View style={{ paddingHorizontal: wp(4) }}>
        <TextComponent
          textStyle={{ fontWeight: "bold" }}
          title={STRINGS.LETS_EXPLORE}
        />
        <TextInput
          style={styles.styleTextInput}
          placeholder={STRINGS.SEARCH}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          onEndEditing={() => {
            setLimit(10);
            getAnimalData();
          }}
        />

        <View style={styles.styleViewAll}>
          <TextComponent
            textStyle={{ fontWeight: "bold" }}
            title={STRINGS.CATEGORY}
          />
          <TextComponent
            title={STRINGS.VIEW_ALL}
            textStyle={{ fontSize: FONT_SIZE.SMALL }}
          />
        </View>

        <View style={styles.styleCategoryView}>
          <CustomButton
            isSelected={selectedFilter === 1 ? true : false}
            title={STRINGS.TRENDING}
            onPress={() => {
              setSelectedFilter(1);
            }}
          />
          <CustomButton
            isSelected={selectedFilter === 2 ? true : false}
            title={STRINGS.NEW}
            onPress={() => {
              setSelectedFilter(2);
            }}
          />
          <CustomButton
            isSelected={selectedFilter === 3 ? true : false}
            title={STRINGS.POPULAR}
            onPress={() => {
              setSelectedFilter(3);
            }}
          />
        </View>

        <FlatList
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          data={getData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            {
              flexGrow: 1,
              alignSelf: "center",
              paddingBottom: hp(20),
            },
          ]}
          onEndReached={() => {
            setLimit(limit + 10);
          }}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={
            <EmptyDataView
              title={isLoading ? STRINGS.LOADING : STRINGS.NO_DATA}
            />
          }
        />
      </View>
      {isLoading && <Loader />}
    </SafeAreaView>
  );
};

function mapStateToProps({ getAnimalReducer }) {
  const { getData } = getAnimalReducer;
  return { getData };
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAnimalWatcher,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
