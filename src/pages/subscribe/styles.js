import styled from 'styled-components';
import {
  Checkbox as SemanticCheckbox,
} from 'semantic-ui-react'

const ContainerRadio = styled.div`
&,div:first-child {
  padding-right: 1rem;
}
`;

const Checkbox = styled(SemanticCheckbox)`
  
  &.ui.checked.toggle.checkbox>input:focus~label:before {
    background: green !important;
  }

  &.ui.checked.toggle.checkbox>label:before {
    background: green !important;
  }
`;

export {
  ContainerRadio,
  Checkbox,
};
