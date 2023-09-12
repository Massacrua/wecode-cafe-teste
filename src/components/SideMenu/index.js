import styles from "./SideMenu.module.css"
import "./SideMenu.css"
import { ReactComponent as BlackLogo } from "assets/logo2.svg"
import { AiOutlineClose } from "react-icons/ai"
import { MdExpandMore } from "react-icons/md"
import { slide as Menu } from "react-burger-menu";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const SideMenu = props => {
    return (
        <Menu 
            width={"70%"}
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
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore color="#181818" size={20}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>
                        Cafés especiais
                    </Typography>                   
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li><a>Café Cyborg</a></li>
                            <li><a>Café Star Wars</a></li>
                            <li><a>Café Dark Elf</a></li>
                            <li><a>Ver todos</a></li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore color="#181818" size={20}/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>
                        Cafés tradicionais
                    </Typography>                   
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li><a>Café preto</a></li>
                            <li><a>Café com leite</a></li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<MdExpandMore color="#181818" size={20}/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>
                        Kits
                    </Typography>                   
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li><a>Kit energético</a></li>
                            <li><a>Kit de chás especiais</a></li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <a href='#'>Wecoffee Club+</a>
        </Menu>
    )
}

export default SideMenu