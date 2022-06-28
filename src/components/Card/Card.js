import React from 'react'
import gameimg from '../../assets/game.jpg'
import StarRating from '../StarRating/StarRating'
import { ReactComponent as IconAddProduct } from '../../assets/addProduct.svg'
import {StyledCard, HeaderCard, HeaderNameCont, HeaderPriceCont, CardTitle, CardState, CardPrice, FigureContent, CardFigure, FigureImg, FigureFigcaption, CardInteract, AddButton} from './Styles.js'

const Card = () => {
    return (
        <StyledCard>
            <HeaderCard>
                <HeaderNameCont>
                    <CardTitle>
                        Assassin's Creed IV
                    </CardTitle>
                    <CardState>
                        In Stock
                    </CardState>
                </HeaderNameCont>
                <HeaderPriceCont>
                    <CardPrice>
                        $29.00
                    </CardPrice>
                </HeaderPriceCont>
            </HeaderCard>
            
            <FigureContent>
                <CardFigure>
                    <FigureImg src={gameimg}></FigureImg>
                    <FigureFigcaption>
                        Assassins Creed IV: La venganza de los SID
                    </FigureFigcaption>
                </CardFigure>
            </FigureContent>

            <CardInteract>
                <StarRating></StarRating>
                <AddButton>
                    <IconAddProduct width={'25px'} ></IconAddProduct>
                </AddButton>
            </CardInteract>

            
        </StyledCard>
    )
}

export default Card