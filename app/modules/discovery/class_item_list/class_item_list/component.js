import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LongList, LoadingPage, SearchListItem } from '../../..';
import { wrapWithLoading } from '../../../../utils';

const ContainStyled = styled.View`
  padding-top: 15px;
  padding-bottom: 72px;
`;
@wrapWithLoading
class ClassItemListComponent extends PureComponent {
  static propTypes = {
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { id = 0 } = props.navigation.state.params;
    this.id = id;
    this.onFetch = this.onFetch.bind(this);
    this.navigate = props.navigation.navigate.bind(this);
  }

  componentDidMount() {
    this.onFetch(0);
  }

  async onFetch(page) {
    const { getList, hideLoading } = this.props;
    const res = await getList({ page, id: this.id });
    hideLoading();
    return res;
  }

  render() {
    const { loading, list } = this.props;
    const listFormat = list.toJS();
    return ([
      <LoadingPage show={loading} key="loading" />,
      <ContainStyled key="main">
        <LongList
          list={listFormat}
          Item={SearchListItem}
          itemOnPress={this.navigate}
          onFetch={this.onFetch}
          isLong
          showFooter
        />
      </ContainStyled>,
    ]);
  }
}

export default ClassItemListComponent;
