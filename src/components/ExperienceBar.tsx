import { useState } from "react";

export function ExperienceBar() {
    const [ xp, setCountXp ] = useState(0);

    function incrementXp() {
        setCountXp(xp < 100 ? xp + 10 : xp);
    }

    function decrementXp() {
        setCountXp(xp > 0 ? xp - 10 : xp);
    }

    return (
        <header className="experience-bar">
            <button onClick={ decrementXp }>-</button>
            
            <span>0 xp</span>
            <div>
                <div style={{ width: xp + '%' }}></div>

                <span style={{ left: '50%' }} className="current-experience">
                    { xp * 6 } xp
                </span>
            </div>
            <span>600 xp</span>

            <button onClick={ incrementXp }>+</button>
        </header>
    );
}