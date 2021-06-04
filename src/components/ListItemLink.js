import { Link, Match } from '@reach/router';
import styled from 'styled-components';

import navBackground from '../img/navBackground.png';
import navBackgroundActive from '../img/navBackgroundActive.png';

export const ListItemLink = ({ to, children }) => {
    return (
        <Match path={to}>
            {({ match }) => (
                <ListItem active={match ? true : false}>
                    <StyledLink to={to}>{children}</StyledLink>
                </ListItem>
            )}
        </Match>
    )
};

const ListItem = styled.li`
    display: inline-flex;
    margin: 0em 0.5em;
    background-image: ${props => props.active ? `url(${navBackgroundActive})` : `url(${navBackground})`};
    background-size: 100% 100%;
    text-align: center;
    border-radius: 3px;
    box-shadow: 3px 3px 3px #333333;

    &:hover {
        background-image: url(${navBackgroundActive});
    }
`;

const StyledLink = styled(Link)`
    color: #a8dc7e;
    text-decoration: none;
    min-width: 7em;
    padding: 0.8ex 1ex;
`;