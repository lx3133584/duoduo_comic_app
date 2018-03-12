import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FavoritesListItem } from '..';
import { LongList } from '../../..';
import { brand_primary } from '../../../../../theme';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
class FavoritesListComponent extends PureComponent {
  static propTypes = {
    getList: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  constructor(props) {
    super(props);
    this.onFetch = this.onFetch.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.navigate = props.navigation.navigate.bind(this);
  };
  componentDidMount() {
    this.onFetch();
  };
  removeFavorite(id) {
    alert('提示', '是否确认删除收藏？', [
      { text: '取消' , style: { color: '#333' } },
      { text: '确定', onPress: () => {
        this.props.remove(id);
      }, style: { color: brand_primary } },
    ])
  };
  async onFetch() {
    const { getList } = this.props;
    return await getList();
  };
  render() {
    const list = this.props.list.toJS();
    return (
      <LongList
         list={list}
         Item={FavoritesListItem}
         itemOnLongPress={this.removeFavorite}
         itemOnPress={this.navigate}
         onFetch={this.onFetch}
         numColumns={3}
       />
    );
  }
}

export default FavoritesListComponent;
