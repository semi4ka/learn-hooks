import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";

const HOCExample = () => {
  const ComponentWidthAuth = withLogin(Component);
  const ComponentWidthPropsStyles = withPropsStyles(Component);
  const NewComponent = withPropsStyles(ComponentWidthAuth);

  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Divider />
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <Divider />

        <ComponentWidthAuth />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <ComponentWidthPropsStyles />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <NewComponent />
      </CardWrapper>
    </>
  );
};

export default HOCExample;