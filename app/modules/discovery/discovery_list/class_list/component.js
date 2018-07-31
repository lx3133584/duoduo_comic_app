import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ClassListItem } from '..';
import { LongList } from '../../..';

const ContainStyled = styled.View`
  padding-bottom: 125px;
`;

const columnWrapperStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
};

class ClassListComponent extends PureComponent {
  static propTypes = {
    getList: PropTypes.func.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.navigate = props.navigation.navigate.bind(this);
  }

  componentDidMount() {
    this.onFetch();
  }

  async onFetch() {
    const { getList } = this.props;
    return await getList();
  }

  render() {
    const list = this.props.list.toJS();
    return (
      <ContainStyled>
        <LongList
          list={list}
          Item={ClassListItem}
          customkey="id"
          itemOnPress={this.navigate}
          numColumns={3}
          columnWrapperStyle={columnWrapperStyle}
        />
      </ContainStyled>
    );
  }
}

export default ClassListComponent;
