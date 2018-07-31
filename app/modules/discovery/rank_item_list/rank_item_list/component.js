import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { RankItemListItem } from '..';
import styled from 'styled-components';
import { LongList, LoadingPage } from '@';
import { wrapWithLoading } from '~/utils';

const ContainStyled = styled.View`
  padding-top: 15px;
  padding-bottom: 72px;
`;
@wrapWithLoading
class RankItemListComponent extends PureComponent {
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
    const { type = 0 } = props.navigation.state.params;
    this.type = type;
    this.onFetch = this.onFetch.bind(this);
    this.navigate = props.navigation.navigate.bind(this);
  }

  componentDidMount() {
    this.onFetch(0);
  }

  async onFetch(page) {
    const { getList, hideLoading } = this.props;
    const res = await getList({ page, type: this.type });
    hideLoading();
    return res;
  }

  renderItem = props => <RankItemListItem {...props} type={this.type} />;

  render() {
    const { list, loading } = this.props;
    const listFormat = list.toJS();
    return ([
      <LoadingPage show={loading} key="loading" />,
      <ContainStyled key="main">
        <LongList
          list={listFormat}
          Item={this.renderItem}
          itemOnPress={this.navigate}
          onFetch={this.onFetch}
          isLong
          showFooter
        />
      </ContainStyled>,
    ]);
  }
}

export default RankItemListComponent;
