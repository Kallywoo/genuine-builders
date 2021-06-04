import styled from 'styled-components';

export const NotFound = () => {
    return (
    <StyledMain>
        <MainContent>
            <p>Sorry, there's nothing here!</p>
        </MainContent>
    </StyledMain>
    );
};

const StyledMain = styled.main`
    margin: 1em;
`;

const MainContent = styled.div`
    width: 100%;
    max-width: 780px;
    margin: 2em auto;
    padding: 1em 2em;
    background-color: #2a3035;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #333333;
    text-align: center;

    @media only screen and (max-width: 560px) {
        padding: 1em;
    }
`;