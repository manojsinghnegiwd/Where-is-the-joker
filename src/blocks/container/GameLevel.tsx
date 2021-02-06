import React, { FunctionComponent, useRef } from "react";
import anime from "animejs";

// local imports
import Button from "../persentational/ui/Button";

const GameLevel: FunctionComponent = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <Button>Shuffle</Button>
        </div>
    );
};

export default GameLevel;
