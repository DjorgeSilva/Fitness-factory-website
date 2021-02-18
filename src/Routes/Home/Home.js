import React from 'react'
import BannerIMG from "../../assets/banner.jpg"
import atleta from "../../assets/atleta.png"
import { Link } from "react-router-dom"
import {
    Container,
    Banner,
    BannerTxt,
    Main,
    Info,
    InfoImage,
    InfoTxt,
    ItemInfoTxt

} from "./HomeElements.js"

export const Home = ({ isOpen }) => {
    return (
        <Container isOpen={isOpen}>
            <Banner>
                <img src={BannerIMG} alt="Banner Home Academia" />

                <BannerTxt>
                    <h1>MAINE'S  <span>PREMIER</span> GYM</h1>
                    <p>The Fitness Factory</p>

                    <Link to="/">
                        <button type="button"> Matricule-se</button>
                    </Link>
                </BannerTxt>
            </Banner>

            <Main>
                <Info>
                    <InfoImage>
                        <img src={atleta} alt="Imagem de uma atleta da academia"/>
                    </InfoImage>

                    <InfoTxt>
                        <ItemInfoTxt>
                            <h1>Weight Training</h1>
                            <p>From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.</p>
                        </ItemInfoTxt>

                        <ItemInfoTxt>
                            <h1>General Fitness</h1>
                            <p>If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more.</p>
                        </ItemInfoTxt>

                        <ItemInfoTxt>
                            <h1>Functional Training</h1>
                            <p>With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level.</p>
                        </ItemInfoTxt>

                    </InfoTxt>

                </Info>
            </Main>
        </Container>
    )
}
