import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Rating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { numberFormat } from '../../../../utils';

const ContainStyled = styled.View`
  height: 70px;
  width: 60px;
  background-color: #fff;
  margin-right: 8px;
  align-items: center;
  elevation: 3;
  padding: 2px;
`
const TitleStyled = styled.Text`
  color: #999;
  font-size: 12px;
`
const ScoreStyled = styled.Text`
  color: #000;
  font-size: 18px;
`
const ScoreNumberStyled = styled.Text`
  color: #666;
  font-size: 10px;
  margin: 1px 0;
`

class ComicDetailBtnsComponent extends PureComponent {
  static propTypes = {
    detail: ImmutablePropTypes.map.isRequired,
  };
  constructor() {
    super();
  };
  render() {
    const { detail } = this.props;
    const score = detail.get('score');
    const score_number = detail.get('score_number');
    return (
      <ContainStyled>
        <TitleStyled>评分</TitleStyled>
        <ScoreStyled>{score}</ScoreStyled>
        <ScoreNumberStyled>({numberFormat(score_number)})</ScoreNumberStyled>
        {!!score && <Rating
          imageSize={8}
          readonly
          startingValue={score / 2}
          fractions={2}
        />}
      </ContainStyled>
    );
  }
}

export default ComicDetailBtnsComponent;
