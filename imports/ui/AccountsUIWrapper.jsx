import React, { useEffect, useRef } from "react";
import { Blaze } from "meteor/blaze";
import { Template } from "meteor/templating";
import AccountsUI from "meteor/ian:accounts-ui-bootstrap-3";
import ReactDOM from "react-dom";

const AccountsUIWrapper = () => {
  const refTarget = useRef();

  useEffect(() => {
    const view = Blaze.render(Template._loginButtons, refTarget.current);

    return () => {
      Blaze.remove(view);
    };
  });

  return <div ref={refTarget}> </div>;
};

export default AccountsUIWrapper;