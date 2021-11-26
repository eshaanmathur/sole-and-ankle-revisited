import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <Filler />

                <MobileAction style={{ '--justify-content': 'flex-end' }}>
                    <UnstyledButton>
                        <VisuallyHidden>Cart</VisuallyHidden>
                        <Icon id={'shopping-bag'} />
                    </UnstyledButton>
                    <UnstyledButton>
                        <VisuallyHidden>Search</VisuallyHidden>
                        <Icon id={'search'} />
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <VisuallyHidden>Menu</VisuallyHidden>

                        <Icon id={'menu'} />
                    </UnstyledButton>
                </MobileAction>
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    border-bottom: 1px solid var(--color-gray-300);
    overflow: auto;

    @media (${QUERIES.tabletAndSmaller}) {
        border-top: 4px solid var(--color-gray-900);
        justify-content: space-between;
        align-items: center;
    }

    @media (${QUERIES.phoneAndSmaller}) {
        padding: 18px 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;

    @media (${QUERIES.tabletAndSmaller}) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media (${QUERIES.tabletAndSmaller}) {
        flex: revert;
    }
`;
const Filler = styled.div`
    flex: 1;

    @media (${QUERIES.tabletAndSmaller}) {
        display: none;
    }
`;
const MobileAction = styled.div`
    display: none;
    justify-content: var(--justify-content, flex-start);
    gap: 32px;

    @media (${QUERIES.tabletAndSmaller}) {
        display: flex;
    }

    @media (${QUERIES.phoneAndSmaller}) {
        gap: 16px;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

export default Header;
