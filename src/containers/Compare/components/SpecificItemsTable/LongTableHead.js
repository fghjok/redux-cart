import React from "react";
import styled from "styled-components";

const LongTableHead = ({data, handleCollapse, open}) => {
    return (
        <tr>
            <TH >
                <Wrapper onClick = {handleCollapse} >
                    {open? 
                    
                        <SVG t="1574688200605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1171" width="18" height="18"><path d="M856.8 959.53H167.6c-56.95 0-103.38-46.44-103.38-103.38V166.96c0-56.95 46.44-103.38 103.38-103.38h689.2c56.93 0 103.38 46.44 103.38 103.38v689.21c0 56.92-46.44 103.36-103.38 103.36zM167.6 132.49c-18.98 0-34.46 15.48-34.46 34.46v689.21c0 18.98 15.48 34.46 34.46 34.46h689.2c18.98 0 34.46-15.48 34.46-34.46V166.95c0-18.98-15.48-34.46-34.46-34.46H167.6z" fill="#979797" p-id="1172"></path><path d="M760.69 546.01H266.4c-18.98 0-34.46-15.34-34.46-34.46s15.48-34.46 34.46-34.46h494.29c19.12 0 34.46 15.34 34.46 34.46s-15.35 34.46-34.46 34.46z" fill="#979797" p-id="1173"></path></SVG>
                    :
                        <SVG t="1574745464835" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7691" width="17" height="17"><path d="M860 992H164C92 992 32 932 32 860V164C32 92 92 32 164 32h690C932 32 992 92 992 164v690c0 78-60 138-132 138zM164 68C110 68 68 110 68 164v690c0 54 42 96 96 96h690c54 0 96-42 96-96V164c0-54-42-96-96-96H164z" fill="#515151" p-id="7692"></path><path d="M320 482h384v60H320v-60z" fill="#515151" p-id="7693"></path><path d="M482 704V320h60v384h-60z" fill="#515151" p-id="7694"></path></SVG>
                    }
                    {data}
                </Wrapper>
            </TH>
            <TD></TD>
            <TD></TD>
            <TD></TD>
            <TD></TD>
        </tr>
    )
}

export default LongTableHead;



const TH = styled.th`
    box-sizing: border-box;
    height: 51px;
    font-weight: 700;
    background: #f7f7f7;
    color: #666666;
    font-size: 14px;

`
const Wrapper = styled.div`
    margin-left: 20px;
    line-height: 25px;
    display: flex;
    align-items: center; 
    cursor: pointer;
`
const SVG = styled.svg`
    margin-right: 10px;
`
const TD = styled.td`
    box-sizing: border-box;
    border-collapse: collapse;
    height: 51px;
    width: 271px;
    background: #f7f7f7;
`

