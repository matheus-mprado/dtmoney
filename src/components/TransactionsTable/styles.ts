import styled from "styled-components";

export const Container = styled.div`
    margin-top:4rem;

    @media(max-width:800px){
        overflow-x:auto;
    }

    table{
        width:100%;
        border-spacing: 0 0.5rem;

        @media(max-width:800px){
            display:none;
        }

        th{
            color:var(--text-body);
            font-weight:400;
            padding:1rem 2rem;
            text-align:left;
            line-height:1.5rem;
        }

        td{
            padding:1rem 2rem;
            border:0;
            background:var(--shape);
            color:var(--text-body);
            border-radius:0.25rem;

            &:first-child{
                color:var(--text-title);
                font-weight:500;
            }

            &.deposit{
                color:var(--green)
            }

            &.withdraw{
                color:var(--red)
            }
        }
    }

    
`;

export const ListItemTransaction = styled.section`
    display:none;
    flex-direction:column;

    @media(max-width:800px){
        display:flex;
        
    }

    div{
        &.headerList{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-bottom:1rem;
            align-items:center;

            p{
                color:var(--text-body);
            }
        }

        h2{
            font-weight:400;
            color:var(--text-title);
        }
    }

`;

export const ItemTransaction = styled.div`
    background:var(--shape);
    margin:0.25rem 0;
    padding:1rem 2rem;
    border-radius:0.25rem;

    h3{
        font-size:1.5rem;
        font-weight:400;
        line-height:2rem;
        margin-top:0.25rem;

        &.deposit{
            color:var(--green)
        }

        &.withdraw{
            color:var(--red)
        }
    }

    div{
        margin-top:1.5rem;
        color:var(--text-body);
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
`;