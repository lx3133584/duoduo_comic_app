import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SectionList, Dimensions } from 'react-native';
import { ComicListItem, ComicListCategory, Progress } from '..';
import styled from "styled-components";
import { wrapWithLoading } from '../../../../utils';
import { NavigationActions } from 'react-navigation';
const { height } = Dimensions.get('window');
const initNumber = Math.ceil(height / 50);

const rowStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}
const ItemSeparatorComponent = styled.View`
  border-bottom-color: #c0c0c0;
  border-bottom-width: 1px;
`
@wrapWithLoading
class ComicListComponent extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    chapter_id: PropTypes.number,
    comic_id: PropTypes.number,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.object,
      }),
    }),
  };
  constructor(props) {
    super(props);
    this.navigate = props.navigation.navigate.bind(this);
    this.replace = props.navigation.replace.bind(this);
  };
  componentDidMount() {
    this.onFetch();
  };
  // replace = ({ routeName, params }) => {
  //   this.props.navigation.dispatch(NavigationActions.replace({
  //     key,
  //     routeName,
  //     params,
  //   }))
  // };
  async onFetch() {
    const id = this.props.navigation.getParam('id', null);
    const { getList, hideLoading, comic_id, chapter_id } = this.props;
    const res = await getList(id || comic_id);
    let sectionIndex = 0;
    let itemIndex = 0;
    res.value && res.value.data.forEach((outer, o) => {
      outer.data.forEach((inner, i) => {
        if (inner.id === chapter_id) {
          sectionIndex = o;
          itemIndex = i;
        }
      })
    })
    setTimeout(() => this.scrollTo({ sectionIndex, itemIndex }), 0);
    hideLoading();
  };
  scrollTo = ({ sectionIndex = 0, itemIndex = 0 }) => {
    this.comic_list_ref && this.comic_list_ref.scrollToLocation({
      sectionIndex,
      itemIndex,
      viewPosition: 0,
      viewOffset: 150,
      animated: false,
    });
  };
  _keyExtractor(item, index) {
    return item.id + '';
  };
  _getItemLayout(data, index) {
    let len = 0;
    let offset = 50;
    data.forEach(({ data }, index) => { // 计算分类标题高度
      len += data.length;
      if (index < len) return;
      offset += 50;
    })
    return {length: 51, offset: 51 * (index - 1) + offset, index}
  };
  _getRef = ref => this.comic_list_ref = ref;
  render() {
    const { list, chapter_id, loading, dark, replace } = this.props;
    if (loading) return <Progress />;
    return (
      <SectionList
        ref={this._getRef}
        renderItem={({ item }) => <ComicListItem
          {...item} dark={dark}
          itemOnPress={replace ? this.replace : this.navigate}
          active={item.id === chapter_id} />}
        renderSectionHeader={({ section }) => <ComicListCategory dark={dark}>{section.name}</ComicListCategory>}
        ItemSeparatorComponent={ItemSeparatorComponent}
        stickySectionHeadersEnabled
        keyExtractor={this._keyExtractor}
        initialNumToRender={initNumber}
        sections={list}
        getItemLayout={this._getItemLayout}
      />
    );
  }
}

export default ComicListComponent;
