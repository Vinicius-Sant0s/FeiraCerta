export default props => {
  if (props.conditional) {
    return props.if;
  } else {
    return props.else;
  }
};
