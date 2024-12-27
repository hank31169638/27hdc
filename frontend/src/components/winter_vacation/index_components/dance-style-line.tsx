import React, {useState} from 'react';

interface DanceStyle {
    name: string;
    id: string;
    image: string;
    intro: string;
}

interface DanceStyleLineProps {
    onStyleClick?: (id: string) => void; // 保留可選的 onStyleClick
}

const DanceStyleLine: React.FC<DanceStyleLineProps> = ({onStyleClick}) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const danceStyles: DanceStyle[] = [
        {name: 'Hiphop', id: 'hiphop', image: '/dance_style/hiphop.jpg', intro: 'Hiphop'},
        {name: 'Popping', id: 'popping', image: '/dance_style/popping.jpg', intro: 'Popping'},
        {name: 'Locking', id: 'locking', image: '/dance_style/locking.jpg', intro: 'Locking'},
        {name: 'Breaking', id: 'breaking', image: '/dance_style/breaking.jpg', intro: 'Breaking'},
        {name: 'House', id: 'house', image: '/dance_style/house.jpg', intro: 'House'},
        {name: 'Feminine Style', id: 'feminine', image: '/dance_style/feminine.jpg', intro: 'Feminine-Style'},
    ];

    const handleCircleClick = (id) => {
        setSelectedId(prevId => (prevId === id ? null : id));
    }

    const handleClick = (id: string) => {
        onStyleClick(id);
    };

    return (
        <div className="relative w-full flex flex-col sm:flex-row items-center justify-center">
            {/* 中央線 */}
            <div
                className="
                    absolute
                    bg-white
                    rounded-full
                    w-0.5 h-[80vh] sm:w-full sm:h-0.5 sm:left-0 phone:left-1/3
                "
            />

            {/* 節點容器 */}
            <div
                className="flex flex-col
                justify-between items-center px-8
                absolute transform
                /* sm 640 px*/
                sm:left-0 sm:translate-x-0 sm:w-full sm:px-0 sm:flex-row
                /* phone 320px */
                phone:left-1/3 phone:w-0.5 phone:translate-x-[-50%]
                "
            >
                {danceStyles.map((style) => (
                    <div
                        key={style.id}
                        className="relative group my-8 sm:px-32 sm:my-0"
                    >
                        {/* 圓形節點 */}
                        <div
                            className="
                                w-4 h-4 bg-white rounded-full relative z-10
                                transition-transform duration-300 cursor-pointer
                                {selectedId === style.id ? 'scale-150' : 'scale-100'}
                            "
                            onClick={() => handleCircleClick(style.id)}
                        />

                        {/* 點擊後顯示的信息 */}
                        {selectedId === style.id && (
                            <div
                                className="
                                    absolute
                                    opacity-100
                                    transition-opacity
                                    transform
                                    cursor-pointer
                                    phone:left-full phone:-translate-y-1/2 phone:ml-4
                                    sm:-translate-y-0 sm:ml-0
                                    sm:bottom-full sm:left-1/2 sm:-translate-x-1/2 sm:mb-4

                                "
                            >
                                {/* 圖片容器 */}
                                <div className="w-32 h-40 bg-white rounded-lg overflow-hidden
                                duration-300 hover:scale-110 p-2
                                "
                                     onClick={() => handleClick(style.id)}
                                >
                                    <div className="text-center text-black">選我選我</div>
                                    <img src={style.image} alt={style.name} className="w-full h-full object-cover pb-8"/>
                                </div>

                                {/* 舞種名稱 */}
                                <div className="text-white text-center mt-2">
                                    {style.name}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DanceStyleLine;
