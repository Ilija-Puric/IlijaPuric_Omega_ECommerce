let inputReset = `
input,
label {
  color: #bdb4af6f;
}

input {
  border-color: #ff590b;

  &:hover + fieldset {
    border-color: #ff590b !important;
  }
}

label[data-shrink='false'] + div:hover fieldset {
  border-color: #ff6b2688 !important;
}

fieldset {
  color: #fff;
  border-color: #ffffff24;
}
`;
export default inputReset;
