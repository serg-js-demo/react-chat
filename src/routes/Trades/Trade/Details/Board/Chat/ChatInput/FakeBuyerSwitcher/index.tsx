import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFakeBuyer } from "store/reducers/currentUser/actions";
import { State } from "store/types";
import styled from "@emotion/styled";

const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 6px;
    cursor: pointer;       
    background-clip: content-box;
    border: 1.5px solid #bbbbbb;
    border-radius: 6px;
    background-color: #e7e6e7;
    margin: 2px;
    box-sizing: border-box;
    &:checked{
        background-color: #008000;
        border-color: #008000;
    }

    &:focus{
        outline: none !important;
    }
`;


const FakeBuyerSwitcher = () => {
  const { isFakeBuyer } = useSelector(
    ({ currentUser: { isFakeBuyer } }: State) => {
      return {
        isFakeBuyer,
      };
    }
  );
  const dispatch = useDispatch();

  const toggleChecked = useCallback(() => {
    dispatch(setIsFakeBuyer(!isFakeBuyer));
  }, [dispatch, isFakeBuyer]);

  return (
    <Input
      type="checkbox"
      checked={isFakeBuyer}
      onChange={toggleChecked}
      title={"Send a message as a Buyer"}
    />
  );
};

export default React.memo(FakeBuyerSwitcher);
