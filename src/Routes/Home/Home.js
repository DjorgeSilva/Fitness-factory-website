import React from 'react'
import BannerIMG from "../../assets/banner.jpg"
import sumplementoIMG from "../../assets/sumplemento.jpg"
import atleta from "../../assets/atleta.png"
import iconGym1 from "../../assets/icone-gym1.png"
import iconGym2 from "../../assets/icone-gym2.png"
import iconGym3 from "../../assets/icone-gym3.png"
import { Link } from "react-router-dom"
import memberIMG from "../../assets/member.jpg"

import {
    Container,
    Banner,
    BannerTxt,
    Main,
    Info,
    InfoImage,
    InfoTxt,
    ItemInfoTxt,
    Links,
    SumplementInfo,
    Membership,
    InfoImageSumplementos,
    InnerImageTxt,
    MemberIcon

} from "./HomeElements.js"
import { Row, Col } from 'react-bootstrap'

export const Home = ({ isOpen }) => {
    return (
        <>
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
                            <img src={atleta} alt="Imagem de uma atleta da academia" />
                        </InfoImage>

                        <InfoTxt>
                            <ItemInfoTxt>
                                <img src={iconGym1} alt="" />
                                <h1>Weight Training</h1>
                                <p>From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.</p>
                            </ItemInfoTxt>

                            <ItemInfoTxt>
                                <img src={iconGym2} alt="" />
                                <h1>General Fitness</h1>
                                <p>If your goals are to improve your overall health and wellness, we have everything you need.  We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more.</p>
                            </ItemInfoTxt>

                            <ItemInfoTxt>
                                <img src={iconGym3} alt="" />
                                <h1>Functional Training</h1>
                                <p>With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms our functional training room has all the equipment you need to take your training to the next level.</p>
                            </ItemInfoTxt>
                        </InfoTxt>
                    </Info>

                    <SumplementInfo>
                        <ItemInfoTxt >
                            <h1 style={{ fontSize: "clamp(2rem, 5vw, 5rem)", marginTop: "20px" }}>THE <span>SUPPLEMENT FACTORY</span></h1>
                            <h2>AND SHAKE BAR</h2>
                            <p>Located conveniently within the Fitness Factory, stop by our shake bar for pre and post workout necessities including protein shakes made to order, protein bars and other snacks, as well as a wide array of supplements, to take home.</p>
                            <ItemInfoTxt>
                                <p style={{ fontWeight: 'bolder', margin: "25px 0" }}>The Shake Bar</p>
                                <ul style={{ marginBottom: "30px" }}>
                                    <li>Protein Shakes Made to Order</li>
                                    <li>Pre Workout Drinks & Powder</li>
                                    <li>BCAAs & EAAs</li>
                                    <li>Protein Bars & Other Snacks</li>
                                    <li>Bottled Water</li>
                                    <li>Energy Drinks</li>
                                    <li>Ready to Drink Protein</li>
                                </ul>
                            </ItemInfoTxt>

                            <ItemInfoTxt>
                                <p style={{ fontWeight: 'bolder', margin: "25px 0" }}>Retail & Merchandise</p>
                                <ul>
                                    <li>Protein Tubs</li>
                                    <li>Pre Workout</li>
                                    <li>Intra Workout</li>
                                    <li>Custom Apparel</li>
                                    <li>Shaker Bottles</li>
                                    <li>Combination Locks</li>
                                    <li>Ear Buds</li>
                                </ul>
                            </ItemInfoTxt>

                        </ItemInfoTxt>

                        <InfoImageSumplementos>

                            <img src={sumplementoIMG} alt="Imagem de uma atleta da academia" />

                        </InfoImageSumplementos>

                    </SumplementInfo>
                </Main>

                <Membership>
                    <img src={memberIMG} alt="" />
                    <InnerImageTxt>
                        <h1>YOUR FITNESS STARTS HERE SAVE TIME AND SIGN UP <span>ONLINE</span></h1>
                        <Link to="/contato">
                            <button>become a member</button>
                        </Link>
                    </InnerImageTxt>

                </Membership>


            </Container>

        </>
    )
}
