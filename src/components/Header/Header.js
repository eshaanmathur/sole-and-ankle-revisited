import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
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
    border-bottom: 1px solid ${COLORS.gray[300]};
    overflow: auto;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        border-top: 4px solid ${COLORS.gray[900]};
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: ${BREAKPOINTS.phone}) {
        padding: 18px 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
    margin: 0px 48px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        flex: revert;
    }
`;
const Filler = styled.div`
    flex: 1;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        display: none;
    }
`;
const MobileAction = styled.div`
    display: none;
    justify-content: var(--justify-content, flex-start);
    gap: 32px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        display: flex;
    }

    @media (max-width: ${BREAKPOINTS.phone}) {
        gap: 16px;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
