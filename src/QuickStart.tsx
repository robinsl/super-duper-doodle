import reactLogo from "./assets/react.svg";
import {useState} from "react";

interface FrameworkLogo {
    name: string
    image: ImageData
}

interface ImageData {
    data: string
    size: number
}

const reactFramework: FrameworkLogo = {
    name: 'React',
    image: {
        data: reactLogo,
        size: 90
    },
}

const frameworks: FrameworkLogo[] = [
    {name: 'vue', image: {data: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png", size: 70}}
]
frameworks.push(reactFramework)

interface LogoProps {
    logo: FrameworkLogo
}

const Logo = (props: LogoProps) => {
    return (
        <>
            <h2>{props.logo.name}</h2>
            <img src={props.logo.image.data}
                 className={"logo react"}
                 style={{
                     width: props.logo.image.size,
                     height: props.logo.image.size
                 }}/>
        </>
    )
}

export const MyButton = ({count, onClick}) => {
    return <button onClick={onClick}>Got clicked {count} time</button>
};

export const LogoList = () => {
    const list = frameworks.map(framework =>
        <li>
            <Logo logo={framework} />
        </li>
    )

    return <ul>{list}</ul>
};

export const QuickStart = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>DaButtons</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
            <LogoList/>
        </>
    )
}