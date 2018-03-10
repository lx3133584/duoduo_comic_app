import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from "styled-components";

const ContainStyled = styled.View`
  height: 150px;
`
const TopStyled = styled.View`
  width: 80px;
`
const BottomStyled = styled.View`
  margin-top: 8px;
`
const TitleStyled = styled.Text`
  color: #000;
  font-size: 14px;
`

class ComicDetailComponent extends PureComponent {
  static propTypes = {
    getDetail: PropTypes.func.isRequired,
    detail: ImmutablePropTypes.map.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }),
  };
  constructor() {
    super();
    this.onFetch = this.onFetch.bind(this);
  };
  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.onFetch(id);
  };
  async onFetch(id) {
    const { getDetail } = this.props;
    return await getDetail(id);
  };
  render() {
    const detail = this.props.detail.toJS();
    return (
      <ContainStyled>
      </ContainStyled>
    );
  }
}

export default ComicDetailComponent;
