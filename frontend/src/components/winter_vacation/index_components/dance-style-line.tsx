import React from 'react';

interface DanceStyle {
    name: string;
    id: string;
    image: string;
}

interface DanceStyleLineProps {
    onStyleClick: (id: string) => void;
}

const DanceStyleLine: React.FC<DanceStyleLineProps> = ({ onStyleClick }) => {
    const danceStyles: DanceStyle[] = [
        { name: 'Hiphop', id: 'hiphop', image: '/dance_style/hiphop.jpg' },
        { name: 'Popping', id: 'popping', image: '/dance_style/popping.jpg' },
        { name: 'Locking', id: 'locking', image: '/dance_style/locking.jpg' },
        { name: 'Breaking', id: 'breaking', image: '/dance_style/breaking.jpg' },
        { name: 'House', id: 'house', image: '/dance_style/house.jpg' },
        { name: 'Feminine Style', id: 'feminine', image: '/dance_style/feminine.jpg' },
    ];


    return (
        <>
            {/* 時間軸容器 */}
            <div className="relative w-full">
                {/* 白色基準線 */}
                <div className="absolute w-full h-0.5 bg-white top-1/2 transform -translate-y-1/2"/>

                {/* 舞種節點容器 */}
                <div className="relative flex justify-between items-center px-[10%]">
                    {danceStyles.map((style) => (
                        <div
                            key={style.id}
                            className="relative group cursor-pointer"
                            onClick={() => onStyleClick(style.id)}
                        >
                            {/* 圓形節點 */}
                            <div className="w-4 h-4 bg-white rounded-full relative z-10
                                          transition-transform duration-300 
                                          group-hover:scale-150" />

                            {/* 懸浮圖片容器 */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {/* 圖片預留區 */}
                                <div className="w-32 h-32 bg-gray-700 rounded-lg overflow-hidden">
                                    {/* 圖片 */}
                                    <img
                                        src={style.image}
                                        alt={style.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* 舞種名稱 */}
                                <div className="text-white text-center mt-2">
                                    {style.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DanceStyleLine;