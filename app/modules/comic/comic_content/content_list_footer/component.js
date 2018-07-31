import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { Image, Dimensions } from 'react-native';
import { wrapWithReplace } from '~/utils';

const { width } = Dimensions.get('window');
const { prefetch } = Image;

const ContainStyled = styled.View`
  width: ${width};
  background-color: #ededed;
  flex-direction: row;
  justify-content: space-around;
`;
const TextStyled = styled.Text`
  background-color: #ededed;
  text-align: center;
  font-size: 14px;
  color: #666;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;
const buttonStyle = {
  backgroundColor: '#ededed',
  borderWidth: 0,
  borderRadius: 0,
  height: 50,
  elevation: 0,
};
const textStyle = {
  fontWeight: 'normal',
  color: '#666',
  fontSize: 14,
};
@wrapWithReplace('ComicContent')
class ContentListFooterComponent extends PureComponent {
  static propTypes = {
    next: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    getList: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      addListener: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }).isRequired,
  };

  static defaultProps = {
    next: null,
  }

  componentDidMount() {
    setTimeout(this.init, 3000);
  }

  init = () => {
    const { next, getList } = this.props;
    if (next) {
      getList({ id: next.id, pre: true, page: 0 }).then(({ value }) => { // 预加载
        const data = value.result.data.slice(0, 3);
        const tasks = data.map(item => prefetch(item.url));
        Promise.all(tasks);
      });
    }
  };

  goNext = () => {
    const { next, replace } = this.props;
    const { id, title } = next || {};
    replace({ chapter_id: id, title, pre: true });
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  };

  render() {
    const { next } = this.props;
    const { title } = next || {};
    return (
      <ContainStyled>
        <Button
          buttonStyle={buttonStyle}
          title="返回目录"
          titleStyle={textStyle}
          onPress={this.goBack}
        />
        {!next ? (
          <TextStyled>
已经看完啦
          </TextStyled>
        ) : (
          <Button
            buttonStyle={buttonStyle}
            title={`下一章：${title}`}
            titleStyle={textStyle}
            onPress={this.goNext}
          />
        )}
      </ContainStyled>
    );
  }
}

export default ContentListFooterComponent;
