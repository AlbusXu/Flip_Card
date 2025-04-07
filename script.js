class MemoryGame {
    constructor() {
        this.currentRound = 1;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.timeLeft = 60;
        this.timer = null;
        this.isPlaying = false;
        this.startTime = null;
        this.roundTimes = []; // 存储每轮用时

        // DOM elements
        this.gameBoard = document.getElementById('game-board');
        this.startButton = document.getElementById('start-game');
        this.restartButton = document.getElementById('restart-game');
        this.timerDisplay = document.getElementById('timer');
        this.currentRoundDisplay = document.getElementById('current-round');
        this.messageDisplay = document.getElementById('message');
        this.confettiContainer = document.getElementById('confetti-container');

        // Bind event listeners
        this.startButton.addEventListener('click', () => this.startGame());
        this.restartButton.addEventListener('click', () => this.restartGame());
    }

    startGame() {
        this.isPlaying = true;
        this.startButton.style.display = 'none';
        this.restartButton.style.display = 'block';
        this.currentRound = 1;
        this.currentRoundDisplay.textContent = this.currentRound;
        this.timeLeft = 60;
        this.timerDisplay.textContent = this.timeLeft;
        this.startTime = Date.now();
        this.roundTimes = [];
        this.startTimer();
        this.createBoard();
    }

    restartGame() {
        this.gameBoard.innerHTML = '';
        this.startGame();
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timerDisplay.textContent = this.timeLeft;
            
            // 添加紧迫感提示
            if (this.timeLeft === 30) {
                this.showUrgentMessage();
            }
            
            if (this.timeLeft <= 0) {
                this.gameOver();
            }
        }, 1000);
    }

    createBoard() {
        const pairs = this.currentRound + 1;
        const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;

        // Create pairs of cards
        for (let i = 0; i < pairs; i++) {
            this.cards.push(emojis[i], emojis[i]);
        }

        // Shuffle cards
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }

        // Create card elements
        this.gameBoard.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(pairs * 2))}, 1fr)`;
        this.cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            card.dataset.emoji = emoji;
            card.addEventListener('click', () => this.flipCard(card));
            this.gameBoard.appendChild(card);
        });
    }

    flipCard(card) {
        if (!this.isPlaying || this.flippedCards.length >= 2 || 
            card.classList.contains('flipped') || 
            card.classList.contains('matched')) return;

        card.classList.add('flipped');
        card.textContent = card.dataset.emoji;
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
            this.checkMatch();
        }
    }

    checkMatch() {
        const [card1, card2] = this.flippedCards;
        const match = card1.dataset.emoji === card2.dataset.emoji;

        if (match) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            this.matchedPairs++;
            this.flippedCards = [];
            this.createConfetti();
            this.checkRoundComplete();
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
                this.flippedCards = [];
            }, 1000);
        }
    }

    createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const numConfetti = 20;

        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            this.confettiContainer.appendChild(confetti);

            // 清理彩带元素
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    showUrgentMessage() {
        const urgentMessage = document.createElement('div');
        urgentMessage.className = 'urgent-message';
        urgentMessage.textContent = '⏰ 时间过半，加油！';
        document.body.appendChild(urgentMessage);

        // 添加动画效果
        setTimeout(() => {
            urgentMessage.classList.add('show');
        }, 100);

        // 3秒后移除提示
        setTimeout(() => {
            urgentMessage.classList.remove('show');
            setTimeout(() => {
                urgentMessage.remove();
            }, 500);
        }, 3000);
    }

    showVictoryMessage() {
        const totalTime = this.roundTimes.reduce((a, b) => a + b, 0);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        const timeString = `${minutes}分${seconds}秒`;

        // 计算每轮用时
        const roundTimesString = this.roundTimes.map((time, index) => 
            `第${index + 1}轮：${time}秒`
        ).join('<br>');

        const victoryDiv = document.createElement('div');
        victoryDiv.className = 'victory-animation';
        victoryDiv.innerHTML = `
            <div class="victory-message">
                <h2>🎉 恭喜你赢了！</h2>
                <p>总用时：${timeString}</p>
                <p class="round-times">${roundTimesString}</p>
                <p>你真是太棒了！</p>
            </div>
        `;
        document.body.appendChild(victoryDiv);

        // 创建更多彩带
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createConfetti();
            }, i * 500);
        }
    }

    checkRoundComplete() {
        const totalPairs = this.currentRound + 1;
        if (this.matchedPairs === totalPairs) {
            // 记录当前轮次用时
            const roundTime = 60 - this.timeLeft;
            this.roundTimes.push(roundTime);

            if (this.currentRound === 3) {
                this.gameWon();
            } else {
                this.currentRound++;
                this.currentRoundDisplay.textContent = this.currentRound;
                this.timeLeft = 60;
                this.timerDisplay.textContent = this.timeLeft;
                this.gameBoard.innerHTML = '';
                setTimeout(() => this.createBoard(), 500);
            }
        }
    }

    gameOver() {
        clearInterval(this.timer);
        this.isPlaying = false;
        this.messageDisplay.textContent = '游戏结束！时间到了！';
        this.restartButton.style.display = 'block';
    }

    gameWon() {
        clearInterval(this.timer);
        this.isPlaying = false;
        this.showVictoryMessage();
        this.restartButton.style.display = 'block';
    }
}

// Initialize game
const game = new MemoryGame(); 