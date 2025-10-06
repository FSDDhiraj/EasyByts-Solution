// Sample stock data with initial prices and changes
        const stocks = [
            { 
                symbol: "AAPL", 
                name: "Apple Inc.", 
                price: 180.25, 
                change: 1.25, 
                changePercent: 0.70,
                history: [178, 179.5, 180, 179.75, 180.25],
                sector: "Technology",
                marketCap: "2.8T",
                peRatio: 29.5,
                description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide."
            },
            { 
                symbol: "GOOGL", 
                name: "Alphabet Inc.", 
                price: 138.42, 
                change: -0.85, 
                changePercent: -0.61,
                history: [139, 138.8, 139.2, 138.5, 138.42],
                sector: "Technology",
                marketCap: "1.7T",
                peRatio: 24.8,
                description: "Alphabet Inc. provides online advertising services, cloud services, software and hardware products, and other services."
            },
            { 
                symbol: "TSLA", 
                name: "Tesla Inc.", 
                price: 245.60, 
                change: 5.15, 
                changePercent: 2.14,
                history: [240, 242.5, 243, 244.2, 245.6],
                sector: "Automotive",
                marketCap: "780B",
                peRatio: 68.2,
                description: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, energy generation and storage systems."
            },
            { 
                symbol: "MSFT", 
                name: "Microsoft Corp.", 
                price: 337.89, 
                change: 2.45, 
                changePercent: 0.73,
                history: [335, 336.2, 337, 337.5, 337.89],
                sector: "Technology",
                marketCap: "2.5T",
                peRatio: 32.1,
                description: "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide."
            },
            { 
                symbol: "AMZN", 
                name: "Amazon.com Inc.", 
                price: 145.18, 
                change: -1.32, 
                changePercent: -0.90,
                history: [146, 146.5, 145.8, 145.5, 145.18],
                sector: "Consumer Cyclical",
                marketCap: "1.5T",
                peRatio: 58.3,
                description: "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores."
            },
            { 
                symbol: "META", 
                name: "Meta Platforms Inc.", 
                price: 312.65, 
                change: 4.25, 
                changePercent: 1.38,
                history: [308, 309.5, 311, 311.8, 312.65],
                sector: "Communication Services",
                marketCap: "800B",
                peRatio: 26.4,
                description: "Meta Platforms, Inc. develops products that enable people to connect and share with friends and family through mobile devices and computers."
            },
            { 
                symbol: "NFLX", 
                name: "Netflix Inc.", 
                price: 422.36, 
                change: -3.42, 
                changePercent: -0.80,
                history: [425, 424.5, 423.8, 423, 422.36],
                sector: "Communication Services",
                marketCap: "187B",
                peRatio: 41.2,
                description: "Netflix, Inc. provides entertainment services. It offers TV series, films, and games across various genres and languages."
            },
            { 
                symbol: "NVDA", 
                name: "NVIDIA Corp.", 
                price: 475.94, 
                change: 12.85, 
                changePercent: 2.78,
                history: [463, 468.5, 472, 474.2, 475.94],
                sector: "Technology",
                marketCap: "1.2T",
                peRatio: 64.7,
                description: "NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally."
            },
            { 
                symbol: "JPM", 
                name: "JPMorgan Chase & Co.", 
                price: 155.30, 
                change: 0.75, 
                changePercent: 0.49,
                history: [154.2, 154.8, 155, 155.1, 155.3],
                sector: "Financial Services",
                marketCap: "450B",
                peRatio: 10.2,
                description: "JPMorgan Chase & Co. provides financial and investment banking services worldwide."
            },
            { 
                symbol: "JNJ", 
                name: "Johnson & Johnson", 
                price: 162.45, 
                change: -0.55, 
                changePercent: -0.34,
                history: [162.8, 162.7, 162.6, 162.5, 162.45],
                sector: "Healthcare",
                marketCap: "430B",
                peRatio: 16.8,
                description: "Johnson & Johnson develops, manufactures, and sells healthcare products worldwide."
            }
        ];

        // Sample news data
        const news = [
            {
                title: "Tech Stocks Rally Amid AI Optimism",
                summary: "Major technology companies see gains as investors show confidence in AI-driven growth prospects.",
                date: "2 hours ago",
                category: "Technology"
            },
            {
                title: "Federal Reserve Holds Interest Rates Steady",
                summary: "The central bank maintains current rates while signaling potential future adjustments based on economic indicators.",
                date: "5 hours ago",
                category: "Economy"
            },
            {
                title: "Electric Vehicle Sales Surge in Q3",
                summary: "Global EV sales increase by 35% as consumer adoption accelerates and charging infrastructure expands.",
                date: "1 day ago",
                category: "Automotive"
            },
            {
                title: "Healthcare Sector Shows Resilience",
                summary: "Pharmaceutical and biotech stocks outperform market averages amid ongoing innovation in treatment options.",
                date: "1 day ago",
                category: "Healthcare"
            }
        ];

        // Sample leaderboard data
        const leaderboard = [
            { name: "TraderPro", portfolioValue: 15420, returnPercent: 54.2 },
            { name: "MarketWizard", portfolioValue: 14280, returnPercent: 42.8 },
            { name: "StockMaster", portfolioValue: 13850, returnPercent: 38.5 },
            { name: "InvestSmart", portfolioValue: 13210, returnPercent: 32.1 },
            { name: "BullTrader", portfolioValue: 12870, returnPercent: 28.7 },
            { name: "AlphaSeeker", portfolioValue: 12540, returnPercent: 25.4 },
            { name: "You", portfolioValue: 10000, returnPercent: 0.0 },
            { name: "ValueHunter", portfolioValue: 9870, returnPercent: -1.3 },
            { name: "RiskTaker", portfolioValue: 9450, returnPercent: -5.5 },
            { name: "NewTrader", portfolioValue: 8920, returnPercent: -10.8 }
        ];

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize user data if not exists
            initUserData();
            
            // Set up event listeners
            setupEventListeners();
            
            // Load initial data
            loadDashboard();
            loadMarket();
            loadPortfolioPage();
            loadHistory();
            loadWatchlistPage();
            loadNews();
            loadLeaderboard();
            loadSettings();
            
            // Start price simulation
            startPriceSimulation();
            
            // Set up navigation
            setupNavigation();
        });

        // Initialize user data in localStorage
        function initUserData() {
            if (!localStorage.getItem('stockflow_balance')) {
                localStorage.setItem('stockflow_balance', '10000');
            }
            
            if (!localStorage.getItem('stockflow_portfolio')) {
                localStorage.setItem('stockflow_portfolio', JSON.stringify([]));
            }
            
            if (!localStorage.getItem('stockflow_transactions')) {
                localStorage.setItem('stockflow_transactions', JSON.stringify([]));
            }
            
            if (!localStorage.getItem('stockflow_watchlist')) {
                localStorage.setItem('stockflow_watchlist', JSON.stringify([]));
            }
            
            if (!localStorage.getItem('stockflow_settings')) {
                localStorage.setItem('stockflow_settings', JSON.stringify({
                    theme: 'dark',
                    startingBalance: 10000,
                    updateFrequency: 5000
                }));
            }
            
            // Apply theme
            const settings = JSON.parse(localStorage.getItem('stockflow_settings'));
            document.documentElement.setAttribute('data-bs-theme', settings.theme);
            
            // Update UI with balance
            updateBalanceDisplay();
        }

        // Set up navigation
        function setupNavigation() {
            // Handle navigation clicks
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = this.getAttribute('href').substring(1);
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show target section, hide others
                    document.querySelectorAll('.page-section').forEach(section => {
                        section.classList.add('d-none');
                    });
                    document.getElementById(target).classList.remove('d-none');
                });
            });
        }

        // Update balance display
        function updateBalanceDisplay() {
            const balance = getBalance();
            document.getElementById('navBalance').textContent = formatCurrency(balance);
            document.getElementById('cashBalance').textContent = formatCurrency(balance);
        }

        // Get user balance
        function getBalance() {
            return parseFloat(localStorage.getItem('stockflow_balance'));
        }

        // Update user balance
        function updateBalance(amount) {
            localStorage.setItem('stockflow_balance', amount.toString());
            updateBalanceDisplay();
        }

        // Format currency
        function formatCurrency(amount) {
            return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }

        // Show toast notification
        function showToast(message, type = 'success') {
            const toast = new bootstrap.Toast(document.getElementById('actionToast'));
            const toastMessage = document.getElementById('toastMessage');
            
            toastMessage.textContent = message;
            document.getElementById('actionToast').classList.remove('bg-success', 'bg-danger');
            
            if (type === 'success') {
                document.getElementById('actionToast').classList.add('bg-success');
            } else if (type === 'error') {
                document.getElementById('actionToast').classList.add('bg-danger');
            }
            
            toast.show();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Buy and sell buttons
            document.getElementById('buyStockBtn').addEventListener('click', function() {
                const stockSymbol = this.dataset.stockSymbol;
                showTradeModal(stockSymbol, 'buy');
            });
            
            document.getElementById('sellStockBtn').addEventListener('click', function() {
                const stockSymbol = this.dataset.stockSymbol;
                showTradeModal(stockSymbol, 'sell');
            });
            
            // Confirm trade button
            document.getElementById('confirmTradeBtn').addEventListener('click', executeTrade);
            
            // Theme toggle
            document.getElementById('themeToggle').addEventListener('click', toggleTheme);
            
            // Settings
            document.getElementById('saveSettings').addEventListener('click', saveSettings);
            document.getElementById('resetPortfolioBtn').addEventListener('click', resetPortfolio);
            document.getElementById('clearDataBtn').addEventListener('click', clearAllData);
            
            // Watchlist
            document.getElementById('addWatchlistBtn').addEventListener('click', addToWatchlist);
            
            // Search functionality
            document.getElementById('stockSearch').addEventListener('input', filterStocks);
            
            // Filter options
            document.querySelectorAll('.filter-option').forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.filter-option').forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    filterStocks();
                });
            });
        }

        // Load dashboard data
        function loadDashboard() {
            // Update portfolio summary
            updatePortfolioSummary();
            
            // Load market overview (top 4 stocks)
            const marketOverview = document.getElementById('marketOverview');
            marketOverview.innerHTML = '';
            
            stocks.slice(0, 4).forEach(stock => {
                const stockCard = createStockCard(stock);
                marketOverview.appendChild(stockCard);
            });
            
            // Load top gainers and losers
            loadTopGainersLosers();
            
            // Load portfolio and watchlist for dashboard
            loadPortfolio();
            loadWatchlist();
        }

        // Create a stock card element
        function createStockCard(stock) {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-6 mb-3';
            
            const isPositive = stock.change >= 0;
            const changeClass = isPositive ? 'positive-change' : 'negative-change';
            const changeBgClass = isPositive ? 'positive-bg' : 'negative-bg';
            const changeIcon = isPositive ? 'bi-arrow-up-right' : 'bi-arrow-down-left';
            
            col.innerHTML = `
                <div class="card stock-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <div class="stock-symbol">${stock.symbol}</div>
                                <div class="stock-name">${stock.name}</div>
                            </div>
                            <i class="bi ${changeIcon} ${changeClass} fs-5"></i>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="h4 mb-0">$${stock.price.toFixed(2)}</div>
                            <div class="change-indicator ${changeBgClass} ${changeClass}">
                                ${isPositive ? '+' : ''}${stock.change.toFixed(2)} (${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                            </div>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-outline-primary btn-sm w-100 view-details-btn" data-stock-symbol="${stock.symbol}">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add event listener for view details
            col.querySelector('.view-details-btn').addEventListener('click', function() {
                showStockDetails(stock.symbol);
            });
            
            return col;
        }

        // Load top gainers and losers
        function loadTopGainersLosers() {
            const topGainers = document.getElementById('topGainers');
            const topLosers = document.getElementById('topLosers');
            
            topGainers.innerHTML = '';
            topLosers.innerHTML = '';
            
            // Sort stocks by change percent
            const sortedStocks = [...stocks].sort((a, b) => b.changePercent - a.changePercent);
            
            // Top 3 gainers
            sortedStocks.slice(0, 3).forEach(stock => {
                const item = createGainerLoserItem(stock, true);
                topGainers.appendChild(item);
            });
            
            // Top 3 losers
            sortedStocks.slice(-3).reverse().forEach(stock => {
                const item = createGainerLoserItem(stock, false);
                topLosers.appendChild(item);
            });
        }

        // Create gainer/loser list item
        function createGainerLoserItem(stock, isGainer) {
            const div = document.createElement('div');
            div.className = 'p-3 border-bottom';
            
            const changeClass = isGainer ? 'positive-change' : 'negative-change';
            const changeIcon = isGainer ? 'bi-arrow-up-right' : 'bi-arrow-down-left';
            
            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <div class="fw-bold">${stock.symbol}</div>
                        <small class="text-muted">${stock.name}</small>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold">$${stock.price.toFixed(2)}</div>
                        <small class="${changeClass}">
                            <i class="bi ${changeIcon} me-1"></i>${isGainer ? '+' : ''}${stock.changePercent.toFixed(2)}%
                        </small>
                    </div>
                </div>
            `;
            
            return div;
        }

        // Load market page
        function loadMarket() {
            const container = document.getElementById('stocksContainer');
            container.innerHTML = '';
            
            stocks.forEach(stock => {
                const stockCard = createStockCard(stock);
                container.appendChild(stockCard);
            });
        }

        // Filter stocks based on search and filter options
        function filterStocks() {
            const searchTerm = document.getElementById('stockSearch').value.toLowerCase();
            const activeFilter = document.querySelector('.filter-option.active').dataset.filter;
            const container = document.getElementById('stocksContainer');
            
            container.innerHTML = '';
            
            let filteredStocks = stocks.filter(stock => {
                const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm) || 
                                     stock.name.toLowerCase().includes(searchTerm);
                
                let matchesFilter = true;
                if (activeFilter === 'gainers') {
                    matchesFilter = stock.changePercent > 0;
                } else if (activeFilter === 'losers') {
                    matchesFilter = stock.changePercent < 0;
                } else if (activeFilter !== 'all') {
                    matchesFilter = stock.sector.toLowerCase().includes(activeFilter);
                }
                
                return matchesSearch && matchesFilter;
            });
            
            if (filteredStocks.length === 0) {
                container.innerHTML = `
                    <div class="col-12">
                        <div class="empty-state">
                            <i class="bi bi-search"></i>
                            <h4>No Stocks Found</h4>
                            <p>Try adjusting your search or filter criteria.</p>
                        </div>
                    </div>
                `;
                return;
            }
            
            filteredStocks.forEach(stock => {
                const stockCard = createStockCard(stock);
                container.appendChild(stockCard);
            });
        }

        // Show stock details in modal
        function showStockDetails(stockSymbol) {
            const stock = stocks.find(s => s.symbol === stockSymbol);
            if (!stock) return;
            
            const modalBody = document.getElementById('stockModalBody');
            const isPositive = stock.change >= 0;
            const changeClass = isPositive ? 'positive-change' : 'negative-change';
            
            // Create chart
            const chartCanvas = document.createElement('canvas');
            chartCanvas.id = 'stockChart';
            chartCanvas.height = 200;
            
            modalBody.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <h3>${stock.symbol}</h3>
                        <p class="text-muted">${stock.name}</p>
                        <div class="mb-3">
                            <div class="h2 ${changeClass}">$${stock.price.toFixed(2)}</div>
                            <div class="${changeClass}">
                                ${isPositive ? '+' : ''}${stock.change.toFixed(2)} (${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                            </div>
                        </div>
                        <div class="mb-3">
                            <div><strong>Sector:</strong> ${stock.sector}</div>
                            <div><strong>Market Cap:</strong> ${stock.marketCap}</div>
                            <div><strong>P/E Ratio:</strong> ${stock.peRatio}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="chart-container">
                            ${chartCanvas.outerHTML}
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <p>${stock.description}</p>
                    </div>
                </div>
            `;
            
            // Initialize chart
            setTimeout(() => {
                const ctx = document.getElementById('stockChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Day 5', 'Day 4', 'Day 3', 'Day 2', 'Today'],
                        datasets: [{
                            label: 'Price',
                            data: stock.history,
                            borderColor: isPositive ? '#00c853' : '#ff1744',
                            backgroundColor: isPositive ? 'rgba(0, 200, 83, 0.1)' : 'rgba(255, 23, 68, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            }, 100);
            
            document.getElementById('buyStockBtn').dataset.stockSymbol = stock.symbol;
            document.getElementById('sellStockBtn').dataset.stockSymbol = stock.symbol;
            
            const stockModal = new bootstrap.Modal(document.getElementById('stockModal'));
            stockModal.show();
        }

        // Show trade modal
        function showTradeModal(stockSymbol, action) {
            const stock = stocks.find(s => s.symbol === stockSymbol);
            if (!stock) return;
            
            const modalBody = document.getElementById('tradeModalBody');
            const portfolio = getPortfolio();
            const holding = portfolio.find(p => p.symbol === stockSymbol);
            const sharesOwned = holding ? holding.shares : 0;
            
            document.getElementById('tradeModalLabel').textContent = `${action.toUpperCase()} ${stock.symbol}`;
            
            modalBody.innerHTML = `
                <div class="mb-3">
                    <div class="h4">${stock.name} (${stock.symbol})</div>
                    <div class="h5">Current Price: $${stock.price.toFixed(2)}</div>
                </div>
                
                <div class="mb-3">
                    <label for="sharesInput" class="form-label">Number of Shares</label>
                    <input type="number" class="form-control" id="sharesInput" min="1" value="1">
                </div>
                
                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <span>Total ${action === 'buy' ? 'Cost' : 'Proceeds'}:</span>
                        <span id="totalCost">$${stock.price.toFixed(2)}</span>
                    </div>
                </div>
                
                ${action === 'buy' ? `
                    <div class="mb-3">
                        <div class="d-flex justify-content-between">
                            <span>Available Balance:</span>
                            <span>${formatCurrency(getBalance())}</span>
                        </div>
                    </div>
                ` : `
                    <div class="mb-3">
                        <div class="d-flex justify-content-between">
                            <span>Shares Owned:</span>
                            <span>${sharesOwned}</span>
                        </div>
                    </div>
                `}
                
                <div class="alert alert-info">
                    <small>
                        ${action === 'buy' 
                            ? `You are about to purchase shares of ${stock.symbol}. The total cost will be deducted from your available balance.` 
                            : `You are about to sell shares of ${stock.symbol}. The proceeds will be added to your available balance.`}
                    </small>
                </div>
            `;
            
            // Update total cost when shares change
            document.getElementById('sharesInput').addEventListener('input', function() {
                const shares = parseInt(this.value) || 0;
                const total = shares * stock.price;
                document.getElementById('totalCost').textContent = formatCurrency(total);
            });
            
            document.getElementById('confirmTradeBtn').dataset.tradeAction = action;
            document.getElementById('confirmTradeBtn').dataset.stockSymbol = stockSymbol;
            
            const tradeModal = new bootstrap.Modal(document.getElementById('tradeModal'));
            tradeModal.show();
            
            // Close stock modal if open
            const stockModal = bootstrap.Modal.getInstance(document.getElementById('stockModal'));
            if (stockModal) {
                stockModal.hide();
            }
        }

        // Execute a trade (buy or sell)
        function executeTrade() {
            const action = this.dataset.tradeAction;
            const stockSymbol = this.dataset.stockSymbol;
            const sharesInput = document.getElementById('sharesInput');
            const shares = parseInt(sharesInput.value) || 0;
            
            if (shares <= 0) {
                showToast('Please enter a valid number of shares.', 'error');
                return;
            }
            
            const stock = stocks.find(s => s.symbol === stockSymbol);
            if (!stock) return;
            
            const totalCost = shares * stock.price;
            const portfolio = getPortfolio();
            const holdingIndex = portfolio.findIndex(p => p.symbol === stockSymbol);
            const transactions = getTransactions();
            
            if (action === 'buy') {
                if (totalCost > getBalance()) {
                    showToast('Insufficient funds to complete this purchase.', 'error');
                    return;
                }
                
                // Update portfolio
                if (holdingIndex >= 0) {
                    portfolio[holdingIndex].shares += shares;
                    portfolio[holdingIndex].avgPrice = (
                        (portfolio[holdingIndex].avgPrice * (portfolio[holdingIndex].shares - shares) + totalCost) / 
                        portfolio[holdingIndex].shares
                    );
                } else {
                    portfolio.push({
                        symbol: stock.symbol,
                        name: stock.name,
                        shares: shares,
                        avgPrice: stock.price
                    });
                }
                
                // Update balance
                updateBalance(getBalance() - totalCost);
                
                // Record transaction
                transactions.push({
                    date: new Date().toISOString(),
                    type: 'buy',
                    symbol: stock.symbol,
                    name: stock.name,
                    shares: shares,
                    price: stock.price,
                    amount: totalCost
                });
                
                showToast(`Successfully purchased ${shares} shares of ${stock.symbol}.`);
                
            } else { // Sell action
                if (holdingIndex < 0 || portfolio[holdingIndex].shares < shares) {
                    showToast('You do not have enough shares to sell.', 'error');
                    return;
                }
                
                // Update portfolio
                portfolio[holdingIndex].shares -= shares;
                if (portfolio[holdingIndex].shares === 0) {
                    portfolio.splice(holdingIndex, 1);
                }
                
                // Update balance
                updateBalance(getBalance() + totalCost);
                
                // Record transaction
                transactions.push({
                    date: new Date().toISOString(),
                    type: 'sell',
                    symbol: stock.symbol,
                    name: stock.name,
                    shares: shares,
                    price: stock.price,
                    amount: totalCost
                });
                
                showToast(`Successfully sold ${shares} shares of ${stock.symbol}.`);
            }
            
            // Save data
            savePortfolio(portfolio);
            saveTransactions(transactions);
            
            // Update UI
            loadDashboard();
            loadPortfolioPage();
            loadHistory();
            
            // Close modal
            const tradeModal = bootstrap.Modal.getInstance(document.getElementById('tradeModal'));
            tradeModal.hide();
        }

        // Get portfolio from localStorage
        function getPortfolio() {
            return JSON.parse(localStorage.getItem('stockflow_portfolio'));
        }

        // Save portfolio to localStorage
        function savePortfolio(portfolio) {
            localStorage.setItem('stockflow_portfolio', JSON.stringify(portfolio));
        }

        // Get transactions from localStorage
        function getTransactions() {
            return JSON.parse(localStorage.getItem('stockflow_transactions'));
        }

        // Save transactions to localStorage
        function saveTransactions(transactions) {
            localStorage.setItem('stockflow_transactions', JSON.stringify(transactions));
        }

        // Load portfolio for dashboard
        function loadPortfolio() {
            const portfolio = getPortfolio();
            const container = document.getElementById('portfolioContainer');
            container.innerHTML = '';
            
            if (portfolio.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="bi bi-bag-x"></i>
                        <h4>No Holdings</h4>
                        <p>You haven't purchased any stocks yet.</p>
                    </div>
                `;
                return;
            }
            
            // Show only top 3 holdings in dashboard
            portfolio.slice(0, 3).forEach(holding => {
                const stock = stocks.find(s => s.symbol === holding.symbol);
                if (!stock) return;
                
                const currentValue = holding.shares * stock.price;
                const totalCost = holding.shares * holding.avgPrice;
                const gainLoss = currentValue - totalCost;
                const gainLossPercent = (gainLoss / totalCost) * 100;
                const isPositive = gainLoss >= 0;
                
                const holdingElement = document.createElement('div');
                holdingElement.className = 'card mb-2';
                holdingElement.innerHTML = `
                    <div class="card-body py-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="fw-bold">${holding.symbol}</div>
                                <small class="text-muted">${holding.shares} shares</small>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">${formatCurrency(currentValue)}</div>
                                <small class="${isPositive ? 'positive-change' : 'negative-change'}">
                                    ${isPositive ? '+' : ''}${formatCurrency(gainLoss)} (${isPositive ? '+' : ''}${gainLossPercent.toFixed(2)}%)
                                </small>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(holdingElement);
            });
            
            if (portfolio.length > 3) {
                const moreElement = document.createElement('div');
                moreElement.className = 'text-center mt-2';
                moreElement.innerHTML = `<small class="text-muted">+${portfolio.length - 3} more holdings</small>`;
                container.appendChild(moreElement);
            }
        }

        // Load portfolio page
        function loadPortfolioPage() {
            const portfolio = getPortfolio();
            const table = document.getElementById('portfolioTable');
            table.innerHTML = '';
            
            if (portfolio.length === 0) {
                table.innerHTML = `
                    <tr>
                        <td colspan="7" class="text-center py-4">
                            <div class="empty-state">
                                <i class="bi bi-bag-x"></i>
                                <h4>No Holdings</h4>
                                <p>You haven't purchased any stocks yet.</p>
                                <a href="#market" class="btn btn-primary">Browse Stocks</a>
                            </div>
                        </td>
                    </tr>
                `;
                
                // Reset portfolio summary
                document.getElementById('totalInvested').textContent = formatCurrency(0);
                document.getElementById('currentPortfolioValue').textContent = formatCurrency(0);
                document.getElementById('totalReturn').textContent = formatCurrency(0);
                document.getElementById('returnPercent').textContent = '0.00%';
                return;
            }
            
            let totalInvested = 0;
            let currentValue = 0;
            
            portfolio.forEach(holding => {
                const stock = stocks.find(s => s.symbol === holding.symbol);
                if (!stock) return;
                
                const holdingValue = holding.shares * stock.price;
                const invested = holding.shares * holding.avgPrice;
                const gainLoss = holdingValue - invested;
                const gainLossPercent = (gainLoss / invested) * 100;
                const isPositive = gainLoss >= 0;
                
                totalInvested += invested;
                currentValue += holdingValue;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="fw-bold">${holding.symbol}</div>
                        <small class="text-muted">${holding.name}</small>
                    </td>
                    <td>${holding.shares}</td>
                    <td>${formatCurrency(holding.avgPrice)}</td>
                    <td>${formatCurrency(stock.price)}</td>
                    <td>${formatCurrency(holdingValue)}</td>
                    <td class="${isPositive ? 'positive-change' : 'negative-change'}">
                        ${isPositive ? '+' : ''}${formatCurrency(gainLoss)} (${isPositive ? '+' : ''}${gainLossPercent.toFixed(2)}%)
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger sell-btn" data-symbol="${holding.symbol}">
                            <i class="bi bi-arrow-down-right"></i> Sell
                        </button>
                    </td>
                `;
                
                table.appendChild(row);
            });
            
            // Add event listeners to sell buttons
            table.querySelectorAll('.sell-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const symbol = this.dataset.symbol;
                    showTradeModal(symbol, 'sell');
                });
            });
            
            // Update portfolio summary
            const totalReturn = currentValue - totalInvested;
            const returnPercent = (totalReturn / totalInvested) * 100;
            
            document.getElementById('totalInvested').textContent = formatCurrency(totalInvested);
            document.getElementById('currentPortfolioValue').textContent = formatCurrency(currentValue);
            document.getElementById('totalReturn').textContent = formatCurrency(totalReturn);
            document.getElementById('totalReturn').className = `h3 fw-bold ${totalReturn >= 0 ? 'positive-change' : 'negative-change'}`;
            document.getElementById('returnPercent').textContent = `${totalReturn >= 0 ? '+' : ''}${returnPercent.toFixed(2)}%`;
            document.getElementById('returnPercent').className = `h3 fw-bold ${totalReturn >= 0 ? 'positive-change' : 'negative-change'}`;
        }

        // Load transaction history
        function loadHistory() {
            const transactions = getTransactions();
            const table = document.getElementById('transactionTable');
            table.innerHTML = '';
            
            if (transactions.length === 0) {
                table.innerHTML = `
                    <tr>
                        <td colspan="6" class="text-center py-4">
                            <div class="empty-state">
                                <i class="bi bi-clock-history"></i>
                                <h4>No Transactions</h4>
                                <p>You haven't made any trades yet.</p>
                            </div>
                        </td>
                    </tr>
                `;
                return;
            }
            
            // Show transactions in reverse chronological order
            transactions.slice().reverse().forEach(transaction => {
                const date = new Date(transaction.date);
                const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${formattedDate}</td>
                    <td>
                        <span class="badge ${transaction.type === 'buy' ? 'bg-success' : 'bg-danger'}">
                            ${transaction.type.toUpperCase()}
                        </span>
                    </td>
                    <td>
                        <div class="fw-bold">${transaction.symbol}</div>
                        <small class="text-muted">${transaction.name}</small>
                    </td>
                    <td>${transaction.shares}</td>
                    <td>${formatCurrency(transaction.price)}</td>
                    <td>${formatCurrency(transaction.amount)}</td>
                `;
                
                table.appendChild(row);
            });
        }

        // Load watchlist for dashboard
        function loadWatchlist() {
            const watchlist = JSON.parse(localStorage.getItem('stockflow_watchlist'));
            const container = document.getElementById('watchlistContainer');
            container.innerHTML = '';
            
            if (!watchlist || watchlist.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="bi bi-star"></i>
                        <h4>No Watchlist</h4>
                        <p>You haven't added any stocks to your watchlist yet.</p>
                    </div>
                `;
                return;
            }
            
            // Show only top 3 in dashboard
            watchlist.slice(0, 3).forEach(symbol => {
                const stock = stocks.find(s => s.symbol === symbol);
                if (!stock) return;
                
                const isPositive = stock.change >= 0;
                const changeClass = isPositive ? 'positive-change' : 'negative-change';
                
                const watchlistElement = document.createElement('div');
                watchlistElement.className = 'card mb-2';
                watchlistElement.innerHTML = `
                    <div class="card-body py-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="fw-bold">${stock.symbol}</div>
                                <small class="text-muted">${stock.name}</small>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">$${stock.price.toFixed(2)}</div>
                                <small class="${changeClass}">
                                    ${isPositive ? '+' : ''}${stock.change.toFixed(2)}
                                </small>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(watchlistElement);
            });
            
            if (watchlist.length > 3) {
                const moreElement = document.createElement('div');
                moreElement.className = 'text-center mt-2';
                moreElement.innerHTML = `<small class="text-muted">+${watchlist.length - 3} more stocks</small>`;
                container.appendChild(moreElement);
            }
        }

        // Load watchlist page
        function loadWatchlistPage() {
            const watchlist = JSON.parse(localStorage.getItem('stockflow_watchlist'));
            const container = document.getElementById('watchlistStocks');
            container.innerHTML = '';
            
            // Populate watchlist modal select
            const select = document.getElementById('watchlistStockSelect');
            select.innerHTML = '<option value="">Select a stock</option>';
            stocks.forEach(stock => {
                if (!watchlist || !watchlist.includes(stock.symbol)) {
                    const option = document.createElement('option');
                    option.value = stock.symbol;
                    option.textContent = `${stock.symbol} - ${stock.name}`;
                    select.appendChild(option);
                }
            });
            
            if (!watchlist || watchlist.length === 0) {
                container.innerHTML = `
                    <div class="col-12">
                        <div class="empty-state">
                            <i class="bi bi-star"></i>
                            <h4>No Watchlist</h4>
                            <p>You haven't added any stocks to your watchlist yet.</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#watchlistModal">
                                Add Stocks
                            </button>
                        </div>
                    </div>
                `;
                return;
            }
            
            watchlist.forEach(symbol => {
                const stock = stocks.find(s => s.symbol === symbol);
                if (!stock) return;
                
                const isPositive = stock.change >= 0;
                const changeClass = isPositive ? 'positive-change' : 'negative-change';
                const changeBgClass = isPositive ? 'positive-bg' : 'negative-bg';
                const changeIcon = isPositive ? 'bi-arrow-up-right' : 'bi-arrow-down-left';
                
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4 mb-3';
                col.innerHTML = `
                    <div class="card stock-card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <div class="stock-symbol">${stock.symbol}</div>
                                    <div class="stock-name">${stock.name}</div>
                                </div>
                                <i class="bi ${changeIcon} ${changeClass} fs-5"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-end">
                                <div class="h4 mb-0">$${stock.price.toFixed(2)}</div>
                                <div class="change-indicator ${changeBgClass} ${changeClass}">
                                    ${isPositive ? '+' : ''}${stock.change.toFixed(2)} (${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%)
                                </div>
                            </div>
                            <div class="mt-3 d-flex gap-2">
                                <button class="btn btn-outline-primary btn-sm flex-grow-1 view-details-btn" data-stock-symbol="${stock.symbol}">
                                    View Details
                                </button>
                                <button class="btn btn-outline-danger btn-sm remove-watchlist-btn" data-stock-symbol="${stock.symbol}">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add event listeners
                col.querySelector('.view-details-btn').addEventListener('click', function() {
                    showStockDetails(stock.symbol);
                });
                
                col.querySelector('.remove-watchlist-btn').addEventListener('click', function() {
                    removeFromWatchlist(stock.symbol);
                });
                
                container.appendChild(col);
            });
        }

        // Add stock to watchlist
        function addToWatchlist() {
            const select = document.getElementById('watchlistStockSelect');
            const symbol = select.value;
            
            if (!symbol) {
                showToast('Please select a stock to add.', 'error');
                return;
            }
            
            let watchlist = JSON.parse(localStorage.getItem('stockflow_watchlist')) || [];
            
            if (watchlist.includes(symbol)) {
                showToast('This stock is already in your watchlist.', 'error');
                return;
            }
            
            watchlist.push(symbol);
            localStorage.setItem('stockflow_watchlist', JSON.stringify(watchlist));
            
            showToast(`${symbol} added to your watchlist.`);
            
            // Close modal and refresh watchlist
            const modal = bootstrap.Modal.getInstance(document.getElementById('watchlistModal'));
            modal.hide();
            
            loadWatchlist();
            loadWatchlistPage();
        }

        // Remove stock from watchlist
        function removeFromWatchlist(symbol) {
            let watchlist = JSON.parse(localStorage.getItem('stockflow_watchlist')) || [];
            watchlist = watchlist.filter(s => s !== symbol);
            localStorage.setItem('stockflow_watchlist', JSON.stringify(watchlist));
            
            showToast(`${symbol} removed from your watchlist.`);
            
            loadWatchlist();
            loadWatchlistPage();
        }

        // Load news
        function loadNews() {
            const container = document.getElementById('newsContainer');
            container.innerHTML = '';
            
            news.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-6 mb-3';
                col.innerHTML = `
                    <div class="card news-card h-100">
                        <div class="card-body">
                            <span class="badge bg-warning mb-2">${item.category}</span>
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.summary}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">${item.date}</small>
                                <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(col);
            });
        }

        // Load leaderboard
        function loadLeaderboard() {
            const container = document.getElementById('leaderboardList');
            container.innerHTML = '';
            
            // Sort leaderboard by portfolio value
            const sortedLeaderboard = [...leaderboard].sort((a, b) => b.portfolioValue - a.portfolioValue);
            
            sortedLeaderboard.forEach((trader, index) => {
                const isUser = trader.name === 'You';
                const item = document.createElement('div');
                item.className = `p-3 border-bottom ${isUser ? 'leaderboard-item' : ''}`;
                
                item.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="fw-bold me-3">${index + 1}</div>
                            <div>
                                <div class="fw-bold ${isUser ? 'text-primary' : ''}">${trader.name}</div>
                                <small class="text-muted">Portfolio: ${formatCurrency(trader.portfolioValue)}</small>
                            </div>
                        </div>
                        <div class="text-end">
                            <div class="fw-bold ${trader.returnPercent >= 0 ? 'positive-change' : 'negative-change'}">
                                ${trader.returnPercent >= 0 ? '+' : ''}${trader.returnPercent.toFixed(1)}%
                            </div>
                            <small class="text-muted">Return</small>
                        </div>
                    </div>
                `;
                
                container.appendChild(item);
            });
            
            // Update user ranking info
            const userRanking = sortedLeaderboard.findIndex(trader => trader.name === 'You') + 1;
            document.querySelector('#leaderboard .display-4').textContent = `#${userRanking}`;
            
            const user = sortedLeaderboard.find(trader => trader.name === 'You');
            if (user) {
                document.getElementById('leaderboardPortfolioValue').textContent = formatCurrency(user.portfolioValue);
                document.getElementById('leaderboardReturn').textContent = formatCurrency(user.portfolioValue - 10000);
                document.getElementById('leaderboardReturn').className = user.returnPercent >= 0 ? 'positive-change' : 'negative-change';
                document.getElementById('leaderboardReturnPercent').textContent = `${user.returnPercent >= 0 ? '+' : ''}${user.returnPercent.toFixed(2)}%`;
                document.getElementById('leaderboardReturnPercent').className = user.returnPercent >= 0 ? 'positive-change' : 'negative-change';
            }
        }

        // Load settings
        function loadSettings() {
            const settings = JSON.parse(localStorage.getItem('stockflow_settings'));
            
            document.getElementById('startingBalance').value = settings.startingBalance;
            document.getElementById('updateFrequency').value = settings.updateFrequency;
            
            if (settings.theme === 'light') {
                document.getElementById('lightTheme').checked = true;
            } else {
                document.getElementById('darkTheme').checked = true;
            }
        }

        // Save settings
        function saveSettings() {
            const startingBalance = parseFloat(document.getElementById('startingBalance').value);
            const updateFrequency = document.getElementById('updateFrequency').value;
            const theme = document.querySelector('input[name="themeOption"]:checked').value;
            
            const settings = {
                startingBalance: startingBalance,
                updateFrequency: updateFrequency,
                theme: theme
            };
            
            localStorage.setItem('stockflow_settings', JSON.stringify(settings));
            
            // Apply theme
            document.documentElement.setAttribute('data-bs-theme', theme);
            
            // Update balance if changed
            if (startingBalance !== getBalance()) {
                updateBalance(startingBalance);
                updatePortfolioSummary();
            }
            
            showToast('Settings saved successfully.');
        }

        // Reset portfolio
        function resetPortfolio() {
            if (confirm('Are you sure you want to reset your portfolio? This will clear all your holdings and transactions.')) {
                localStorage.setItem('stockflow_portfolio', JSON.stringify([]));
                localStorage.setItem('stockflow_transactions', JSON.stringify([]));
                
                const settings = JSON.parse(localStorage.getItem('stockflow_settings'));
                updateBalance(settings.startingBalance);
                
                loadDashboard();
                loadPortfolioPage();
                loadHistory();
                
                showToast('Portfolio reset successfully.');
            }
        }

        // Clear all data
        function clearAllData() {
            if (confirm('Are you sure you want to clear all data? This will reset your portfolio, transactions, watchlist, and settings.')) {
                localStorage.removeItem('stockflow_balance');
                localStorage.removeItem('stockflow_portfolio');
                localStorage.removeItem('stockflow_transactions');
                localStorage.removeItem('stockflow_watchlist');
                localStorage.removeItem('stockflow_settings');
                
                initUserData();
                loadDashboard();
                loadMarket();
                loadPortfolioPage();
                loadHistory();
                loadWatchlistPage();
                loadNews();
                loadLeaderboard();
                loadSettings();
                
                showToast('All data cleared successfully.');
            }
        }

        // Update portfolio summary
        function updatePortfolioSummary() {
            const portfolio = getPortfolio();
            let portfolioValue = getBalance();
            let totalGainLoss = 0;
            let dailyChange = 0;
            
            portfolio.forEach(holding => {
                const stock = stocks.find(s => s.symbol === holding.symbol);
                if (stock) {
                    const currentValue = holding.shares * stock.price;
                    const totalCost = holding.shares * holding.avgPrice;
                    portfolioValue += currentValue;
                    totalGainLoss += (currentValue - totalCost);
                    
                    // Simple daily change calculation (for demo purposes)
                    dailyChange += holding.shares * stock.change;
                }
            });
            
            document.getElementById('portfolioValue').textContent = formatCurrency(portfolioValue);
            document.getElementById('dailyChange').textContent = formatCurrency(dailyChange);
            document.getElementById('dailyChange').className = `positive-change ${dailyChange >= 0 ? 'positive-change' : 'negative-change'}`;
            document.getElementById('totalGainLoss').textContent = formatCurrency(totalGainLoss);
            document.getElementById('totalGainLoss').className = `portfolio-value ${totalGainLoss >= 0 ? 'positive-change' : 'negative-change'}`;
            document.getElementById('stocksOwned').textContent = portfolio.length;
            
            // Update portfolio change text
            const portfolioChange = document.getElementById('portfolioChange');
            const changePercent = (dailyChange / (portfolioValue - dailyChange)) * 100;
            portfolioChange.textContent = `${dailyChange >= 0 ? '+' : ''}${formatCurrency(dailyChange)} (${dailyChange >= 0 ? '+' : ''}${changePercent.toFixed(2)}%) Today`;
            portfolioChange.className = `${dailyChange >= 0 ? 'positive-change' : 'negative-change'}`;
        }

        // Start price simulation
        function startPriceSimulation() {
            const settings = JSON.parse(localStorage.getItem('stockflow_settings'));
            const frequency = parseInt(settings.updateFrequency) || 5000;
            
            setInterval(() => {
                // Randomly update stock prices
                stocks.forEach(stock => {
                    // Store previous price for animation
                    const previousPrice = stock.price;
                    
                    // Generate random price change (-2% to +2%)
                    const changePercent = (Math.random() * 4 - 2) / 100;
                    const change = stock.price * changePercent;
                    
                    // Update stock price and change values
                    stock.price += change;
                    stock.change += change;
                    stock.changePercent = (stock.change / (stock.price - stock.change)) * 100;
                    
                    // Update history (shift and push new price)
                    stock.history.shift();
                    stock.history.push(stock.price);
                    
                    // Update UI if the stock card exists
                    updateStockCard(stock, previousPrice);
                });
                
                // Update portfolio summary
                updatePortfolioSummary();
                loadPortfolioPage();
                
            }, frequency);
        }

        // Update stock card with new price
        function updateStockCard(stock, previousPrice) {
            const stockCards = document.querySelectorAll('.stock-card');
            stockCards.forEach(card => {
                const symbolElement = card.querySelector('.stock-symbol');
                if (symbolElement && symbolElement.textContent === stock.symbol) {
                    // Update price
                    const priceElement = card.querySelector('.h4');
                    priceElement.textContent = `$${stock.price.toFixed(2)}`;
                    
                    // Add animation class based on price movement
                    if (stock.price > previousPrice) {
                        priceElement.classList.add('price-update');
                        setTimeout(() => {
                            priceElement.classList.remove('price-update');
                        }, 1000);
                    } else if (stock.price < previousPrice) {
                        priceElement.classList.add('price-down');
                        setTimeout(() => {
                            priceElement.classList.remove('price-down');
                        }, 1000);
                    }
                    
                    // Update change indicator
                    const isPositive = stock.change >= 0;
                    const changeClass = isPositive ? 'positive-change' : 'negative-change';
                    const changeBgClass = isPositive ? 'positive-bg' : 'negative-bg';
                    const changeIcon = isPositive ? 'bi-arrow-up-right' : 'bi-arrow-down-left';
                    
                    const changeIndicator = card.querySelector('.change-indicator');
                    changeIndicator.className = `change-indicator ${changeBgClass} ${changeClass}`;
                    changeIndicator.innerHTML = `${isPositive ? '+' : ''}${stock.change.toFixed(2)} (${isPositive ? '+' : ''}${stock.changePercent.toFixed(2)}%)`;
                    
                    // Update icon
                    const iconElement = card.querySelector('.bi');
                    iconElement.className = `bi ${changeIcon} ${changeClass} fs-5`;
                }
            });
        }

        // Toggle dark/light theme
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
            
            // Save theme preference
            const settings = JSON.parse(localStorage.getItem('stockflow_settings'));
            settings.theme = newTheme;
            localStorage.setItem('stockflow_settings', JSON.stringify(settings));
        }
   