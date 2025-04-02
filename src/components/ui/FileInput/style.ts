import styled, { css } from 'styled-components'

import { LabelProps } from './type'

export const Container = styled.div({
  width: '100%',
})

export const Input = styled.input`
  display: none;
`

export const Label = styled.label<LabelProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--c-gray-900);

  span:first-child {
    overflow: hidden;
    flex-grow: 1;
    padding: 8px 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid var(--c-gray-400);
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  span:last-child {
    padding: 8px 16px;
    background-color: var(--c-gray-100);
    border: 1px solid var(--c-gray-400);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  ${({ $isError }) =>
    $isError === true &&
    css`
      span:first-child {
        border: 1px solid var(--c-red-400);
        border-right: none;
      }

      span:last-child {
        border: 1px solid var(--c-red-400);
      }
    `}
`
