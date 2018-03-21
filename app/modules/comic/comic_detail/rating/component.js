import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Rating } from 'react-native-elements';
import { RatingModal } from '..';
import { TouchableOpacity } from 'react-native';
import { numberFormat } from '../../../../utils';

const ContainStyled = styled.View`
  height: 75px;
  width: 60px;
  background-color: #fff;
  margin-right: 8px;
  align-items: center;
  elevation: 3;
  padding: 5px;
`
const TitleStyled = styled.Text`
  color: #666;
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

class RatingComponent extends PureComponent {
  static propTypes = {
    score: PropTypes.number,
    score_number: PropTypes.number,
  };
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
  };
  state = {
    isVisible: false,
  };
  cancel() {
    this.setState({ isVisible: false });
  };
  render() {
    const { score, score_number } = this.props;
    const { isVisible } = this.state;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({ isVisible: true })}>
        <ContainStyled>
          <TitleStyled>评分</TitleStyled>
          <ScoreStyled>{Math.round(+score * 10) / 10}</ScoreStyled>
          <ScoreNumberStyled>({numberFormat(score_number)})</ScoreNumberStyled>
          {!!score && <Rating
            imageSize={8}
            readonly
            startingValue={score / 2}
            fractions={2}
          />}
          <RatingModal isVisible={isVisible} cancel={this.cancel} />
        </ContainStyled>
    </TouchableOpacity>
    );
  }
}

export default RatingComponent;
