import React, { useEffect, useRef } from "react";
import { Blaze } from "meteor/blaze";
import { Template } from "meteor/templating";

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
