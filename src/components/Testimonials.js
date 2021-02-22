import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'


const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Sean Michaels</h3>
                        <p>"The greatest experience!"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus eos animi rem accusantium asperiores praesentium. Est numquam, animi quae consequuntur perferendis non esse, iure veritatis quisquam eos facilis rerum.</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb />
                        <h3>Sara Kie</h3>
                        <p>"The greatest experience!"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus eos animi rem accusantium asperiores praesentium. Est numquam, animi quae consequuntur perferendis non esse, iure veritatis quisquam eos facilis rerum.</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    image
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div``
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const ColumnOne = styled.div``
const Testimonial = styled.div``
const ColumnTwo = styled.div``
