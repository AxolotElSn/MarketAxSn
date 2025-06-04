import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  max-width: 720px;
  margin: 60px auto;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  font-size: 18px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #222;
  margin-bottom: 28px;
  text-align: center;
`

export const Label = styled.span`
  color: #666;
  font-weight: 500;
`

export const Value = styled.span`
  color: #007acc;
  font-weight: bold;
`
