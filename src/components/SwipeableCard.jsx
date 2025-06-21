import React, { useState, useRef } from 'react';

const SwipeableCard = ({ card, onSwipeLeft, onSwipeRight }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const cardRef = useRef(null);

    const handleStart = (clientX) => {
        setIsDragging(true);
        setStartX(clientX);
        setCurrentX(clientX);
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;

        setCurrentX(clientX);
        const deltaX = clientX - startX;
        setTranslateX(deltaX);
    };

    const handleEnd = () => {
        if (!isDragging) return;

        const deltaX = currentX - startX;
        const threshold = 100; // スワイプの最小距離

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                // 右にスワイプ
                onSwipeRight();
            } else {
                // 左にスワイプ
                onSwipeLeft();
            }
        }

        // リセット
        setIsDragging(false);
        setTranslateX(0);
        setStartX(0);
        setCurrentX(0);
    };

    // マウスイベント
    const handleMouseDown = (e) => {
        handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    // タッチイベント
    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    const opacity = Math.max(0.3, 1 - Math.abs(translateX) / 300);
    const rotation = translateX / 10;

    return (
        <div
            ref={cardRef}
            className={`relative w-80 h-96 cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
            style={{
                transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
                opacity: opacity,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-6 text-white flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                    <p className="text-lg opacity-90">{card.description}</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-sm opacity-75">#{card.id}</div>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* スワイプヒント */}
            {!isDragging && (
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <div className="text-red-500 text-6xl opacity-30">←</div>
                    <div className="text-green-500 text-6xl opacity-30">→</div>
                </div>
            )}
        </div>
    );
};

export default SwipeableCard;
