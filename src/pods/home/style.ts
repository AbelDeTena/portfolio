import { css } from '@emotion/css';


export const home = css`
  background-color: orange;
  display:flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 768px) {    
    background-color: lightgreen;
  }

  @media (min-width: 1024px) {    
    background-color: lightblue;
    flex-direction: row;
    gap: 2em;
    padding-top: 5em;
  }

`;
export const socialLinks = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const defaultLinkStyle = css`
display: inline-block;
margin: 0 10px;
padding: 10px;
text-decoration: none;
color: #333;
border: 1px solid #333;
border-radius: 5px;
transition: background-color 0.3s, color 0.3s;

&:hover {
  background-color: #333;
  color: #fff;
}
`;
