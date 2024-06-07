import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.css';
import { blur, translate } from '../../script';
import { JSX } from 'react';

export default function Body({links, selectedLink, setSelectedLink} : any) {

    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split("").forEach( (char, i) => {
          chars.push(
            <motion.span 
                custom={[i * 0.02, (word.length - i) * 0.01]} 
                variants={translate} initial="initial" 
                animate="enter" 
                exit="exit" 
                key={char + i}>
                {char}
            </motion.span>
            )
        })
        return chars;
    }
    
    return (
        <div className={styles.body}>
        {
            links.map( (link: { title: any; href: any; }, index: any) : any => {
                const { title, href } = link;
                return <Link key={`l_${index}`} href={href}>
                <motion.p 
                    onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                    onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
                    variants={blur} 
                    animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                    {getChars(title)}
                </motion.p>
                </Link>
            })
        }
        </div>
    )
}