import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { HistoryListItem, Modal } from '..';
import { LongList } from '../../..';
import { brand_primary } from '../../../../theme';
import styled from "styled-components";
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  padding-top: 15px;
`

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
    this.onFetch(0);
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
  async onFetch(page) {
    const { getList } = this.props;
    return await getList(page);
  };
  render() {
    const list = this.props.list.toJS();
    const { isVisible } = this.state;
    return (
      <ContainStyled>
        <LongList
           list={list}
           Item={HistoryListItem}
           itemOnLongPress={this.removeFavorite}
           itemOnPress={this.navigate}
           onFetch={this.onFetch}
           initialNum={height / 40}
           isLong
         />
         <Modal
           confirm={this.confirm}
           cancel={this.cancel}
           isVisible={isVisible}>
           是否确认删除此条浏览记录？
         </Modal>
      </ContainStyled>
    );
  }
}

export default FavoritesListComponent;
