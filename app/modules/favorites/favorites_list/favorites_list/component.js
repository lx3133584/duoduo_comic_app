import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FavoritesListItem, Modal } from '..';
import { View } from 'react-native';
import { LongList } from '../../..';
import { brand_primary } from '../../../../theme';

class FavoritesListComponent extends PureComponent {
  static propTypes = {
    getList: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  state = {
    isVisible: false,
  };
  constructor(props) {
    super(props);
    this.onFetch = this.onFetch.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
    this.navigate = props.navigation.navigate.bind(this);
  };
  componentDidMount() {
    this.onFetch();
  };
  removeFavorite(id) {
    this.setState({ isVisible: true });
    this.id = id;
  };
  confirm() {
    this.setState({ isVisible: false });
    this.props.remove(this.id);
  };
  cancel() {
    this.setState({ isVisible: false });
  };
  async onFetch() {
    const { getList } = this.props;
    return await getList();
  };
  render() {
    const list = this.props.list.toJS();
    const { isVisible } = this.state;
    return (
      <View>
        <LongList
           list={list}
           Item={FavoritesListItem}
           itemOnLongPress={this.removeFavorite}
           itemOnPress={this.navigate}
           onFetch={this.onFetch}
           numColumns={3}
         />
         <Modal
           confirm={this.confirm}
           cancel={this.cancel}
           isVisible={isVisible}>
           是否确认删除收藏？
         </Modal>
      </View>
    );
  }
}

export default FavoritesListComponent;
