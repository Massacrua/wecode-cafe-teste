import styles from "./SideMenu.module.css"
import "./SideMenu.css"
import { ReactComponent as BlackLogo } from "assets/logo2.svg"
import { AiOutlineClose } from "react-icons/ai"
import { MdExpandMore } from "react-icons/md"
import { slide as Menu } from "react-burger-menu";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const SideMenu = props => {
    const typographyStyle = {
        fontFamily: "Raleway",
        border: "none",
        color: "#181818",
        fontWeight: "600",
        ul: {
            listStyleType: "none"
        },
        a: {
            textDecoration: "underline",
            color: "#181818",
            fontSize: "0.875rem",
            fontWeight: "400"
        }
    }

    return (
        <Menu 
            width={"319px"}
            className={styles.menu}
            customCrossIcon={<AiOutlineClose color="#181818"/>}
            customBurgerIcon={false}
            {...props}
        >
            <div className={styles.logo}>
                <BlackLogo/>
            </div>
            <div className={styles.banner}>
                <img src={require("assets/jogando-videogame.png")}/>
                <div>
                    <h3>Café Gamer</h3>
                    <p>Perfeito para aquela madrugada de lançamento de jogo novo</p>
                </div>
            </div>
            <div className={styles.accordions}>
                <Accordion 
                    defaultExpanded 
                    disableGutters 
                    sx={{boxShadow: "none"}}
                    classes={{
                        root: styles.MuiAccordionroot
                    }}
                >
                    <AccordionSummary
                        expandIcon={<MdExpandMore color="#181818" size={20}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography sx={typographyStyle}>
                            <span>Cafés especiais</span>
                        </Typography>                   
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={typographyStyle} component={"ul"}>
                            <ul>
                                <li><a>Café Cyborg</a></li>
                                <li><a>Café Star Wars</a></li>
                                <li><a>Café Dark Elf</a></li>
                                <li><a>Ver todos</a></li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion >
                <Accordion 
                    disableGutters 
                    sx={{boxShadow: "none"}}
                    classes={{
                        root: styles.MuiAccordionroot
                    }}
                >
                    <AccordionSummary
                        expandIcon={<MdExpandMore color="#181818" size={20}/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography sx={typographyStyle}>
                            <span>Cafés tradicionais</span>
                        </Typography>                   
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={typographyStyle} component={"ul"}>
                            <ul>
                                <li><a>Café preto</a></li>
                                <li><a>Café com leite</a></li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion 
                    disableGutters 
                    sx={{boxShadow: "none"}}
                    classes={{
                        root: styles.MuiAccordionroot
                    }}
                >
                    <AccordionSummary
                        expandIcon={<MdExpandMore color="#181818" size={20}/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography sx={typographyStyle}>
                            <span>Kits</span>
                        </Typography>                   
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={typographyStyle} component={"ul"}>
                            <ul>
                                <li><a>Kit energético</a></li>
                                <li><a>Kit de chás especiais</a></li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <a className={styles.wecoffeLink}>Wecoffee Club+</a>
            </div>
        </Menu>
    )
}

export default SideMenu