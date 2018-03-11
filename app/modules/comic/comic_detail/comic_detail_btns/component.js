import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { brand_primary } from '../../../../../theme';
const { width } = Dimensions.get('window');

const ContainStyled = styled.View`
  height: 60px;
  background-color: #fff;
  justify-content: space-around;
  flex-direction: row;
  width: ${width};
`
const CollectionContainStyled = styled.View`
  justify-content: center;
  width: ${width / 2 - 20};
`
const CollectionStyled = styled.View`
  flex-direction: row;
  justify-content: center;
`
const CollectionTextStyled = styled.Text`
  color: #666;
  fontSize: 14px;
  margin-left: 8px;
`
const CollectionNumberStyled = styled.Text`
  fontSize: 12px;
`
const startTextStyle = {
  color: '#fff',
}
const startButtonStyle = {
  backgroundColor: brand_primary,
  borderWidth: 0,
  borderRadius: 100,
  width: width / 2 - 20,
}

class ComicDetailBtnsComponent extends PureComponent {
  static propTypes = {
    detail: ImmutablePropTypes.map.isRequired,
    add: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  constructor() {
    super();
    this.startRead = this.startRead.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  };
  addFavorite() {
    const id = this.props.detail.get('id');
    this.props.add(id);
  };
  startRead() {
    this.props.navigation.navigate('Favorites');
  };
  render() {
    const detail = this.props.detail.toJS();
    return (
      <ContainStyled>
        <CollectionContainStyled>
          <TouchableOpacity activeOpacity={0.6} onPress={this.addFavorite}>
            <CollectionStyled>
              <Icon
                name='heart-o'
                size={18}
                color={brand_primary}
              />
              <CollectionTextStyled>收藏 <CollectionNumberStyled>({detail.collection_number || 0})</CollectionNumberStyled></CollectionTextStyled>
            </CollectionStyled>
          </TouchableOpacity>
        </CollectionContainStyled>
        <Button
          textStyle={startTextStyle}
          buttonStyle={startButtonStyle}
          onPress={this.startRead}
          text={'开始阅读'}
        />
      </ContainStyled>
    );
  }
}

export default ComicDetailBtnsComponent;
