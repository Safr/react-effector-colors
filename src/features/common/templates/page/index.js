import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Page = ({ children }) => <section className="page">{children}</section>;

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
