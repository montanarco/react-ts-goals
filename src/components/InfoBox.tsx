import { type ReactNode } from "react";

type HintBoxProps = {
     mode: "info";
     children: ReactNode;
}

type WarninigBoxProps = {
    mode: "info" | "warning" ;
    severity?: "low" | "medium" | "high";
    children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarninigBoxProps;

export default function InfoBox(props:  InfoBoxProps){ //info, warning, error
    const {mode, children} = props;

    if(mode === "info"){
        return (
            <aside className="infobox infobox-hint">
                <p>
                    {children}
                </p>
            </aside>
        );
    }

    const {severity} = props;
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>warning</h2>
            <p>
                {props.children}
            </p>
        </aside>
    );
}