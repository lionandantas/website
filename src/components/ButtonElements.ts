import styled from "styled-components";
import { Link } from "react-scroll";

interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  dark2?: boolean;
}

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${(props: ButtonProps) =>
    props.primary ? "#01BF71" : "#010606"};
  white-space: nowrap;
  padding: ${(props: ButtonProps) => (props.big ? "14px 48px" : "12px 30px")};
  color: ${(props: ButtonProps) => (props.dark ? "#010606" : "#fff")};
  font-size: ${(props: ButtonProps) => (props.fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props: ButtonProps) => (props.primary ? "#fff" : "#01BF71")};
  }
`;
