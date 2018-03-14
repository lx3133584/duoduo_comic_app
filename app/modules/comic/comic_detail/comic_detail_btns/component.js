import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { brand_primary } from '../../../../../theme';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
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
  font-size: 14px;
  margin-left: 8px;
`
const CollectionNumberStyled = styled.Text`
  font-size: 12px;
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
    remove: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  constructor() {
    super();
    this.startRead = this.startRead.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  };
  addFavorite() {
    const id = this.props.detail.get('id');
    this.props.add(id);
  };
  removeFavorite() {
    alert('提示', '是否确认取消收藏？', [
      { text: '取消' , style: { color: '#333' } },
      { text: '确定', onPress: () => {
        const id = this.props.detail.get('id');
        this.props.remove(id);
      }, style: { color: brand_primary } },
    ])
  };
  startRead() {
    const id = this.props.detail.get('chapter_id');
    this.props.navigation.navigate('ComicContent', { id });
  };
  render() {
    const { detail } = this.props;
    return (
      <ContainStyled>
        <CollectionContainStyled>
          <TouchableOpacity activeOpacity={0.6} onPress={detail.get('favorite_id') ? this.removeFavorite : this.addFavorite}>
            <CollectionStyled>
              <Icon
                name={detail.get('favorite_id') ? 'heart' : 'heart-o'}
                size={18}
                color={brand_primary}
              />
              <CollectionTextStyled>{detail.get('favorite_id')? '已' : ''}收藏 <CollectionNumberStyled>({detail.get('collection_number') || 0})</CollectionNumberStyled></CollectionTextStyled>
            </CollectionStyled>
          </TouchableOpacity>
        </CollectionContainStyled>
        <Button
          textStyle={startTextStyle}
          buttonStyle={startButtonStyle}
          onPress={this.startRead}
          text={detail.get('chapter_id') ? '续看' : '开始阅读'}
        />
      </ContainStyled>
    );
  }
}

export default ComicDetailBtnsComponent;
