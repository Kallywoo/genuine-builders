import styled from 'styled-components';

import { ListItemLink } from './ListItemLink';

export const Navigation = () => {
    return (
        <StyledNavigation>
            <List>
                <ListItemLink to="/">Home</ListItemLink>
                <ListItemLink to="/about">About Us</ListItemLink>
                <ListItemLink to="/gallery">Gallery</ListItemLink>
                <ListItemLink to="/contact">Contact</ListItemLink>
            </List>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    height: 15px;
    background-color: #2a3035;
    justify-content: center;
`;

const List = styled.ul`
    margin: 0;
    margin-left: 12em;

    @media only screen and (max-width: 768px) {
        margin-left: 0;
        padding: 0;
    }

    @media only screen and (max-width: 560px) {
        display: none;
    }
`;