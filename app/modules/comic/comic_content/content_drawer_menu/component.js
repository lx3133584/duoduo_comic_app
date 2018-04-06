import React, { PureComponent } from 'react';
import styled from "styled-components";
import { ContentDrawerIcon } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

class ContentDrawerMenuComponent extends PureComponent {
  constructor(props) {
    super(props);
    const { switchBottomType } = props;
    this.menu_list = [
      {
        icon_type: 'list',
        title: '目录',
        onPress: f => f,
      },
      {
        icon_type: 'progress',
        title: '进度',
        onPress: () => switchBottomType('progress'),
      },
      {
        icon_type: 'setting',
        title: '设置',
        onPress: () => switchBottomType('setting'),
      },
    ]
  };
  static height = 80;
  render() {

    return (
      <ContainStyled style={{ height: ContentDrawerMenuComponent.height }}>
        {
          this.menu_list.map(({ icon_type, title, onPress }) => {
            return <ContentDrawerIcon icon_type={icon_type} title={title} key={icon_type} onPress={onPress} />
          })
        }
      </ContainStyled>
    );
  }
}

export default ContentDrawerMenuComponent;
