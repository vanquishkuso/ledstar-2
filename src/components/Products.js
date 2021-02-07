import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Products = () => {
    const data = useStaticQuery(graphql`
    query ProductsQuery {
        allProductsJson {
            edges {
                node {
                    alt
                    button
                    name
                    img {
                        childImageSharp {
                            fluid(maxWidth: 10000, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
    `)

    function getProducts(data) {
        const productsArray = []
        data.allProductsJson.edges.forEach((item, index) => {
            productsArray.push(
                <div key={index}>
                    <Img src={item.node.img.childImageSharp.fluid.src} fluid={item.node.img.childImageSharp.fluid}
                    />
                </div>
            )
        })
        return productsArray
    }

    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <ProductWrapper>{getProducts(data)}</ProductWrapper>
        </ProductsContainer>
    )
}

export default Products

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: grey;
    color: #fff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;'
    margin-bottom: 5rem;
    color: #000;
`
const ProductWrapper = styled.div`

`