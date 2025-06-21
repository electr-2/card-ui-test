import React, { useState } from 'react';
import SwipeableCard from './SwipeableCard';

const CardDeck = () => {
    // 初期カードデータ
    const initialCards = [
        { id: 1, title: 'カード 1', description: '左にスワイプで削除、右にスワイプで保存' },
        { id: 2, title: 'カード 2', description: 'このカードは美しいグラデーションを持っています' },
        { id: 3, title: 'カード 3', description: 'スワイプジェスチャーをお試しください' },
        { id: 4, title: 'カード 4', description: 'マウスドラッグでも操作できます' },
        { id: 5, title: 'カード 5', description: '最後のカードです！' },
    ];

    const [currentCards, setCurrentCards] = useState(initialCards);
    const [likedCards, setLikedCards] = useState([]);
    const [dislikedCards, setDislikedCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        if (currentIndex < currentCards.length) {
            const card = currentCards[currentIndex];
            setDislikedCards(prev => [...prev, card]);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentIndex < currentCards.length) {
            const card = currentCards[currentIndex];
            setLikedCards(prev => [...prev, card]);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const resetDeck = () => {
        setCurrentCards(initialCards);
        setLikedCards([]);
        setDislikedCards([]);
        setCurrentIndex(0);
    };

    const currentCard = currentIndex < currentCards.length ? currentCards[currentIndex] : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">スワイプカード デモ</h1>
                <p className="text-gray-300">← 左スワイプで削除 | 右スワイプで保存 →</p>
            </div>

            {/* カードエリア */}
            <div className="relative mb-8">
                {currentCard ? (
                    <SwipeableCard
                        key={currentCard.id}
                        card={currentCard}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                ) : (
                    <div className="w-80 h-96 border-2 border-dashed border-gray-500 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <p className="text-xl mb-4">すべてのカードを処理しました！</p>
                            <button
                                onClick={resetDeck}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                            >
                                リセット
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 統計 */}
            <div className="flex space-x-8 text-center">
                <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 min-w-[120px]">
                    <div className="text-red-400 text-sm">削除済み</div>
                    <div className="text-white text-2xl font-bold">{dislikedCards.length}</div>
                </div>

                <div className="bg-gray-500 bg-opacity-20 border border-gray-500 rounded-lg p-4 min-w-[120px]">
                    <div className="text-gray-400 text-sm">残り</div>
                    <div className="text-white text-2xl font-bold">{Math.max(0, currentCards.length - currentIndex)}</div>
                </div>

                <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 min-w-[120px]">
                    <div className="text-green-400 text-sm">保存済み</div>
                    <div className="text-white text-2xl font-bold">{likedCards.length}</div>
                </div>
            </div>

            {/* カード一覧（デバッグ用） */}
            <div className="mt-8 flex space-x-4 text-xs">
                {likedCards.length > 0 && (
                    <div className="bg-green-900 bg-opacity-50 p-3 rounded-lg">
                        <h3 className="text-green-400 font-semibold mb-2">保存済みカード:</h3>
                        {likedCards.map(card => (
                            <div key={card.id} className="text-green-300">{card.title}</div>
                        ))}
                    </div>
                )}

                {dislikedCards.length > 0 && (
                    <div className="bg-red-900 bg-opacity-50 p-3 rounded-lg">
                        <h3 className="text-red-400 font-semibold mb-2">削除済みカード:</h3>
                        {dislikedCards.map(card => (
                            <div key={card.id} className="text-red-300">{card.title}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardDeck;
