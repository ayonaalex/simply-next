import { parseISO, format } from 'date-fns'
import styled from 'styled-components'
import media from './screen'

const Published = styled.p`
display: inline-block;
color: #7E7E7E;
margin: 0;
font-family: Gowun Batang;
font-size: 0.7rem


`


export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
  <Published>Published on 
  <time dateTime={dateString}>{ format(date, ' LLLL d, yyyy')}
  </time>
  </Published>
  )
}