'use client';

export function SoundWave() {
    return (
        <div
            className="relative -top-8 left-1/2 -translate-x-1/2 w-[100%] h-24 opacity-30"
            style={{
                background:
                    'radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)) 0%, rgba(219, 44, 44, 0) 100%)',
            }}
        >
            <svg
                className="w-full h-full text-primary"
                width="100%"
                height="100%"
                viewBox="0 0 1200 80"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g opacity="0.7" filter="url(#glow)" fill="currentColor">
                    <rect x="0" y="30" width="15" height="20" rx="3" />
                    <rect x="25" y="25" width="15" height="30" rx="3" />
                    <rect x="50" y="20" width="15" height="40" rx="3" />
                    <rect x="75" y="10" width="15" height="60" rx="3" />
                    <rect x="100" y="20" width="15" height="40" rx="3" />
                    <rect x="125" y="25" width="15" height="30" rx="3" />
                    <rect x="150" y="30" width="15" height="20" rx="3" />
                    <rect x="175" y="35" width="15" height="10" rx="3" />
                    <rect x="200" y="30" width="15" height="20" rx="3" />
                    <rect x="225" y="25" width="15" height="30" rx="3" />
                    <rect x="250" y="20" width="15" height="40" rx="3" />
                    <rect x="275" y="15" width="15" height="50" rx="3" />
                    <rect x="300" y="5" width="15" height="70" rx="3" />
                    <rect x="325" y="15" width="15" height="50" rx="3" />
                    <rect x="350" y="20" width="15" height="40" rx="3" />
                    <rect x="375" y="25" width="15" height="30" rx="3" />
                    <rect x="400" y="30" width="15" height="20" rx="3" />
                    <rect x="425" y="35" width="15" height="10" rx="3" />
                    <rect x="450" y="30" width="15" height="20" rx="3" />
                    <rect x="475" y="20" width="15" height="40" rx="3" />
                    <rect x="500" y="10" width="15" height="60" rx="3" />
                    <rect x="525" y="0" width="15" height="80" rx="3" />
                    <rect x="550" y="10" width="15" height="60" rx="3" />
                    <rect x="575" y="20" width="15" height="40" rx="3" />
                    <rect x="600" y="30" width="15" height="20" rx="3" />
                    <rect x="625" y="20" width="15" height="40" rx="3" />
                    <rect x="650" y="10" width="15" height="60" rx="3" />
                    <rect x="675" y="0" width="15" height="80" rx="3" />
                    <rect x="700" y="10" width="15" height="60" rx="3" />
                    <rect x="725" y="20" width="15" height="40" rx="3" />
                    <rect x="750" y="30" width="15" height="20" rx="3" />
                    <rect x="775" y="35" width="15" height="10" rx="3" />
                    <rect x="800" y="30" width="15" height="20" rx="3" />
                    <rect x="825" y="25" width="15" height="30" rx="3" />
                    <rect x="850" y="20" width="15" height="40" rx="3" />
                    <rect x="875" y="15" width="15" height="50" rx="3" />
                    <rect x="900" y="5" width="15" height="70" rx="3" />
                    <rect x="925" y="15" width="15" height="50" rx="3" />
                    <rect x="950" y="20" width="15" height="40" rx="3" />
                    <rect x="975" y="25" width="15" height="30" rx="3" />
                    <rect x="1000" y="30" width="15" height="20" rx="3" />
                    <rect x="1025" y="35" width="15" height="10" rx="3" />
                    <rect x="1050" y="30" width="15" height="20" rx="3" />
                    <rect x="1075" y="25" width="15" height="30" rx="3" />
                    <rect x="1100" y="20" width="15" height="40" rx="3" />
                    <rect x="1125" y="10" width="15" height="60" rx="3" />
                    <rect x="1150" y="20" width="15" height="40" rx="3" />
                    <rect x="1175" y="25" width="15" height="30" rx="3" />
                </g>
            </svg>
        </div>
    );
}
