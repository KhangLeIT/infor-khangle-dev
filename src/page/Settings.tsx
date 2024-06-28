import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface Settings {
    "--background-color": string;
    "--background-light": string;
    "--primary-color": string;
    "--shadow-color": string;
    "--text-color": string;
    "--text-light": string;
    "--font-size": string;
    "--animation-speed": number | string;
}

interface Theme {
    "--background-color": string;
    "--background-light": string;
    "--shadow-color": string;
    "--text-color": string;
    "--text-light": string;
}

interface FontSize {
    title: string;
    value: string;
}

interface AnimationSpeed {
    title: string;
    value: number;
}

export default function Settings() {
    const [settings, setSettings] = useState<Settings>({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    });

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            let value = settings[key as keyof Settings];
            if (typeof value === "number") {
                value = value.toString();
            }
            root.style.setProperty(key, value);
        }
    }, [settings]);

    const [theme, setTheme] = useState<"light" | "dark">("light");

    const themes: Theme[] = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ];

    function changeTheme(i: number) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        let _settings = { ...settings };
        for (let key in _theme) {
            _settings[key as keyof Settings] = _theme[key as keyof Theme];
        }
        setSettings(_settings);
    }

    function changeColor(i: number) {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings["--primary-color"] = _color;
        setPrimaryColor(i);
        setSettings(_settings);
    }

    function changeFontSize(i: number) {
        const _size = fontSizes[i];
        let _settings = { ...settings };
        _settings["--font-size"] = _size.value;
        setFontSize(i);
        setSettings(_settings);
    }

    function changeAnimationSpeed(i: number) {
        const _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings["--animation-speed"] = _speed.value;
        setAnimationSpeed(i);
        setSettings(_settings);
    }

    const primaryColors: string[] = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ];

    const fontSizes: FontSize[] = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ];

    const animationSpeeds: AnimationSpeed[] = [
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: 0.5
        }
    ];

    const [primaryColor, setPrimaryColor] = useState<number>(0);
    const [fontSize, setFontSize] = useState<number>(1);
    const [animationSpeed, setAnimationSpeed] = useState<number>(1);
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        setAnimationClass('slide-in');
        const timer = setTimeout(() => setAnimationClass(''), 500);
        return () => clearTimeout(timer);
    }, [animationClass]);
    return (
        <div>
              <div className={animationClass}>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div
                            key={index}
                            className="option light"
                            style={{ backgroundColor: color }}
                            onClick={() => changeColor(index)}
                        >
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeFontSize(index)}
                        >
                            {size.title}
                            {fontSize === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button
                            key={index}
                            className="btn"
                            onClick={() => changeAnimationSpeed(index)}
                        >
                            {speed.title}
                            {animationSpeed === index && (
                                <span>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
