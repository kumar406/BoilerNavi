import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
 
import { ListItem, Separator } from '../components/List';
import majors from '../data/majors';
import { changeMajor } from '../actions/currencies';
 
class MajorList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    major: PropTypes.string,
    primaryColor: PropTypes.string,
  };
 
  handlePress = (major) => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    dispatch(changeMajor(major));
    navigation.goBack(null);
  };
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={majors}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
 
const mapStateToProps = state => ({
  major: state.majors.major,
  primaryColor: state.theme.primaryColor,
});
 
export default connect(mapStateToProps)(MajorList);