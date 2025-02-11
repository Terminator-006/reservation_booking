import React from 'react';
import PropTypes from 'prop-types';
import { Button as ShadcnButton } from "@/components/ui/button";

export const CustomButton = ({ children, icon, ...props }) => {
  return (
    <ShadcnButton {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </ShadcnButton>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};
