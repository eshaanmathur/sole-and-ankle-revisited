/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <StyledDialogContent>
                <UnstyledButton onClick={onDismiss}>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    <Icon id={'close'} />
                </UnstyledButton>
                <PrimaryNav>
                    <a style={{ '--color': COLORS.secondary }} href="/sale">
                        Sale
                    </a>
                    <a href="/new">New&nbsp;Releases</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                    <a href="/collections">Collections</a>
                </PrimaryNav>
                <FooterNav>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </FooterNav>
            </StyledDialogContent>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(220deg 5% 40% / 0.8);
    display: flex;
    justify-content: flex-end;
`;

const StyledDialogContent = styled(DialogContent)`
    width: 80%;
    height: 100%;
    background-color: ${COLORS.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 16px 32px 32px;

    & ${UnstyledButton} {
        align-self: flex-end;
    }
`;

const PrimaryNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;

    a {
        color: var(--color, ${COLORS.gray['900']});
        text-transform: uppercase;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.125rem;
        line-height: 1.16;
    }
`;

const FooterNav = styled.footer`
    display: flex;
    flex-direction: column;
    color: ${COLORS.gray['700']};
    gap: 14px;

    a {
        color: inherit;
        text-transform: capitalize;
        font-weight: 500;
        text-decoration: none;
        font-size: 0.875rem;
        line-height: 1.14;
    }
`;

export default MobileMenu;
